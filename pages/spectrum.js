import Head from 'next/head';
import { useEffect, useState } from 'react';

const APPS = [
  { label: 'Spectrum Caddy', color: 'bg-[#0B4EF6] text-white' },
  { label: 'Mii', color: 'bg-[#BFC8D6] text-gray-900' },
  { label: 'System Settings', color: 'bg-[#FFF1BC] text-gray-900' },
  { label: 'Netflix', color: 'bg-[#E50914] text-white' },
  { label: 'YouTube', color: 'bg-[#474747] text-white' },
  { label: 'Prime Video', color: 'bg-[#0F79AF] text-white' },
  { label: 'Hulu', color: 'bg-[#1CE783] text-gray-900' },
  { label: 'Nintendo Switch', color: 'bg-[#E60012] text-white' },
  { label: 'Daily Log', color: 'bg-[#F3F4F6] text-gray-900' },
  { label: 'Parental Controls', color: 'bg-[#FF407F] text-white' },
  { label: 'Health & Safety', color: 'bg-[#F3F4F6] text-gray-900' },
  { label: 'IDesktop', color: 'bg-[#D0D5DD] text-gray-900' },
  { label: 'Disney+', color: 'bg-[#113CCF] text-white' },
  { label: 'Peacock', color: 'bg-[#000000] text-white' },
  { label: 'Paramount+', color: 'bg-[#005EB8] text-white' },
];

function AppTile({ label, color }) {
  return (
    <div
      className={`flex items-center justify-center h-32 w-44 rounded-lg border border-white/20 shadow-lg ${color}`}
    >
      <span className="text-sm font-semibold text-center px-2 leading-tight">
        {label}
      </span>
    </div>
  );
}

function ClientOnlyDate() {
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const now = new Date();
    setDateStr(
      now.toLocaleDateString(undefined, {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    );
  }, []);

  return <span>{dateStr}</span>;
}

export default function SpectrumDashboard() {
  return (
    <>
      <Head>
        <title>Nintendo Spectrum Dashboard</title>
      </Head>

      {/* Top Bar */}
      <header className="flex items-center justify-between px-4 py-1.5 bg-[#003AFF] text-white text-sm">
        <div className="font-semibold">Spectruini</div>
        <div className="uppercase tracking-wide">Main Menu</div>
        <ClientOnlyDate />
      </header>

      {/* Hero */}
      <section className="bg-[#0044FF] text-white py-8 flex flex-col items-center text-center relative overflow-hidden">
        <h2 className="uppercase tracking-wide text-xl mb-4">welcome to</h2>
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
          {/* Pixel diamond */}
          <div className="grid grid-cols-4 gap-0.5">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 md:w-3 md:h-3 ${i % 2 === 0 ? 'bg-cyan-300' : 'bg-fuchsia-600'} rotate-45`}
              />
            ))}
          </div>
          <div className="text-left leading-none">
            <p className="tracking-widest text-xs md:text-sm mb-1">N I N T E N D O</p>
            <h1 className="font-extrabold text-4xl md:text-6xl lg:text-7xl">Spectrum</h1>
          </div>
        </div>
        <p className="text-base md:text-lg italic mt-2">watch, listen, play.</p>
      </section>

      {/* App Grid */}
      <main className="flex items-center justify-center bg-[#0052FF] py-8">
        <button className="text-white text-4xl px-4">&#8249;</button>
        <div className="grid grid-cols-5 gap-6">
          {APPS.map((app) => (
            <AppTile key={app.label} label={app.label} color={app.color} />
          ))}
        </div>
        <button className="text-white text-4xl px-4">&#8250;</button>
      </main>

      {/* Bottom Nav */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[#53DBFF] py-2 flex items-center justify-center space-x-6 text-2xl">
        {['🎒', '🌐', '😊', '💬', '📝', '📰'].map((icon, idx) => (
          <span key={idx}>{icon}</span>
        ))}
      </footer>
    </>
  );
}