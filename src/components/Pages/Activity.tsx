"use client";

import type { ReactNode } from 'react';
import { Quicksand } from 'next/font/google';
import { Calendar, Mail, Phone, Globe, MessageSquare } from 'lucide-react';
import { pageContainer, pagePadding } from '@/lib/layout';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const ActivitySection = () => {
  const activities = [
    { id: 1, tag: "SUMMER '24", price: "$299", title: "Elite Basketball Intensive", date: "June 15 - Aug 20" },
    { id: 2, tag: "SUMMER '24", price: "$299", title: "Elite Basketball Intensive", date: "June 15 - Aug 20" },
    { id: 3, tag: "SUMMER '24", price: "$299", title: "Elite Basketball Intensive", date: "June 15 - Aug 20" },
    { id: 4, tag: "FALL '24", price: "$245", title: "Junior Soccer League", date: "Sept 10 - Nov 15" },
  ];

  return (
    <section className={`${quicksand.className} relative z-10 mt-0 lg:-mt-32 ${pagePadding} pb-10 sm:pb-12`}>
      <div className={`${pageContainer} max-w-[1552px]`}>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 w-full min-w-0">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-2xl lg:text-[30px] font-bold text-[#1A1D1F] lg:text-white uppercase tracking-wider">
                Featured Activities
              </h2>
              <div className="hidden sm:block h-[2px] w-12 bg-gray-300 lg:bg-white/50" />
              <span className="text-[#64748B] lg:text-white text-[11px] sm:text-[12px] font-medium uppercase">
                Open Registration
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {activities.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden transition-transform hover:-translate-y-1"
                >
                  <div className="bg-[#E9EAEB] px-4 sm:px-6 py-3 flex justify-between items-center gap-2">
                    <span className="text-[#2557FF] font-bold text-xs">{item.tag}</span>
                    <span className="text-[#1A1D1F] font-bold text-sm">{item.price}</span>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1A1D1F] mb-3">{item.title}</h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                      <Calendar size={16} aria-hidden />
                      <span>{item.date}</span>
                    </div>
                    <button
                      type="button"
                      className="w-full bg-[#2557FF] hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all active:scale-95"
                    >
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[380px] lg:mt-16 shrink-0">
            <div className="bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1A1D1F] mb-2 uppercase">Get Started</h2>
              <p className="text-gray-500 mb-8">Join the NRICH community today.</p>

              <div className="space-y-4 mb-10">
                <button
                  type="button"
                  className="w-full bg-[#2557FF] hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-[0_4px_15px_rgba(37,87,255,0.3)] transition-all"
                >
                  REGISTER NOW
                </button>
                <button
                  type="button"
                  className="w-full bg-white border-2 border-gray-100 hover:border-gray-200 text-[#2557FF] font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare size={20} aria-hidden />
                  Message NRICH
                </button>
              </div>

              <div className="space-y-6">
                <ContactItem
                  icon={<Phone size={20} className="text-[#2557FF]" aria-hidden />}
                  label="SUPPORT LINE"
                  value="888.555.NRICH"
                />
                <ContactItem
                  icon={<Mail size={20} className="text-[#2557FF]" aria-hidden />}
                  label="EMAIL US"
                  value="hello@nrichsports.com"
                />
                <ContactItem
                  icon={<Globe size={20} className="text-[#2557FF]" aria-hidden />}
                  label="WEBSITE"
                  value="www.nrichsports.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value }: { icon: ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-4">
    <div className="w-11 h-11 bg-[#F1F4FF] rounded-xl flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-0.5">{label}</p>
      <p className="text-sm text-[#1A1D1F] font-bold break-words">{value}</p>
    </div>
  </div>
);

export default ActivitySection;
