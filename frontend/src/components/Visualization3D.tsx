import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Mountain, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Move3D,
  Play,
  Pause,
  RotateCw,
  Eye,
  Layers,
  Settings
} from 'lucide-react';
import * as THREE from 'three';
import DEMRaster from './DEMRaster';

// Simple OrbitControls implementation
class OrbitControls {
  object: THREE.Camera;
  domElement: HTMLElement;
  enabled: boolean = true;
  target: THREE.Vector3 = new THREE.Vector3();
  minDistance: number = 0;
  maxDistance: number = Infinity;
  minZoom: number = 0;
  maxZoom: number = Infinity;
  minPolarAngle: number = 0;
  maxPolarAngle: number = Math.PI;
  minAzimuthAngle: number = -Infinity;
  maxAzimuthAngle: number = Infinity;
  enableDamping: boolean = false;
  dampingFactor: number = 0.05;
  enableZoom: boolean = true;
  zoomSpeed: number = 1.0;
  enableRotate: boolean = true;
  rotateSpeed: number = 1.0;
  enablePan: boolean = true;
  panSpeed: number = 1.0;
  screenSpacePanning: boolean = true;
  keyPanSpeed: number = 7.0;
  autoRotate: boolean = false;
  autoRotateSpeed: number = 2.0;

  private spherical: THREE.Spherical = new THREE.Spherical();
  private sphericalDelta: THREE.Spherical = new THREE.Spherical();
  private scale: number = 1;
  private panOffset: THREE.Vector3 = new THREE.Vector3();
  private zoomChanged: boolean = false;

  private rotateStart: THREE.Vector2 = new THREE.Vector2();
  private rotateEnd: THREE.Vector2 = new THREE.Vector2();
  private rotateDelta: THREE.Vector2 = new THREE.Vector2();

  private panStart: THREE.Vector2 = new THREE.Vector2();
  private panEnd: THREE.Vector2 = new THREE.Vector2();
  private panDelta: THREE.Vector2 = new THREE.Vector2();

  private dollyStart: THREE.Vector2 = new THREE.Vector2();
  private dollyEnd: THREE.Vector2 = new THREE.Vector2();
  private dollyDelta: THREE.Vector2 = new THREE.Vector2();

