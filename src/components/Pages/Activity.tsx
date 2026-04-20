"use client"
import React from 'react';
import { Quicksand } from 'next/font/google';
import { Calendar, Mail, Phone, Globe, MessageSquare } from 'lucide-react';

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

    <section className={`${quicksand.className} relative z-10 -mt-24 md:-mt-32 px-6 pb-12`}>
      <div className="max-w-[1552px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          <div className="flex-1 w-full">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-xl md:text-[30px] font-bold text-white  uppercase tracking-wider">
                Featured Activities
              </h2>
              <div className="h-[2px] w-12 bg-white/50 lg:bg-gray-300"></div>
              <span className="text-white text-[12px] font-medium uppercase">
                Open Registration
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden transition-transform hover:-translate-y-1">
                  <div className="bg-[#E9EAEB] px-6 py-3 flex justify-between items-center">
                    <span className="text-[#2557FF] font-bold text-xs">{item.tag}</span>
                    <span className="text-[#1A1D1F] font-bold text-sm">{item.price}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1A1D1F] mb-3">{item.title}</h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                      <Calendar size={16} />
                      <span>{item.date}</span>
                    </div>
                    <button className="w-full bg-[#2557FF] hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all active:scale-95">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Tərəf: Get Started Paneli */}
          <div className="w-full lg:w-[380px] lg:mt-16"> {/* Sağ panelin kartlarla hizalanması üçün mt verdik */}
            <div className="bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 p-8">
              <h2 className="text-2xl font-bold text-[#1A1D1F] mb-2 uppercase">Get Started</h2>
              <p className="text-gray-500 mb-8">Join the NRICH community today.</p>

              <div className="space-y-4 mb-10">
                <button className="w-full bg-[#2557FF] hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-[0_4px_15px_rgba(37,87,255,0.3)] transition-all">
                  REGISTER NOW
                </button>
                <button className="w-full bg-white border-2 border-gray-100 hover:border-gray-200 text-[#2557FF] font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                  <MessageSquare size={20} />
                  Message NRICH
                </button>
              </div>

              {/* İletişim Məlumatları */}
              <div className="space-y-6">
                <ContactItem 
                  icon={<Phone size={20} className="text-[#2557FF]" />} 
                  label="SUPPORT LINE" 
                  value="888.555.NRICH" 
                />
                <ContactItem 
                  icon={<Mail size={20} className="text-[#2557FF]" />} 
                  label="EMAIL US" 
                  value="hello@nrichsports.com" 
                />
                <ContactItem 
                  icon={<Globe size={20} className="text-[#2557FF]" />} 
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

const ContactItem = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-start gap-4">
    <div className="w-11 h-11 bg-[#F1F4FF] rounded-xl flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-0.5">{label}</p>
      <p className="text-sm text-[#1A1D1F] font-bold">{value}</p>
    </div>
  </div>
);

export default ActivitySection;