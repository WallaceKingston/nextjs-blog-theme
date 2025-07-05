import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
  HiShoppingBag,
  HiGlobeAlt,
  HiEmojiHappy,
  HiChatBubbleOvalLeftEllipsis,
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi2';
import { FaEraser } from 'react-icons/fa6';

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
      className={`flex items-center justify-center h-36 w-[12rem] rounded-lg border border-white/25 shadow ${color}`}
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
      <header className="flex items-center justify-between px-4 py-1.5 bg-[#0028F2] text-white text-base font-semibold tracking-wide">
        <div className="font-semibold">Spectrum</div>
        <div className="uppercase tracking-wide">Main Menu</div>
        <ClientOnlyDate />
      </header>

      {/* Hero */}
      <section className="bg-[#004EFF] text-white py-10 px-3 flex flex-col items-center text-center relative overflow-hidden">
        <h2 className="uppercase tracking-wide text-base md:text-lg mb-3">welcome to</h2>
        <div className="flex items-center space-x-6">
          {/* Pixel diamond */}
          <div className="grid grid-cols-4 gap-0.5">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 md:w-3 md:h-3 ${i % 2 === 0 ? 'bg-[#0DF0FF]' : 'bg-[#FF008C]'} rotate-45`}
              />
            ))}
          </div>
          <div className="text-left leading-none">
            <p className="tracking-[0.35em] text-xs md:text-sm font-medium mb-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>N I N T E N D O</p>
            <h1 className="font-extrabold italic text-4xl md:text-6xl lg:text-7xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>Spectrum</h1>
          </div>
        </div>
        <p className="text-base md:text-lg italic mt-2">watch, listen, play.</p>
      </section>

      {/* App Grid */}
      <main className="flex items-center justify-center bg-[#006BFF] py-12">
        <button aria-label="Previous" className="text-white p-3"><HiChevronLeft className="w-12 h-12" /></button>
        <div className="grid grid-cols-5 gap-x-9 gap-y-7">
          {APPS.map((app) => (
            <AppTile key={app.label} label={app.label} color={app.color} />
          ))}
        </div>
        <button aria-label="Next" className="text-white p-3"><HiChevronRight className="w-12 h-12" /></button>
      </main>

      {/* Bottom Nav */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[#38CFFF] py-2 flex items-center justify-center space-x-12 shadow-inner">
        {/* Custom inline SVGs matching reference */}
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FFC900" xmlns="http://www.w3.org/2000/svg"><path d="M6 2h12l4 7H2l4-7z"/><path d="M3 9h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" fill="#FFCB05"/><path d="M9 14h6v4H9z" fill="#fff"/></svg>
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#0FA0FF" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20" stroke="#fff" strokeWidth="2" fill="none"/></svg>
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FFD23C" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="1.5" fill="#000"/><circle cx="15" cy="10" r="1.5" fill="#000"/><path d="M8 15a4 4 0 0 0 8 0" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#29C554" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5a8.38 8.38 0 0 1-1.9.8 4.19 4.19 0 0 0-7.2 3v1A11.83 11.83 0 0 1 3 7s-4 9 5 13a13.32 13.32 0 0 1-8 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.03-.5z"/></svg>
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FAD400" xmlns="http://www.w3.org/2000/svg"><path d="M18 2H6a2 2 0 0 0-2 2v16l4-4h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg>
        <span className="bg-[#E01111] text-white font-bold text-xs leading-none px-2 py-1 rounded-md" style={{fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'}}>NEWS</span>
      </footer>
    </>
  );
}