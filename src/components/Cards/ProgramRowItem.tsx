import { ChevronRight } from 'lucide-react';

type ProgramRowItemProps = {
  icon: React.ReactNode;
  title: string;
  sessions: string;
  ages: string;
  locations: string;
  price: string;
};

export const ProgramRowItem = ({
  icon,
  title,
  sessions,
  ages,
  locations,
  price,
}: ProgramRowItemProps) => (
  <div className="bg-white p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-gray-100 hover:shadow-md transition-all group cursor-pointer">
    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
      <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#F1F5FF] rounded-xl flex items-center justify-center text-[#2557FF] shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <h4 className="font-bold text-[#1A1D1F] text-[15px] sm:text-[16px] truncate">{title}</h4>
        <p className="text-[11px] sm:text-[12px] text-gray-400 font-bold uppercase mt-1 line-clamp-2">
          {sessions} • Ages {ages} • {locations}
        </p>
      </div>
    </div>
    <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 shrink-0">
      <div className="text-left sm:text-right">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Starts at</p>
        <p className="text-[18px] sm:text-[20px] font-bold text-[#1A1D1F]">${price}</p>
      </div>
      <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 group-hover:bg-[#2557FF] group-hover:text-white transition-all">
        <ChevronRight size={20} aria-hidden />
      </div>
    </div>
  </div>
);
