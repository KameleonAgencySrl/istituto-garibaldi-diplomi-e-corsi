'use client';
import { useState } from 'react';

const locations = [
  { city: "Busto Arsizio", addr: "Via Ponchielli, 28", badge: "VA · Sede Legale", num: "01",
    src: "https://maps.google.com/maps?q=Via+Amilcare+Ponchielli+28+Busto+Arsizio&output=embed&z=15" },
  { city: "Legnano", addr: "Via Imperia, 21", badge: "MI · Sede Operativa", num: "02",
    src: "https://maps.google.com/maps?q=Via+Imperia+21+Legnano+MI&output=embed&z=15" },
  { city: "Novara", addr: "Via Dell'Archivio, 9", badge: "NO · Sede Operativa", num: "03",
    src: "https://maps.google.com/maps?q=Via+dell+Archivio+9+Novara&output=embed&z=15" },
  { city: "Borgomanero", addr: "Via Maggiate, 69B", badge: "NO · Sede Operativa", num: "04",
    src: "https://maps.google.com/maps?q=Via+Maggiate+69B+Borgomanero&output=embed&z=15" },
];

export default function LocationsMap() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      {/* ── MOBILE layout ── */}
      <div className="flex flex-col sm:hidden rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
        {/* Horizontal tab strip */}
        <div className="flex overflow-x-auto bg-white border-b border-slate-200 scrollbar-none">
          {locations.map((loc, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`flex-shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                activeIdx === i
                  ? 'border-[#1a3a6e] text-[#1a3a6e] bg-blue-50'
                  : 'border-transparent text-slate-500'
              }`}
            >
              {loc.city}
            </button>
          ))}
        </div>

        {/* Map iframe — explicit height so it is never invisible */}
        <div style={{ width: '100%', height: '380px', display: 'block', position: 'relative' }}>
          {locations.map((loc, i) => (
            <iframe
              key={i}
              src={loc.src}
              style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                opacity: activeIdx === i ? 1 : 0,
                zIndex: activeIdx === i ? 10 : 0,
                transition: 'opacity 0.3s',
              }}
              allowFullScreen
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden sm:flex h-[500px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0 bg-white border-r border-slate-200 overflow-y-auto flex flex-col">
          <div className="text-[10px] font-medium text-slate-400 tracking-widest uppercase px-5 py-4">Sedi</div>
          {locations.map((loc, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`text-left px-5 py-3.5 border-l-[3px] transition-all ${
                activeIdx === i
                  ? 'border-[#1a3a6e] bg-blue-50'
                  : 'border-transparent hover:bg-slate-50'
              }`}
            >
              <div className="text-[10px] text-slate-400 font-medium mb-1">{loc.num}</div>
              <div className="font-semibold text-slate-900 text-sm">{loc.city}</div>
              <div className="text-xs text-slate-500 mt-0.5">{loc.addr}</div>
              <span className="inline-block mt-1.5 text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-[#1a3a6e] font-medium">
                {loc.badge}
              </span>
            </button>
          ))}
          <div className="mt-auto px-5 py-4 border-t border-slate-100 text-[11px] text-slate-400 leading-relaxed">
            © Istituto Tecnico Italiano<br />Giuseppe Garibaldi S.r.l.
          </div>
        </div>

        {/* Map iframes */}
        <div className="flex-1 relative">
          {locations.map((loc, i) => (
            <iframe
              key={i}
              src={loc.src}
              className={`absolute inset-0 w-full h-full border-none transition-opacity duration-300 ${activeIdx === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              allowFullScreen
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </>
  );
}