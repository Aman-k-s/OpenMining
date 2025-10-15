const API_BASE = 'http://127.0.0.1:8000';
const TOKEN = '58fdcce847515137d46251c95f7330474217cda9';

async function request(path: string, opts: RequestInit = {}) {
  const headers: any = {
    Authorization: `Token ${TOKEN}`,
    ...opts.headers,
  };

  const res = await fetch(`${API_BASE}${path}`, { ...opts, headers });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Request failed ${res.status}: ${text}`);
  }
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return res.json();
  return res.text();
}

export async function listRegions() {
  return request('/region/list');
}

export async function getRegionReport(id: number) {
  return request(`/region/report/3`);
}

export async function uploadRegion(formData: FormData) {
  return fetch(`${API_BASE}/region/upload`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${TOKEN}`,
    },
    body: formData,
  }).then(async (res) => {
    if (!res.ok) throw new Error(`Upload failed ${res.status}`);
    return res.json();
  });
}

export default { listRegions, getRegionReport, uploadRegion };
