
# OpenMining - Mining Activity Detection System

A comprehensive web-based solution for automated detection and monitoring of open crust mining activities using satellite imagery and advanced geospatial analysis. This system helps government agencies and environmental organizations monitor mining compliance, detect illegal mining operations, and generate detailed reports.

## 🎯 Features

### Core Functionality
- **Real-time Mining Detection**: Automated detection of mining activities from satellite imagery
- **Interactive Mapping**: Dynamic maps with multiple layer support (satellite, terrain, boundaries)
- **3D Visualization**: Three-dimensional terrain analysis and visualization
- **Compliance Monitoring**: Track authorized vs unauthorized mining areas
- **Boundary Management**: Define and manage mining lease boundaries
- **Report Generation**: Automated compliance and violation reports

### Key Components
- **Dashboard**: Comprehensive overview of mining activities and key metrics
- **Data Upload**: Support for satellite imagery and geospatial data ingestion
- **Interactive Map**: Real-time mapping with Leaflet integration
- **3D Visualization**: Three.js powered terrain and mining activity visualization
- **Report Generator**: Customizable report generation with multiple export formats
- **Boundary Manager**: Tools for managing mining lease boundaries and restricted zones

### Advanced Analytics
- **Area Calculation**: Precise measurement of mining areas
- **Volume Estimation**: Calculate excavated material volumes
- **Risk Assessment**: Automated risk level classification
- **Change Detection**: Track changes over time
- **Violation Detection**: Identify unauthorized mining activities

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### UI Components
- **Radix UI** - Accessible component library
- **Lucide React** - Icon library
- **Shadcn/ui** - Beautifully designed components

### Mapping & Visualization
- **Leaflet** - Interactive mapping library
- **Three.js** - 3D graphics and visualization
- **Recharts** - Data visualization charts

### Additional Libraries
- **React Hook Form** - Form management
- **Class Variance Authority** - Component styling
- **Sonner** - Toast notifications

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aman-k-s/OpenMining.git
   cd OpenMining
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The built files will be available in the `build/` directory.

## 📁 Project Structure

```
OpenMining/
├── README.md
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Dashboard.tsx          # Main dashboard component
    │   │   ├── DataUpload.tsx         # Data ingestion interface
    │   │   ├── InteractiveMap.tsx     # Leaflet-based mapping
    │   │   ├── Visualization3D.tsx    # Three.js 3D visualization
    │   │   ├── ReportGenerator.tsx    # Report generation system
    │   │   ├── BoundaryManager.tsx    # Boundary management tools
    │   │   └── ui/                    # Reusable UI components
    │   ├── styles/
    │   │   └── globals.css            # Global styles
    │   ├── guidelines/
    │   │   └── Guidelines.md          # Development guidelines
    │   ├── App.tsx                    # Main application component
    │   └── main.tsx                   # Application entry point
    ├── public/                        # Static assets
    ├── build/                         # Production build output
    ├── package.json                   # Dependencies and scripts
    └── vite.config.ts                 # Vite configuration
```

## 🎮 Usage

### Dashboard
- View key metrics and analytics
- Monitor real-time mining activity status
- Access quick actions and alerts

### Data Upload
- Upload satellite imagery (GeoTIFF, KML formats)
- Import boundary data and mining lease information
- Batch processing capabilities

### Interactive Map
- Switch between satellite, terrain, and hybrid views
- Toggle mining area overlays
- Identify authorized vs unauthorized activities
- Real-time coordinate tracking

### 3D Visualization
- Explore terrain models
- Visualize excavation depth and volume
- Interactive 3D mining site analysis

### Report Generation
- Generate compliance reports
- Create violation alerts
- Export to multiple formats (PDF, CSV, JSON)
- Schedule automated reports

### Boundary Management
- Define mining lease boundaries
- Set restricted zones
- Import/export boundary data
- Validate mining activities against boundaries

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the frontend directory:

```env
VITE_API_BASE_URL=your_api_endpoint
VITE_MAPBOX_TOKEN=your_mapbox_token
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
```

### Customization
- Modify UI components in `src/components/ui/`
- Update global styles in `src/styles/globals.css`
- Add custom guidelines in `src/guidelines/Guidelines.md`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use functional components with hooks
- Implement responsive design principles
- Write meaningful commit messages
- Add appropriate documentation

## 📋 API Integration

This frontend is designed to work with a backend API that provides:
- Satellite imagery processing
- Machine learning-based mining detection
- Geospatial analysis services
- User authentication and authorization
- Data storage and retrieval

## 🛡️ Security Considerations

- Implement proper authentication mechanisms
- Validate all user inputs
- Secure API endpoints
- Use HTTPS in production
- Regular security audits

## 📊 Performance Optimization

- Lazy loading for large components
- Image optimization for satellite data
- Efficient map rendering
- Memory management for 3D visualizations
- Progressive data loading

## 🐛 Troubleshooting

### Common Issues

1. **Map not loading**: Check internet connection and API keys
2. **3D visualization performance**: Reduce detail level on older devices
3. **Large file uploads**: Ensure adequate server configuration
4. **Build errors**: Clear `node_modules` and reinstall dependencies

### Debug Mode
Run in development mode with detailed logging:
```bash
npm run dev -- --debug
```

## 📜 License

This project is part of the Smart India Hackathon (SIH) initiative and is intended for educational and governmental use.

## 🙏 Acknowledgments

- Smart India Hackathon for the opportunity
- Figma design team for the original UI/UX design
- Open source community for the amazing libraries and tools
- Environmental monitoring organizations for domain expertise

## 📞 Support

For technical support or questions:
- Create an issue in the GitHub repository
- Contact the development team
- Refer to the documentation in `src/guidelines/`

---

**Note**: This system is designed for government agencies, environmental organizations, and research institutions involved in mining activity monitoring and compliance enforcement.