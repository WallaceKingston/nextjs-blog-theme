import Head from 'next/head';
import { useEffect, useState } from 'react';

const APPS = [
  { label: 'Caddy', color: 'bg-gray-200 text-gray-900' },
  { label: 'Mii', color: 'bg-gray-300 text-gray-800' },
  { label: 'System Settings', color: 'bg-yellow-200 text-gray-900' },
  { label: 'Netflix', color: 'bg-red-600 text-white' },
  { label: 'YouTube', color: 'bg-gray-800 text-white' },
  { label: 'Prime Video', color: 'bg-blue-700 text-white' },
  { label: 'Hulu', color: 'bg-green-700 text-white' },
  { label: 'Switch', color: 'bg-red-500 text-white' },
  { label: 'Daily Log', color: 'bg-white text-gray-900' },
  { label: 'Parental Controls', color: 'bg-pink-500 text-white' },
  { label: 'Health & Safety', color: 'bg-white text-gray-900' },
  { label: 'Desktop', color: 'bg-gray-400 text-gray-900' },
  { label: 'Disney+', color: 'bg-blue-900 text-white' },
  { label: 'Peacock', color: 'bg-gray-900 text-white' },
  { label: 'Paramount+', color: 'bg-blue-700 text-white' },
];

function AppTile({ label, color }) {
  return (
    <div
      className={`flex items-center justify-center h-28 w-40 rounded-md border border-white/20 backdrop-blur-sm bg-opacity-20 ${color}`}
    >
      <span className="text-sm font-semibold text-center px-2">{label}</span>
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
      <header className="flex items-center justify-between px-4 py-2 bg-blue-700 text-white text-sm">
        <div className="font-semibold">Spectruini</div>
        <div className="uppercase tracking-wide">Main Menu</div>
        <ClientOnlyDate />
      </header>

      {/* Hero */}
      <section className="bg-blue-800 text-white py-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">welcome to <span className="text-cyan-300">Nintendo Spectrum</span></h1>
        <p className="text-lg italic">watch, listen, play.</p>
      </section>

      {/* App Grid */}
      <main className="flex items-center justify-center bg-blue-600 py-10">
        <button className="text-white text-4xl px-4">&#8249;</button>
        <div className="grid grid-cols-5 gap-6">
          {APPS.map((app) => (
            <AppTile key={app.label} label={app.label} color={app.color} />
          ))}
        </div>
        <button className="text-white text-4xl px-4">&#8250;</button>
      </main>

      {/* Bottom Nav */}
      <footer className="fixed bottom-0 left-0 right-0 bg-cyan-400 py-3 flex items-center justify-center space-x-8 text-2xl">
        {['🎒', '🌐', '😊', '💬', '📝', '📰'].map((icon, idx) => (
          <span key={idx}>{icon}</span>
        ))}
      </footer>
    </>
  );
}