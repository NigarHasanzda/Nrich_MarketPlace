import React from 'react';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['500', '700'] });

interface StandingRowProps {
  rank: string;
  teamName: string;
  logo: string;
  p: number;
  w: number;
  d: number;
  l: number;
  gd: string;
  pts: number;
  isTop?: boolean;
}

export const StandingRow: React.FC<StandingRowProps> = ({ 
  rank, teamName, logo, p, w, d, l, gd, pts, isTop 
}) => (
  <div className={`${quicksand.className} grid grid-cols-[50px_1fr_40px_40px_40px_40px_50px_60px] items-center py-4 border-b border-gray-50  font-bold text-[#64748B]`}>
    <div className="pl-4 text-[18px] text-[#191C1D4D]">{rank}</div>
    <div className="flex items-center gap-3 text-[16px] text-[#1A202C]">
      <div className="w-8 h-8 rounded-md bg-gray-100 ml-10 overflow-hidden">
        <img src={logo} alt={teamName} className="w-full h-full object-cover" />
      </div>
      {teamName}
    </div>
    <div className="text-center font-semibold text-[#191C1D] text-[16px]">{p}</div>
    <div className="text-center font-semibold text-[#191C1D] text-[16px]">{w}</div>
    <div className="text-center font-semibold text-[#191C1D] text-[16px]">{d}</div>
    <div className="text-center font-semibold text-[#191C1D] text-[16px]">{l}</div>
    <div className="text-center font-semibold text-[#191C1D] text-[16px] text-blue-600">{gd}</div>
    <div className="flex justify-center">
      <div className={`w-10 h-8 flex items-center text-[17px] justify-center rounded-md ${isTop ? 'bg-[#1E51FF] text-white' : 'bg-gray-100 text-[#1A202C]'}`}>
        {pts}
      </div>
    </div>
  </div>
);