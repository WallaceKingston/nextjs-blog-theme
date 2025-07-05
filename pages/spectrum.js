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
import {
  FaShoppingBag,
  FaGlobeAmericas,
  FaRegSmile,
  FaRegCommentDots,
  FaPencilAlt,
} from 'react-icons/fa';

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
      className={`flex items-center justify-center h-36 w-[12rem] rounded-lg border border-white/25 shadow-md ${color}`}
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
        <div className="flex items-center space-x-5">
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
            <p className="tracking-[0.35em] text-xs md:text-sm font-medium mb-1" style={{ fontFamily: 'Exo, sans-serif' }}>N I N T E N D O</p>
            <h1 className="font-extrabold italic text-4xl md:text-6xl lg:text-7xl" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Spectrum</h1>
          </div>
        </div>
        <p className="text-base md:text-lg italic mt-2">watch, listen, play.</p>
      </section>

      {/* App Grid */}
      <main className="flex items-center justify-center bg-[#0062FF] py-10">
        <button aria-label="Previous" className="text-white p-2 md:p-3"><HiChevronLeft className="w-12 h-12" /></button>
        <div className="grid grid-cols-5 gap-x-8 gap-y-6">
          {APPS.map((app) => (
            <AppTile key={app.label} label={app.label} color={app.color} />
          ))}
        </div>
        <button aria-label="Next" className="text-white p-2 md:p-3"><HiChevronRight className="w-12 h-12" /></button>
      </main>

      {/* Bottom Nav */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[#3ACFFF] py-2 flex items-center justify-center space-x-10 shadow-inner">
        <FaShoppingBag className="text-[#FFCB05] w-8 h-8" />
        <FaGlobeAmericas className="text-[#0F9DFF] w-8 h-8" />
        <FaRegSmile className="text-[#FFD23C] w-8 h-8" />
        <FaRegCommentDots className="text-[#29C554] w-8 h-8" />
        <FaPencilAlt className="text-[#FAD400] w-8 h-8" />
        <span className="bg-[#E01111] text-white font-bold text-xs leading-none px-2 py-1 rounded-md">NEWS</span>
      </footer>
    </>
  );
}