  private state: number = -1;
  private STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 };

  constructor(object: THREE.Camera, domElement: HTMLElement) {
    this.object = object;
    this.domElement = domElement;
    this.domElement.addEventListener('contextmenu', this.onContextMenu);
    this.domElement.addEventListener('pointerdown', this.onPointerDown);
    this.domElement.addEventListener('wheel', this.onMouseWheel);
    this.update();
  }

  private onContextMenu = (event: Event) => {
    if (this.enabled === false) return;
    event.preventDefault();
  };

  private onPointerDown = (event: PointerEvent) => {
    if (this.enabled === false) return;

    switch (event.pointerType) {
      case 'mouse':
      case 'pen':
        this.onMouseDown(event);
        break;
    }
  };

  private onMouseDown = (event: PointerEvent) => {
    let mouseAction;

    switch (event.button) {
      case 0:
        mouseAction = this.STATE.ROTATE;
        break;
      case 1:
        mouseAction = this.STATE.DOLLY;
        break;
      case 2:
        mouseAction = this.STATE.PAN;
        break;
      default:
        mouseAction = this.STATE.NONE;
    }

    this.handleMouseDownRotate(event);
    this.state = mouseAction;

    if (this.state !== this.STATE.NONE) {
      this.domElement.addEventListener('pointermove', this.onPointerMove);
      this.domElement.addEventListener('pointerup', this.onPointerUp);
    }
  };

  private onPointerMove = (event: PointerEvent) => {
    if (this.enabled === false) return;

    switch (event.pointerType) {
      case 'mouse':
      case 'pen':
        this.onMouseMove(event);
        break;
    }
  };

  private onMouseMove = (event: PointerEvent) => {
    switch (this.state) {
      case this.STATE.ROTATE:
        if (this.enableRotate === false) return;
        this.handleMouseMoveRotate(event);
        this.update();
        break;
      case this.STATE.DOLLY:
        if (this.enableZoom === false) return;
        this.handleMouseMoveDolly(event);
        this.update();
        break;
      case this.STATE.PAN:
        if (this.enablePan === false) return;
        this.handleMouseMovePan(event);
        this.update();
        break;
    }
  };

  private onPointerUp = () => {
    this.domElement.removeEventListener('pointermove', this.onPointerMove);
    this.domElement.removeEventListener('pointerup', this.onPointerUp);
    this.state = this.STATE.NONE;
  };

  private onMouseWheel = (event: WheelEvent) => {
    if (this.enabled === false || this.enableZoom === false || (this.state !== this.STATE.NONE && this.state !== this.STATE.ROTATE)) return;
    event.preventDefault();
    this.handleMouseWheel(event);
    this.update();
  };

  private handleMouseDownRotate = (event: PointerEvent) => {
    this.rotateStart.set(event.clientX, event.clientY);
  };

  private handleMouseMoveRotate = (event: PointerEvent) => {
    this.rotateEnd.set(event.clientX, event.clientY);
    this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart).multiplyScalar(this.rotateSpeed);

    const element = this.domElement;
    this.rotateLeft(2 * Math.PI * this.rotateDelta.x / element.clientHeight);
    this.rotateUp(2 * Math.PI * this.rotateDelta.y / element.clientHeight);

    this.rotateStart.copy(this.rotateEnd);
  };

  private handleMouseMoveDolly = (event: PointerEvent) => {
    this.dollyEnd.set(event.clientX, event.clientY);
    this.dollyDelta.subVectors(this.dollyEnd, this.dollyStart);

    if (this.dollyDelta.y > 0) {
      this.dollyOut(this.getZoomScale());
    } else if (this.dollyDelta.y < 0) {
      this.dollyIn(this.getZoomScale());
    }

    this.dollyStart.copy(this.dollyEnd);
  };

  private handleMouseMovePan = (event: PointerEvent) => {
    this.panEnd.set(event.clientX, event.clientY);
    this.panDelta.subVectors(this.panEnd, this.panStart).multiplyScalar(this.panSpeed);
    this.pan(this.panDelta.x, this.panDelta.y);
    this.panStart.copy(this.panEnd);
  };

  private handleMouseWheel = (event: WheelEvent) => {
    if (event.deltaY < 0) {
      this.dollyIn(this.getZoomScale());
    } else if (event.deltaY > 0) {
      this.dollyOut(this.getZoomScale());
    }
  };

  private rotateLeft = (angle: number) => {
    this.sphericalDelta.theta -= angle;
  };

  private rotateUp = (angle: number) => {
    this.sphericalDelta.phi -= angle;
  };

  private panLeft = (distance: number, objectMatrix: THREE.Matrix4) => {
    const v = new THREE.Vector3();
    v.setFromMatrixColumn(objectMatrix, 0);
    v.multiplyScalar(-distance);
    this.panOffset.add(v);
  };

  private panUp = (distance: number, objectMatrix: THREE.Matrix4) => {
    const v = new THREE.Vector3();
    if (this.screenSpacePanning === true) {
      v.setFromMatrixColumn(objectMatrix, 1);
    } else {
      v.setFromMatrixColumn(objectMatrix, 0);
      v.crossVectors(this.object.up, v);
    }
    v.multiplyScalar(distance);
    this.panOffset.add(v);
  };

  private pan = (deltaX: number, deltaY: number) => {
    const element = this.domElement;
    if ((this.object as THREE.PerspectiveCamera).isPerspectiveCamera) {
      const position = this.object.position;
      const offset = position.clone().sub(this.target);
      let targetDistance = offset.length();
      targetDistance *= Math.tan(((this.object as THREE.PerspectiveCamera).fov / 2) * Math.PI / 180.0);
      this.panLeft(2 * deltaX * targetDistance / element.clientHeight, this.object.matrix);
      this.panUp(2 * deltaY * targetDistance / element.clientHeight, this.object.matrix);
    }
  };

  private dollyOut = (dollyScale: number) => {
    if ((this.object as THREE.PerspectiveCamera).isPerspectiveCamera) {
      this.scale /= dollyScale;
    }
  };

  private dollyIn = (dollyScale: number) => {
    if ((this.object as THREE.PerspectiveCamera).isPerspectiveCamera) {
      this.scale *= dollyScale;
    }
  };

  private getZoomScale = () => {
    return Math.pow(0.95, this.zoomSpeed);
  };

  update = () => {
    const offset = new THREE.Vector3();
    const quat = new THREE.Quaternion().setFromUnitVectors(this.object.up, new THREE.Vector3(0, 1, 0));
    const quatInverse = quat.clone().invert();

    const lastPosition = new THREE.Vector3();
    const lastQuaternion = new THREE.Quaternion();

    const twoPI = 2 * Math.PI;

    const position = this.object.position;

    offset.copy(position).sub(this.target);
    offset.applyQuaternion(quat);
    this.spherical.setFromVector3(offset);

    if (this.autoRotate && this.state === this.STATE.NONE) {
      this.rotateLeft(this.getAutoRotationAngle());
    }

    if (this.enableDamping) {
      this.spherical.theta += this.sphericalDelta.theta * this.dampingFactor;
      this.spherical.phi += this.sphericalDelta.phi * this.dampingFactor;
    } else {
      this.spherical.theta += this.sphericalDelta.theta;
      this.spherical.phi += this.sphericalDelta.phi;
    }

    let min = this.minAzimuthAngle;
    let max = this.maxAzimuthAngle;

    if (isFinite(min) && isFinite(max)) {
      if (min < -Math.PI) min += twoPI; else if (min > Math.PI) min -= twoPI;
      if (max < -Math.PI) max += twoPI; else if (max > Math.PI) max -= twoPI;
      if (min <= max) {
        this.spherical.theta = Math.max(min, Math.min(max, this.spherical.theta));
      } else {
        this.spherical.theta = (this.spherical.theta > (min + max) / 2) ?
          Math.max(min, this.spherical.theta) :
          Math.min(max, this.spherical.theta);
      }
    }

    this.spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this.spherical.phi));
    this.spherical.makeSafe();
    this.spherical.radius *= this.scale;
    this.spherical.radius = Math.max(this.minDistance, Math.min(this.maxDistance, this.spherical.radius));

    if (this.enableDamping === true) {
      this.target.addScaledVector(this.panOffset, this.dampingFactor);
    } else {
      this.target.add(this.panOffset);
    }

    offset.setFromSpherical(this.spherical);
    offset.applyQuaternion(quatInverse);

    position.copy(this.target).add(offset);
    this.object.lookAt(this.target);

    if (this.enableDamping === true) {
      this.sphericalDelta.theta *= (1 - this.dampingFactor);
      this.sphericalDelta.phi *= (1 - this.dampingFactor);
      this.panOffset.multiplyScalar(1 - this.dampingFactor);
    } else {
      this.sphericalDelta.set(0, 0, 0);
      this.panOffset.set(0, 0, 0);
    }

    this.scale = 1;

    if (this.zoomChanged ||
      lastPosition.distanceToSquared(this.object.position) > 1e-6 ||
      8 * (1 - lastQuaternion.dot(this.object.quaternion)) > 1e-6) {

      lastPosition.copy(this.object.position);
      lastQuaternion.copy(this.object.quaternion);
      this.zoomChanged = false;

      return true;
    }

    return false;
  };

  private getAutoRotationAngle = () => {
    return 2 * Math.PI / 60 / 60 * this.autoRotateSpeed;
  };

  dispose = () => {
    this.domElement.removeEventListener('contextmenu', this.onContextMenu);
    this.domElement.removeEventListener('pointerdown', this.onPointerDown);
    this.domElement.removeEventListener('wheel', this.onMouseWheel);
    this.domElement.removeEventListener('pointermove', this.onPointerMove);
    this.domElement.removeEventListener('pointerup', this.onPointerUp);
  };
}

