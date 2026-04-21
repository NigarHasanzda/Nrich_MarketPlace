import React from 'react';
import { Quicksand } from 'next/font/google';
import {
  UserPlus, Users, MapPin, UserCheck, Calendar,
  ShieldCheck, Trophy, LayoutDashboard, BarChart3, MessageSquare
} from 'lucide-react';
import { StandingRow } from '@/components/Cards/STandingRow';
import { DetailItem } from '@/components/Cards/DetailItem';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

import VerifiedIcon from '@mui/icons-material/Verified';


const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

interface ResultItem {
  date: string;
  homeTeam: { name: string; score: number };
  awayTeam: { name: string; score: number };
}

const LeagueStandingsPage = () => {
  const standings = [
    { rank: "01", teamName: "The Strikers", logo: "/logo.jpg", p: 12, w: 9, d: 2, l: 1, gd: "+18", pts: 29, isTop: true },
    { rank: "02", teamName: "Apex Elite", logo: "/logo.jpg", p: 12, w: 8, d: 3, l: 1, gd: "+14", pts: 27 },
    { rank: "03", teamName: "Metro United", logo: "/logo.jpg", p: 12, w: 7, d: 4, l: 1, gd: "+9", pts: 25 },
    { rank: "04", teamName: "Velocity FC", logo: "/logo.jpg", p: 11, w: 6, d: 2, l: 3, gd: "+4", pts: 20 },
  ];

  const leagueDetails = [
    { icon: MapPin, title: "Field Location", value: "North River Athletic Complex", subValue: "Fields 3, 4, and Elite Turf" },
    { icon: UserCheck, title: "Commissioner", value: "Coach Marcus Thorne", subValue: "Head of Player Development" },
    { icon: Calendar, title: "Season Date", value: "March 15 - June 22, 2024", subValue: "Playoffs begin June 10" },
  ];
  const recentResultsData: ResultItem[] = [
    {
      date: "May 14, 2024",
      homeTeam: { name: "Strikers", score: 3 },
      awayTeam: { name: "Apex Elite", score: 1 }
    },
    {
      date: "May 14, 2024",
      homeTeam: { name: "Metro Utd", score: 2 },
      awayTeam: { name: "Velocity FC", score: 2 }
    },
    {
      date: "May 13, 2024",
      homeTeam: { name: "Strikers", score: 4 },
      awayTeam: { name: "City Rovers", score: 0 }
    }
  ];

  return (
    <div className={`${quicksand.className} min-h-screen bg-[#F8FAFC] p-4 md:p-10 text-[#1A202C]`}>
      <div className="max-w-[1550px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

        <div className="lg:col-span-8 space-y-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-green-50 text-[10px] font-black text-green-600 uppercase tracking-tighter">
                <span className="w-1.5 h-1.5 rounded-full bg-[#009855] animate-pulse" /> Live Updates
              </span>
            </div>
            <h1 className="text-[48px] font-extrabold tracking-tight">League Standings:</h1>
            <h2 className="text-[48px] leading-tight font-extrabold text-[#1E51FF] tracking-tight">Spring Soccer Classic</h2>
          </div>

          <div className="bg-white rounded-[8px] shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-[50px_1fr_40px_40px_40px_40px_50px_60px] bg-gray-50/50 py-6 px-6 text-[13px] font-bold text-[#434656] uppercase tracking-widest border-b border-gray-100">
              <div>Rank</div>
              <div className="ml-10">Team Name</div>
              <div className="text-center">P</div>
              <div className="text-center">W</div>
              <div className="text-center">D</div>
              <div className="text-center">L</div>
              <div className="text-center">GD</div>
              <div className="text-center text-[#0035D0]">PTS</div>
            </div>
            <div className="px-4">
              {standings.map((team, idx) => (
                <StandingRow key={idx} {...team} />
              ))}
            </div>
          </div>
          <section>
            <h3 className="text-[30px] font-bold mb-6 uppercase tracking-tight">Recent Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentResultsData.map((result, idx) => (
                <div key={idx} className="bg-white p-6 rounded-[8px] border border-gray-100 shadow-sm">
                  <p className="text-[10px] font-bold text-[#434656] uppercase mb-4 tracking-widest">{result.date}</p>
                  <div className="space-y-3">
                    <div className="flex justify-between font-bold text-[14px]">
                      <span className="text-[#1A202C]">{result.homeTeam.name}</span>
                      <span className="text-[#1A202C] text-[18px]">{result.homeTeam.score}</span>
                    </div>
                    <div className="flex justify-between font-regular text-[14px">
                      <span className="text-[#94A3B8]">{result.awayTeam.name}</span>
                      <span className="text-[#94A3B8] text-[18px]">{result.awayTeam.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-[22px] font-bold mb-6">Join the League</h3>
            <div className="space-y-3 mb-6">
              <button className="w-full bg-[#1E51FF] text-white py-4 rounded-xl font-bold text-[18px] flex items-center justify-center gap-2 uppercase tracking-widest hover:bg-blue-700 transition-colors">
                <UserPlus className="w-4 h-4" /> Register as Individual
              </button>
              <button className="w-full border border-gray-100 py-4 rounded-xl font-bold text-[18px] flex items-center justify-center gap-2 text-[#1E51FF] uppercase tracking-widest hover:bg-gray-50 transition-colors">
                <Users className="w-4 h-4" /> Register as Individual
              </button>
            </div>
            <p className="text-[12px] text-center text-[#5E6061] font-medium leading-relaxed">
              Limited spots remaining for the Summer '24 intake.<br />Register early to secure your division.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-8">
            <h3 className="text-[22px] font-bold">League Details</h3>
            <div className="space-y-6">
              {leagueDetails.map((detail, idx) => (
                <DetailItem key={idx} {...detail} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0035D01A] p-6 rounded-2xl flex flex-col items-center gap-3 text-center">
             <VerifiedIcon  sx={{ fontSize: 29, color: '#0035D0' }}/>
              <span className="text-[10px] font-black text-[#0035D0] uppercase tracking-widest">Verified League</span>
            </div>
            <div className="bg-[#0035D01A] p-6 rounded-2xl flex flex-col items-center gap-3 text-center">
              <SportsSoccerIcon   sx={{ fontSize: 29, color: '#0035D0' }} />
              <span className="text-[10px] font-black text-[#0035D0] uppercase tracking-widest">Pro Officiating</span>
            </div>
          </div>

          {/* Bottom Sidebar Nav */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#1E51FF] rounded-lg flex items-center justify-center text-white text-[16px] font-black ">SSC</div>
              <div>
                <p className="text-[14px] font-black text-[#1A202C]">Summer Elite '24</p>
                <p className="text-[10px] text-[#94A3B8] font-bold">Youth Basketball Premier</p>
              </div>
            </div>
            <div className="space-y-1">
              {[
                { icon: LayoutDashboard, label: "Standings" },
                { icon: Calendar, label: "Schedule" },
                { icon: Users, label: "Rosters" },
                { icon: BarChart3, label: "Stats" },
              ].map((item, idx) => (
                <button key={idx} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[16px] font-semibold text-[#64748B] hover:bg-gray-50 transition-colors">
                  <item.icon className="w-5 h-5  color-[#64748B]" /> {item.label}
                </button>
              ))}
            </div>
            <button className="w-full bg-[#1E51FF] text-white py-4 rounded-xl font-bold text-[18px] uppercase tracking-widest mt-6 shadow-lg shadow-blue-100">
              Register Team
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeagueStandingsPage;