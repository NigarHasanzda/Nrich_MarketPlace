"use client"
import React from 'react';
import { Quicksand } from 'next/font/google';
import { MapPin, Navigation, Waves, Volleyball, Trophy, ChevronRight } from 'lucide-react';

// Sizin təqdim etdiyiniz komponentlər
import FeaturedCard from '@/components/Cards/FeaturedCard';
import BenefitCard from '@/components/Cards/BenefitCard';
import ProductSidebar from '@/components/ProductSideBAr/ProductSidebar';


const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

const FacilityDetailSection = () => {
    return (
        <main className={`${quicksand.className} bg-[#F8F9FA] py-12 px-6`}>
            <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* SOL TƏRƏF (8 Sütun) */}
                <div className="lg:col-span-8 space-y-12">

                    {/* 1. FACILITY INFO */}
                    <div>
                        <h2 className="text-[24px] font-bold text-[#1A1D1F] mb-6 uppercase tracking-tight">Facility Info</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4 text-[14px]">
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <div className="flex gap-3">
                                        <MapPin className="text-[#2557FF]" size={20} />
                                        <div>
                                            <p className="text-[10px] font-bold text-[#2557FF] uppercase tracking-widest">Address</p>
                                            <p className="text-[16px] font-bold text-[#1A1D1F] mt-1">
                                                4200 Elite Way, Sports Corridor<br />North Region, NR 90210
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <p className="text-[10px] font-bold text-[#2557FF] uppercase tracking-widest mb-4">Hours of Operation</p>
                                    <div className="space-y-3 font-bold">
                                        <div className="flex justify-between"><span className="text-gray-400">Mon - Fri</span><span>5:00 AM - 10:00 PM</span></div>
                                        <div className="flex justify-between"><span className="text-gray-400">Saturday</span><span>7:00 AM - 9:00 PM</span></div>
                                        <div className="flex justify-between"><span className="text-gray-400">Sunday</span><span>8:00 AM - 6:00 PM</span></div>
                                    </div>
                                </div>
                                <button className="w-full bg-[#2557FF] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
                                    <Navigation size={18} fill="white" /> GET DIRECTIONS
                                </button>
                            </div>
                            {/* Map Placeholder */}
                            {/* Map Area */}
                            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-lg h-full min-h-[300px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.76853004313!2d49.71487375836852!3d40.39489240439602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d40a035a6bd%3A0xa8675881478b5280!2zQmFrxLEsIEF6ZXJiYXljYW4!5e0!3m2!1saz!2saz!4v1713645000000!5m2!1saz!2saz"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '300px' }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Facility Location"
                                    className="grayscale-[0.2] contrast-[1.1]" // Dizayna uyğun azca rəng tonu vermək üçün
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* 2. PROGRAMS AT NORTH HQ (Sizin FeaturedCard-dan istifadə olunur) */}
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-[24px] font-bold text-[#1A1D1F]">Programs at NORTH HQ</h2>
                            <button className="text-[#2557FF] font-bold text-[14px] underline uppercase">See All</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FeaturedCard
                                image="/soccer-bg.jpg"
                                title="Future Stars Soccer"
                                address="123, Addresse California"
                                monthlyPrice="300,00"
                                classPrice="10,00"
                                date="30 Dec, 2025"
                                time="10:00 - 11:00"
                            />
                            <FeaturedCard
                                image="/soccer-bg.jpg"
                                title="Future Stars Soccer"
                                address="123, Addresse California"
                                monthlyPrice="300,00"
                                classPrice="10,00"
                                date="30 Dec, 2025"
                                time="10:00 - 11:00"
                            />
                        </div>
                    </div>

                    {/* 3. MEMBER BENEFITS (Sizin BenefitCard-dan istifadə olunur) */}
                    <div>
                        <h2 className="text-[24px] font-bold text-[#1A1D1F] mb-6">MEMBER BENEFITS & DISCOUNTS</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <BenefitCard
                                label="Limited Time"
                                labelColor="text-[#2557FF]"
                                title="Early Bird 15%"
                                description="Register by May 15th to unlock special pricing."
                                borderColor="bg-[#2557FF]"
                            />
                            <BenefitCard
                                label="Family Plan"
                                labelColor="text-red-500"
                                title="Sibling Discount"
                                description="$25 off for each additional child enrolled."
                                borderColor="bg-red-500"
                            />
                            <BenefitCard
                                label="Value Pack"
                                labelColor="text-gray-400"
                                title="Season Pass"
                                description="Access all sports for a flat $249/year fee."
                                borderColor="bg-gray-300"
                            />
                        </div>
                    </div>

                    {/* 4. FULL ACTIVITIES SCHEDULE */}
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-[24px] font-bold text-[#1A1D1F]">FULL ACTIVITIES SCHEDULE</h2>
                            <button className="text-[#2557FF] font-bold text-[14px] underline uppercase">See All</button>
                        </div>
                        <div className="space-y-3">
                            <ScheduleRow icon={<Waves size={20} />} title="Aquatic Speed Training" sessions="9 Sessions" ages="7-14" locations="5 Locations" price="160" />
                            <ScheduleRow icon={<Volleyball size={20} />} title="Club Volleyball Prep" sessions="10 Sessions" ages="13-17" locations="2 Locations" price="210" />
                            <ScheduleRow icon={<Trophy size={20} />} title="Youth Academy Skills" sessions="24 Sessions" ages="6-12" locations="28 Locations" price="125" />
                        </div>
                    </div>

                </div>

                {/* SAĞ TƏRƏF (4 Sütun) */}
                <ProductSidebar />

            </div>
        </main>
    );
};

// Alt Cədvəl Komponenti
const ScheduleRow = ({ icon, title, sessions, ages, locations, price }: any) => (
    <div className="bg-white p-4 rounded-2xl flex items-center justify-between border border-gray-50 hover:shadow-md transition-all group">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#F1F5FF] rounded-xl flex items-center justify-center text-[#2557FF]">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-[#1A1D1F] text-[16px]">{title}</h4>
                <p className="text-[12px] text-gray-400 font-bold uppercase mt-1">
                    {sessions} • Ages {ages} • {locations}
                </p>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <div className="text-right">
                <p className="text-[10px] text-gray-400 font-bold uppercase">Starts at</p>
                <p className="text-[20px] font-bold text-[#1A1D1F]">${price}</p>
            </div>
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 group-hover:bg-[#2557FF] group-hover:text-white transition-all">
                <ChevronRight size={20} />
            </div>
        </div>
    </div>
);

export default FacilityDetailSection;