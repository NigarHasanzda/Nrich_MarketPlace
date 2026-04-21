import React from 'react';
import {
    Phone, Mail, Globe, MessageSquare, BadgeCheck, LucideIcon
} from 'lucide-react';
import { PricingTier } from '@/components/Cards/PricingTier';
import { ScheduleCard } from '@/components/Cards/ScheduleCard';


interface ContactItemProps {
    icon: LucideIcon;
    label: string;
    value: string;
}
const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, label, value }) => (
    <div className="flex gap-4">
        <div className="bg-[#E7E8E9] p-3 rounded-[4px] h-fit">
            <Icon className="w-5 h-5 text-[#1C50FB]" />
        </div>
        <div>
            <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">{label}</p>
            <p className="text-sm font-semibold text-[#1A202C]">{value}</p>
        </div>
    </div>
);

const TryoutPage = () => {
    const scheduleData = [
        { day: "Monday", field: "Main Turf Field", time: "5:00 PM - 7:00 PM", ages: "AGES 2012-2015" },
        { day: "Tuesday", field: "Indoor Court A", time: "6:00 PM - 8:30 PM", ages: "AGES 2009-2011" },
        { day: "Wednesday", field: "East Annex Field", time: "4:30 PM - 6:30 PM", ages: "AGES 2012-2015" },
        { day: "Thursday", field: "Main Turf Field", time: "7:00 PM - 9:00 PM", ages: "AGES 2008 & OLDER" }
    ];

    const pricingData = [
        {
            title: "Early Bird",
            price: "45",
            badge: "Ends May 1",
            isEarlyBird: true,
            features: [
                { text: "Guaranteed Spot", included: true },
                { text: "Free Tryout Shirt", included: true },
                { text: "Evaluation Report", included: true }
            ]
        },
        {
            title: "Standard",
            price: "75",
            badge: "Starts May 2",
            isEarlyBird: false,
            features: [
                { text: "Spot if available", included: true },
                { text: "No Shirt Included", included: false },
                { text: "Evaluation Report", included: true }
            ]
        }
    ];

    const contactData: ContactItemProps[] = [
        { icon: Phone, label: "Support Line", value: "888.555.NRICH" },
        { icon: Mail, label: "Email Us", value: "hello@nrichsports.com" },
        { icon: Globe, label: "Website", value: "www.nrichsports.com" }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-['Quicksand'] p-4 md:p-8">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-12">
                    <div className="relative grid grid-cols-2 gap-4">
                        <div className="rounded-[8px] overflow-hidden shadow-sm bg-gray-200 h-[470px]">
                            <img src="/footbal.png" alt="Soccer" className="w-full h-full object-cover" />
                        </div>

                        <div className="grid grid-rows-[274px_180px] gap-4">
                            <div className="rounded-[8px] overflow-hidden shadow-sm bg-gray-200 h-[274px]">
                                <img src="/ball.png" alt="Basketball" className="w-full h-full object-cover" />
                            </div>
                            <div className="grid grid-cols-2 gap-4 h-[180px]">
                                <div className="rounded-[8px] overflow-hidden shadow-sm bg-gray-200">
                                    <img src="/railway.jpg" alt="Running" className="w-full h-full object-cover" />
                                </div>
                                <div className="bg-[#1E51FF] rounded-[8px] flex flex-col items-center justify-center text-white p-4 shadow-lg shadow-blue-200">
                                    <span className="text-sm font-bold opacity-90 uppercase tracking-widest text-center">Summer</span>
                                    <span className="text-4xl font-black italic">'24</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-[8px] shadow-2xl flex flex-col items-center min-w-[380px] min-h-[210px] border border-gray-50 z-10">
                            <div className="bg-[#EDF2F7] w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-[#1E51FF] text-2xl font-black italic">N</div>
                            <div className="flex items-center gap-2 mb-1">
                                <h2 className="text-[30px] font-bold text-[#1A202C]">Tryout Registration</h2>
                                <BadgeCheck className="text-blue-500 fill-blue-500 text-white w-6 h-6" stroke="white" />
                            </div>
                            <p className="text-[#64748B] text-xs font-bold tracking-[0.2em] uppercase">Nrich Athletics Elite Squad</p>
                        </div>
                    </div>
                    <section>
                        <h3 className="text-[30px] font-bold text-[#1A202C] mb-6">Tryout Schedule</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {scheduleData.map((item, idx) => (
                                <ScheduleCard key={idx} {...item} />
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className="text-[30px] font-bold text-[#1A202C] mb-6">Registration Tiers</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {pricingData.map((tier, idx) => (
                                <PricingTier key={idx} {...tier} />
                            ))}
                        </div>
                    </section>
                </div>


                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-8">
                        <h3 className="text-[20px] font-bold mb-8">Contact Us</h3>
                        <div className="space-y-4 mb-10">
                            <button className="w-full bg-[#1E51FF] text-white py-4 rounded-[8px] font-bold text-[18px] hover:bg-blue-700 transition-all uppercase tracking-widest shadow-lg shadow-blue-100">
                                Register Now
                            </button>
                            <button className="w-full border border-gray-100 flex items-center justify-center gap-3 py-4 rounded-[8px] font-bold text-[#1E51FF] text-[18px] hover:bg-gray-50 transition-all uppercase tracking-widest">
                                <MessageSquare className="w-5 h-5" /> Message NRICH
                            </button>
                        </div>
                        <div className="space-y-6">
                            {contactData.map((item, idx) => (
                                <ContactItem key={idx} {...item} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TryoutPage;