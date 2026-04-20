

import React from 'react';
import { Play, Download, FileText, User, Layout, MessageSquare, Phone, Mail, Globe } from 'lucide-react';
import { Quicksand } from 'next/font/google';
import ProgramHeader from '@/components/Pages/Hero';
import { VideoCard } from '@/components/Cards/VideoCard';

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

const Media = () => {
    return (
        <>
            <ProgramHeader
                badgeText="2024 ACTIVITIES"
                title="Explore all programs"
                description="Explore our upcoming seasons designed to push boundaries and build champions. Professional coaching meets elite athletic development."
                backgroundImage="/path-to-your-leaf-image.jpg"
            />
            <section className={`${quicksand.className} bg-[#F8F9FA] py-16 px-6`}>
                <div className="max-w-[1550px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 space-y-12">

                        <div>
                            <h2 className="text-[28px] font-bold text-[#1A1D1F] mb-8">Video Showcase</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <VideoCard
                                    image="/baskettop.png"
                                    title="MASTERING THE POINT GUARD MINDSET"
                                    category="BASKETBALL TRAINING"
                                />
                                <VideoCard
                                    image="/baskettop.png"
                                    title="MASTERING THE POINT GUARD MINDSET"
                                    category="BASKETBALL TRAINING"
                                />
                            </div>

                            {/* Böyük Video Altda */}
                            <div className="relative group cursor-pointer rounded-2xl overflow-hidden h-[400px]">
                                <img
                                    src="/baskettop.png"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    alt="Main Video"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                                        <Play fill="white" className="text-white ml-1" size={28} />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                                    <span className="bg-[#2557FF] text-white text-[10px] font-bold px-3 py-1 rounded mb-3 inline-block uppercase">
                                        BASKETBALL TRAINING
                                    </span>
                                    <h3 className="text-white text-xl font-bold uppercase tracking-tight">
                                        MASTERING THE POINT GUARD MINDSET
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[28px] font-bold text-[#1A1D1F] mb-8">Press Resources</h2>
                            <div className="space-y-3">
                                <ResourceItem icon={<FileText size={20} />} title="PR Fact Sheet" format="PDF" size="2.4 MB" />
                                <ResourceItem icon={<User size={20} />} title="Founder Bio" format="DOC" size="1.1 MB" />
                                <ResourceItem icon={<Layout size={20} />} title="Media Contact List" format="XLS" size="0.5 MB" />
                            </div>
                        </div>
                    </div>

                    {/* SAĞ TƏRƏF: Sidebar (4 Sütun) */}
                    <div className="lg:col-span-4">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-8">
                            <h3 className="text-xl font-bold text-[#1A1D1F] mb-6">Contact Us</h3>

                            <button className="w-full bg-[#2557FF] text-white font-bold py-4 rounded-xl mb-4 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95">
                                REGISTER NOW
                            </button>

                            <button className="w-full bg-white border-2 border-gray-100 text-[#2557FF] font-bold py-4 rounded-xl flex items-center justify-center gap-2 mb-8 hover:bg-gray-50 transition-all active:scale-95">
                                <MessageSquare size={20} /> Message NRICH
                            </button>

                            <div className="space-y-6">
                                <ContactLink icon={<Phone size={18} />} label="SUPPORT LINE" value="888.555.NRICH" />
                                <ContactLink icon={<Mail size={18} />} label="EMAIL US" value="hello@nrichsports.com" />
                                <ContactLink icon={<Globe size={18} />} label="WEBSITE" value="www.nrichsports.com" />
                            </div>
                        </div>
                    </div>

                </div>
            </section></>
    );
};

const ResourceItem = ({ icon, title, format, size }: { icon: any, title: string, format: string, size: string }) => (
    <div className="bg-white p-5 rounded-2xl flex items-center justify-between border border-gray-50 hover:border-gray-200 transition-all cursor-pointer group shadow-sm">
        <div className="flex items-center gap-4 text-[#2557FF]">
            <div className="p-2.5 bg-blue-50 rounded-lg group-hover:bg-[#2557FF] group-hover:text-white transition-colors">
                {icon}
            </div>
            <span className="text-[#1A1D1F] font-bold text-[15px]">{title}</span>
        </div>
        <div className="flex items-center gap-4">
            <span className="text-gray-400 text-[11px] font-bold uppercase tracking-wider">{format} • {size}</span>
            <Download size={18} className="text-gray-400 group-hover:text-[#2557FF] transition-colors" />
        </div>
    </div>
);

const ContactLink = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#F1F4FF] rounded-xl flex items-center justify-center text-[#2557FF] shrink-0">
            {icon}
        </div>
        <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">{label}</p>
            <p className="text-[14px] font-bold text-[#1A1D1F]">{value}</p>
        </div>
    </div>
);

export default Media;