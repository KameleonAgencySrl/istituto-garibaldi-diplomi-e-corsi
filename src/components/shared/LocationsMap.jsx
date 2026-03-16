import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const locations = [
  { lat: 45.6088, lng: 8.8641, city: "Busto Arsizio", addr: "Via Ponchielli, 28", badge: "VA · Sede Legale", province: "VA" },
  { lat: 45.6009, lng: 8.8985, city: "Legnano",       addr: "Via Imperia, 21",    badge: "MI · Sede Operativa", province: "MI" },
  { lat: 45.4481, lng: 8.6240, city: "Novara",        addr: "Via Dell'Archivio, 9", badge: "NO · Sede Operativa", province: "NO" },
  { lat: 45.7150, lng: 8.4680, city: "Borgomanero",   addr: "Via Maggiate, 686",  badge: "NO · Sede Operativa", province: "NO" },
];

const customIcon = L.divIcon({
  className: '',
  html: `<div style="
    width:32px;height:32px;border-radius:50%;
    background:#1e3a5f;border:3px solid #fff;
    box-shadow:0 2px 10px rgba(0,0,0,0.3);
    display:flex;align-items:center;justify-content:center;">
    <div style="width:9px;height:9px;border-radius:50%;background:#fff;"></div>
  </div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -20],
});

function FlyTo({ position }) {
  const map = useMap();
  if (position) map.flyTo(position, 15, { duration: 1 });
  return null;
}

export default function LocationsMap() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [flyTarget, setFlyTarget] = useState(null);

  const selectLoc = (i) => {
    setActiveIdx(i);
    setFlyTarget([locations[i].lat, locations[i].lng]);
  };

  return (
    <div className="flex flex-col md:flex-row h-[500px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
      {/* Sidebar */}
      <div className="w-full md:w-64 flex-shrink-0 bg-white border-b md:border-b-0 md:border-r border-slate-200 overflow-y-auto flex flex-col">
        <div className="text-[10px] font-medium text-slate-400 tracking-widest uppercase px-5 py-4">Sedi</div>
        {locations.map((loc, i) => (
          <button
            key={i}
            onClick={() => selectLoc(i)}
            className={`text-left px-5 py-3.5 border-l-[3px] transition-all ${
              activeIdx === i
                ? 'border-[#1e3a5f] bg-blue-50'
                : 'border-transparent hover:bg-slate-50'
            }`}
          >
            <div className="text-[10px] text-slate-400 font-medium mb-1">0{i + 1}</div>
            <div className="font-semibold text-slate-900 text-sm">{loc.city}</div>
            <div className="text-xs text-slate-500 mt-0.5">{loc.addr}</div>
            <span className="inline-block mt-1.5 text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-[#1e3a5f] font-medium">
              {loc.badge}
            </span>
          </button>
        ))}
        <div className="mt-auto px-5 py-4 border-t border-slate-100 text-[11px] text-slate-400 leading-relaxed">
          © Istituto Tecnico Italiano<br />Giuseppe Garibaldi S.r.l.
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 h-full min-h-[300px]">
        <MapContainer
          center={[45.56, 8.72]}
          zoom={9}
          style={{ height: '100%', width: '100%' }}
          zoomControl={true}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19}
          />
          {flyTarget && <FlyTo position={flyTarget} />}
          {locations.map((loc, i) => (
            <Marker
              key={i}
              position={[loc.lat, loc.lng]}
              icon={customIcon}
              eventHandlers={{ click: () => setActiveIdx(i) }}
            >
              <Popup closeButton={false} maxWidth={240}>
                <div style={{ fontFamily: 'sans-serif', padding: '12px 14px', minWidth: '170px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Istituto Garibaldi</div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>{loc.city}</div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '3px' }}>{loc.addr}</div>
                  <div style={{ display: 'inline-block', marginTop: '8px', fontSize: '10px', padding: '2px 8px', borderRadius: '20px', background: '#e8edf5', color: '#1e3a5f', fontWeight: 500 }}>{loc.badge}</div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}