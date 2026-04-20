import React from 'react';
import { Zap, MapPin, ChevronRight, Phone, Mail, Globe, MessageSquare } from 'lucide-react';

const ProductSidebar = () => {
  return (
    <div className="lg:col-span-4 space-y-6">
      {/* Fast Pass Entry */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <Zap size={22} className="text-[#2557FF]" />
          <h3 className="text-[20px] font-bold text-[#1A1D1F]">Fast Pass Entry</h3>
        </div>
        <p className="text-gray-400 text-[14px] font-regular mb-8 leading-relaxed">
          Skip the line and secure your athlete's spot instantly. Our streamlined portal handles all waivers and medical docs in seconds.
        </p>
        <button className="w-full bg-[#2557FF] text-white text-[18px] font-bold py-4 rounded-xl hover:bg-blue-700 transition-all">
          Register Now
        </button>
      </div>

      {/* Find Location */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <MapPin size={22} className="text-[#2557FF]" />
          <h3 className="text-[20px] font-bold text-[#1A1D1F]">Find Location</h3>
        </div>
        <div className="space-y-6">
          <LocationItem name="North HQ Complex" address="1200 Athlete Dr, Chicago" />
          <LocationItem name="West Suburban Hub" address="450 Pine St, Naperville" />
          <LocationItem name="City East Aquatics" address="88 Lakeview Pkwy, Chicago" />
        </div>
      </div>

      {/* Contact Us */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-[#1A1D1F] mb-6">Contact Us</h3>
        <button className="w-full bg-[#2557FF] text-white font-bold py-4 rounded-xl mb-4">
          REGISTER NOW
        </button>
        <button className="w-full bg-white border-2 border-gray-100 text-[#2557FF] font-bold py-4 rounded-xl flex items-center justify-center gap-2 mb-8">
          <MessageSquare size={20} /> Message NRICH
        </button>
        <div className="space-y-5">
          <ContactInfo icon={<Phone size={18} />} label="SUPPORT LINE" value="888.555.NRICH" />
          <ContactInfo icon={<Mail size={18} />} label="EMAIL US" value="hello@nrichsports.com" />
          <ContactInfo icon={<Globe size={18} />} label="WEBSITE" value="www.nrichsports.com" />
        </div>
      </div>
    </div>
  );
};

// Yardımçı daxili komponentlər
const LocationItem = ({ name, address }: { name: string; address: string }) => (
  <div className="flex items-center justify-between group cursor-pointer">
    <div>
      <p className="text-[14px] font-bold text-[#1A1D1F]">{name}</p>
      <p className="text-xs text-gray-400">{address}</p>
    </div>
    <ChevronRight size={16} className="text-gray-300 group-hover:text-[#2557FF] transition-colors" />
  </div>
);

const ContactInfo = ({ icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 bg-[#E7E8E9] rounded-xl flex items-center justify-center text-[#2557FF] shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
      <p className="text-sm font-bold text-[#1A1D1F]">{value}</p>
    </div>
  </div>
);

export default ProductSidebar;