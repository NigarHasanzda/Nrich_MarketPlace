
import { MapPin, Navigation, Waves, Volleyball, Trophy, ChevronRight } from 'lucide-react';


export const ScheduleRow = ({ icon, title, sessions, ages, locations, price }: any) => (
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