interface Visualization3DProps {
  analysisData: any;
}

export function Visualization3D({ analysisData }: Visualization3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const meshesRef = useRef<THREE.Mesh[]>([]);
  const animationIdRef = useRef<number | null>(null);
  
  const [isAnimating, setIsAnimating] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState([1]);
  const [elevationScale, setElevationScale] = useState([2]);
  const [viewMode, setViewMode] = useState('terrain');
  const [showBoundaries, setShowBoundaries] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [loading, setLoading] = useState(true);

  // Mining areas data
  const miningAreas = [
    {
      id: 1,
      name: "Zone A - Authorized",
      type: "authorized",
      position: { x: -50, y: 0, z: -25 },
      size: { width: 40, height: 15, depth: 30 },
      volume: 2219,
      depth: 12.3,
      color: '#22c55e'
    },
    {
      id: 2,
      name: "Zone B - Authorized", 
      type: "authorized",
      position: { x: 25, y: 0, z: -15 },
      size: { width: 50, height: 18, depth: 35 },
      volume: 3740,
      depth: 18.7,
      color: '#3b82f6'
    },
    {
      id: 3,
      name: "Zone C - Illegal",
      type: "illegal",
      position: { x: -10, y: 0, z: 30 },
      size: { width: 45, height: 8, depth: 25 },
      volume: 571,
      depth: 8.2,
      color: '#ef4444'
    }
  ];

  const initializeScene = useCallback(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);
    scene.fog = new THREE.Fog(0x87ceeb, 100, 1000);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(100, 80, 100);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 50;
    controls.maxDistance = 400;
    controls.maxPolarAngle = Math.PI / 2;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(100, 100, 50);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.left = -100;
    directionalLight.shadow.camera.right = 100;
    directionalLight.shadow.camera.top = 100;
    directionalLight.shadow.camera.bottom = -100;
    scene.add(directionalLight);

    // Ground plane
    const groundGeometry = new THREE.PlaneGeometry(300, 300);
    const groundMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x90ee90,
      transparent: true,
      opacity: 0.8
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Create mining excavations
    const meshes: THREE.Mesh[] = [];
    
    miningAreas.forEach((area) => {
      // Create excavation (inverted cube)
      const excavationGeometry = new THREE.BoxGeometry(
        area.size.width,
        area.size.height * elevationScale[0],
        area.size.depth
      );
      
      const excavationMaterial = new THREE.MeshPhongMaterial({
        color: area.color,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
      });

      const excavation = new THREE.Mesh(excavationGeometry, excavationMaterial);
      excavation.position.set(
        area.position.x,
        -area.size.height * elevationScale[0] / 2,
        area.position.z
      );
      excavation.castShadow = true;
      excavation.receiveShadow = true;
      scene.add(excavation);
      meshes.push(excavation);

      // Add boundary wireframe for illegal mining
      if (area.type === 'illegal' && showBoundaries) {
        const boundaryGeometry = new THREE.BoxGeometry(
          area.size.width + 10,
          area.size.height * elevationScale[0] + 5,
          area.size.depth + 10
        );
        const boundaryMaterial = new THREE.MeshBasicMaterial({
          color: 0xff0000,
          wireframe: true,
          opacity: 0.8,
          transparent: true
        });
        const boundary = new THREE.Mesh(boundaryGeometry, boundaryMaterial);
        boundary.position.set(
          area.position.x,
          -area.size.height * elevationScale[0] / 2,
          area.position.z
        );
        scene.add(boundary);
        meshes.push(boundary);
      }

      // Add depth visualization lines
      for (let i = 1; i <= area.size.height; i++) {
        const lineGeometry = new THREE.RingGeometry(
          area.size.width / 2 - 2,
          area.size.width / 2,
          8
        );
        const lineMaterial = new THREE.MeshBasicMaterial({
          color: area.color,
          transparent: true,
          opacity: 0.3 - (i * 0.02)
        });
        const ring = new THREE.Mesh(lineGeometry, lineMaterial);
        ring.position.set(
          area.position.x,
          -i * elevationScale[0],
          area.position.z
        );
        ring.rotation.x = -Math.PI / 2;
        scene.add(ring);
        meshes.push(ring);
      }
    });

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;
    controlsRef.current = controls;
    meshesRef.current = meshes;

    setLoading(false);

    // Handle window resize
    const handleResize = () => {
      if (containerRef.current && camera && renderer) {
        camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [elevationScale, showBoundaries]);

  const animate = useCallback(() => {
    if (!sceneRef.current || !rendererRef.current || !cameraRef.current || !controlsRef.current) return;

    // Update controls
    controlsRef.current.update();

    // Auto rotation
    if (isAnimating) {
      controlsRef.current.autoRotate = true;
      controlsRef.current.autoRotateSpeed = rotationSpeed[0];
    } else {
      controlsRef.current.autoRotate = false;
    }

    rendererRef.current.render(sceneRef.current, cameraRef.current);
    animationIdRef.current = requestAnimationFrame(animate);
  }, [isAnimating, rotationSpeed]);

  useEffect(() => {
    initializeScene();
    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [initializeScene, animate]);

  // Update elevation scale
  useEffect(() => {
    if (sceneRef.current && meshesRef.current.length > 0) {
      // Clear existing meshes
      meshesRef.current.forEach(mesh => {
        sceneRef.current?.remove(mesh);
      });
      meshesRef.current = [];
      
      // Recreate scene with new scale
      initializeScene();
    }
  }, [elevationScale, showBoundaries, initializeScene]);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const resetView = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(100, 80, 100);
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
    setRotationSpeed([1]);
    setElevationScale([2]);
    setIsAnimating(false);
  };

  const zoomIn = () => {
    if (controlsRef.current && cameraRef.current) {
      const direction = new THREE.Vector3();
      cameraRef.current.getWorldDirection(direction);
      cameraRef.current.position.add(direction.multiplyScalar(10));
      controlsRef.current.update();
    }
  };

  const zoomOut = () => {
    if (controlsRef.current && cameraRef.current) {
      const direction = new THREE.Vector3();
      cameraRef.current.getWorldDirection(direction);
      cameraRef.current.position.add(direction.multiplyScalar(-10));
      controlsRef.current.update();
    }
  };

  const exportScreenshot = () => {
    if (rendererRef.current) {
      const link = document.createElement('a');
      link.download = 'mining-3d-visualization.png';
      link.href = rendererRef.current.domElement.toDataURL();
      link.click();
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-4">
        {/* 3D Visualization */}
        <div className="lg:col-span-3">
           <DEMRaster/>
        </div>

        {/* Analysis Panel */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Volume Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Excavation Zones</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span>Zone A</span>
                      <div className="text-right">
                        <div className="font-medium">2,219 m³</div>
                        <div className="text-xs text-gray-500">12.3m depth</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span>Zone B</span>
                      <div className="text-right">
                        <div className="font-medium">3,740 m³</div>
                        <div className="text-xs text-gray-500">18.7m depth</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-red-50 rounded border border-red-200">
                      <span>Zone C (Illegal)</span>
                      <div className="text-right">
                        <div className="font-medium text-red-600">571 m³</div>
                        <div className="text-xs text-red-500">8.2m depth</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Total Volume:</span>
                    <span className="font-bold">6,530 m³</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Calculation Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium">Simpson's Rule</h4>
                  <p className="text-gray-600">Used for volume estimation from DEM data</p>
                </div>
                <div className="space-y-1 text-xs text-gray-500">
                  <div>• Grid resolution: 5m</div>
                  <div>• Accuracy: ±5%</div>
                  <div>• Processing time: 2.3s</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                View Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Auto Rotation</span>
                  <Button
                    size="sm"
                    variant={isAnimating ? "default" : "outline"}
                    onClick={toggleAnimation}
                  >
                    {isAnimating ? "On" : "Off"}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Show Boundaries</span>
                  <Button 
                    size="sm" 
                    variant={showBoundaries ? "default" : "outline"}
                    onClick={() => setShowBoundaries(!showBoundaries)}
                  >
                    {showBoundaries ? "On" : "Off"}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Depth Labels</span>
                  <Button 
                    size="sm" 
                    variant={showLabels ? "default" : "outline"}
                    onClick={() => setShowLabels(!showLabels)}
                  >
                    {showLabels ? "On" : "Off"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Export Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => alert('3D model export functionality would be implemented here')}
                >
                  Export 3D Model
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={exportScreenshot}
                >
                  Save Screenshot
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setIsAnimating(true);
                    alert('Animation generation started');
                  }}
                >
                  Generate Animation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Analysis Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Depth Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Depth Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Maximum Depth:</span>
                <span className="font-medium">18.7 m</span>
              </div>
              <div className="flex justify-between">
                <span>Average Depth:</span>
                <span className="font-medium">13.1 m</span>
              </div>
              <div className="flex justify-between">
                <span>Minimum Depth:</span>
                <span className="font-medium">8.2 m</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Surface Area */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Surface Area</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Total Excavated:</span>
                <span className="font-medium">450.2 ha</span>
              </div>
              <div className="flex justify-between">
                <span>Authorized:</span>
                <span className="font-medium text-green-600">380.5 ha</span>
              </div>
              <div className="flex justify-between">
                <span>Violations:</span>
                <span className="font-medium text-red-600">69.7 ha</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Environmental Impact */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Environmental Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Soil Displacement:</span>
                <span className="font-medium">6,530 m³</span>
              </div>
              <div className="flex justify-between">
                <span>Impact Radius:</span>
                <span className="font-medium">500 m</span>
              </div>
              <div className="flex justify-between">
                <span>Risk Level:</span>
                <Badge variant="destructive" className="text-xs">High</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}