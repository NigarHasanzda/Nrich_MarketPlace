"use client"
import React from 'react';
import { Quicksand } from 'next/font/google';
import { Zap, MapPin, ChevronRight, Phone, Mail, Globe, MessageSquare } from 'lucide-react';
import ActivityListItem from '@/components/Cards/ActivityListItem';


const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '600', '700'] });

const ProgramsListSection = () => {
  return (
    <section className={`${quicksand.className} bg-gray-50 py-22 px-6`}>
      <div className="max-w-[1550px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-8 space-y-6">

          <div className="bg-white p-4 rounded-2xl flex flex-wrap gap-4 items-end shadow-sm">
            <FilterSelect label="CATEGORY" options={["All Sports"]} />
            <FilterSelect label="ACTIVITY TYPE" options={["Activity Type"]} />
            <FilterSelect label="LOCATION" options={["All Venues"]} />
            <FilterSelect label="SEASON" options={["Any Season"]} />
            <button className="bg-[#2557FF] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-blue-700">
              Apply Filters
            </button>
          </div>

          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <ActivityListItem
                key={i}
                image="/soccer-bg.jpg" 
                title="Advanced Soccer Clinic"
                price="450"
                ages="13-17"
                location="West Suburban"
                date="Aug 5 - Aug 15"
                description="High-intensity technical training focusing on tactical awareness, ball mastery, and conditioning for club-level athletes."
              />
            ))}
          </div>

          <button className="bg-[#1C50FB] text-white px-8 py-3 rounded-xl font-bold text-[14px] flex items-center gap-2">
            Explore All <ChevronRight size={18} />
          </button>
        </div>

        {/* SAĞ TƏRƏF============================================= */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-50 flex items-center justify-center rounded-xl">
                <Zap size={22} className="text-[#2557FF]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1D1F]">Fast Pass Entry</h3>
            </div>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Skip the line and secure your athlete's spot instantly. Our streamlined portal handles all waivers and medical docs in seconds.
            </p>
            <button className="w-full bg-[#2557FF] text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all">
              Register Now
            </button>
          </div>

          {/* Find Location Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50">
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={22} className="text-[#2557FF]" />
              <h3 className="text-xl font-bold text-[#1A1D1F]">Find Location</h3>
            </div>
            <div className="space-y-6">
              <LocationLink name="North HQ Complex" address="1200 Athlete Dr, Chicago" />
              <LocationLink name="West Suburban Hub" address="450 Pine St, Naperville" />
              <LocationLink name="City East Aquatics" address="88 Lakeview Pkwy, Chicago" />
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50">
            <h3 className="text-xl font-bold text-[#1A1D1F] mb-6">Contact Us</h3>
            <button className="w-full bg-[#2557FF] text-white font-bold py-4 rounded-xl mb-4">REGISTER NOW</button>
            <button className="w-full bg-white border-2 border-gray-100 text-[#2557FF] font-bold py-4 rounded-xl flex items-center justify-center gap-2 mb-8">
              <MessageSquare size={20} /> Message NRICH
            </button>
            
            <div className="space-y-6">
              <ContactRow icon={<Phone size={18}/>} label="SUPPORT LINE" val="888.555.NRICH" />
              <ContactRow icon={<Mail size={18}/>} label="EMAIL US" val="hello@nrichsports.com" />
              <ContactRow icon={<Globe size={18}/>} label="WEBSITE" val="www.nrichsports.com" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Yardımçı komponentlər
const FilterSelect = ({ label, options }: any) => (
  <div className="flex-1 min-w-[150px]">
    <p className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">{label}</p>
    <select className="w-full bg-gray-50 border-none rounded-xl p-3 text-sm font-semibold text-[#1A1D1F] focus:ring-2 focus:ring-blue-100">
      {options.map((opt: any) => <option key={opt}>{opt}</option>)}
    </select>
  </div>
);

const LocationLink = ({ name, address }: any) => (
  <div className="flex items-center justify-between group cursor-pointer">
    <div>
      <p className="text-sm font-bold text-[#1A1D1F]">{name}</p>
      <p className="text-xs text-gray-400">{address}</p>
    </div>
    <ChevronRight size={16} className="text-gray-300 group-hover:text-[#2557FF] transition-colors" />
  </div>
);

const ContactRow = ({ icon, label, val }: any) => (
  <div className="flex gap-4">
    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#2557FF] shrink-0">{icon}</div>
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{label}</p>
      <p className="text-sm font-bold text-[#1A1D1F]">{val}</p>
    </div>
  </div>
);

export default ProgramsListSection;