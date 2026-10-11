import React from 'react';
import { Quicksand } from 'next/font/google';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Info,
  Phone,
  UserPlus,
  Bell,
  MessageSquare,
  Share2,
  Bookmark,
  ChevronDown,
  SlidersHorizontal,
  Users,
} from 'lucide-react';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const CALENDAR_DATA = [
  { day: 29, events: [], prevMonth: true }, { day: 30, events: [], prevMonth: true },
  { day: 1, events: [{ title: "Soccer U12 ...", color: "bg-[#E0E7FF] text-[#4F46E5] border-[#C7D2FE]" }] },
  { day: 2, events: [{ title: "Tennis Clinic", color: "bg-[#DCFCE7] text-[#166534] border-[#BBF7D0]" }] },
  { day: 3, events: [] },
  { day: 4, events: [
      { title: "Basketball T...", color: "bg-[#FEE2E2] text-[#991B1B] border-[#FECACA]" },
      { title: "Soccer U12 ...", color: "bg-[#E0E7FF] text-[#4F46E5] border-[#C7D2FE]" }
  ], active: true },
  { day: 5, events: [] },
  { day: 6, events: [] },
  { day: 7, events: [{ title: "Flag Football", color: "bg-[#FFEDD5] text-[#9A3412] border-[#FED7AA]" }] },
  { day: 8, events: [{ title: "Soccer U12 ...", color: "bg-[#E0E7FF] text-[#4F46E5] border-[#C7D2FE]" }] },
  { day: 9, events: [] },
  { day: 10, events: [{ title: "Swim Meet", color: "bg-[#CFFAFE] text-[#0E7490] border-[#A5F3FC]" }] },
  { day: 11, events: [] }, { day: 12, events: [] },
  { day: " ", events: [] }, { day: " ", events: [] }, { day: " ", events: [] },
  { day: " ", events: [] }, { day: " ", events: [] }, { day: " ", events: [] }, 
  { day: "", events: [] }
];

const SIDEBAR_MENU = [
  { icon: Info, label: "Activity Details", active: true },
  { icon: Phone, label: "Contact Info" },
  { icon: UserPlus, label: "Registration" },
  { icon: Bell, label: "Reminders" }
];

const FILTERS = ['All Sports', 'All Locations', 'Any Age'];

const WEEKDAYS = [
  { short: 'S', full: 'SUN' },
  { short: 'M', full: 'MON' },
  { short: 'T', full: 'TUE' },
  { short: 'W', full: 'WED' },
  { short: 'T', full: 'THU' },
  { short: 'F', full: 'FRI' },
  { short: 'S', full: 'SAT' },
] as const;

const TrainingCalendarPage = () => {
  return (
    <div className={`${quicksand.className} min-h-screen p-4 lg:p-8 text-[#1A202C]`}>
      <div className="max-w-[1550px] mx-auto grid grid-cols-1 pb-8 lg:grid-cols-12 gap-6 lg:gap-8">
        
        <div className="lg:col-span-8">
          <div className="flex bg-white items-center gap-2 sm:gap-4 rounded-[8px] mb-6 lg:mb-8 overflow-x-auto p-2">
            <button
              type="button"
              className="flex shrink-0 items-center gap-2 px-3 sm:px-4 py-2 rounded-md text-[14px] sm:text-[16px] font-semibold text-gray-700"
            >
              <SlidersHorizontal size={16} aria-hidden /> Filters
            </button>
            <div className="h-6 w-px shrink-0 bg-gray-200 mx-1" aria-hidden />
            {FILTERS.map((f) => (
              <button key={f} className="flex items-center gap-2 px-4 py-2 bg-[#F3F4F6] rounded-[8px] text-[14px] font-medium text-gray-600 whitespace-nowrap">
                {f} <ChevronDown size={16} className="text-gray-400"/>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#111827]">October 2024</h1>
              <span className="px-3 py-1 bg-[#DBEAFE] text-[#2563EB] text-[12px] sm:text-[14px] font-bold rounded-full uppercase tracking-wider">
                Active
              </span>
            </div>
            <div className="flex gap-2 self-start sm:self-auto">
              <button
                type="button"
                className="p-2 border bg-white border-gray-200 rounded-md hover:bg-gray-50"
                aria-label="Previous month"
              >
                <ChevronLeft size={20} aria-hidden />
              </button>
              <button
                type="button"
                className="p-2 border bg-white border-gray-200 rounded-md hover:bg-gray-50"
                aria-label="Next month"
              >
                <ChevronRight size={20} aria-hidden />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[8px] border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto lg:overflow-visible">
              <div className="min-w-[640px] lg:min-w-0">
                <div className="grid grid-cols-7 bg-[#F9FAFB] border-b border-gray-100">
                  {WEEKDAYS.map((day) => (
                    <div
                      key={day.full}
                      className="py-2 sm:py-4 text-center text-[11px] sm:text-[14px] font-bold text-[#434656] tracking-wide sm:tracking-widest"
                    >
                      <span className="sm:hidden">{day.short}</span>
                      <span className="hidden sm:inline">{day.full}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7">
                  {CALENDAR_DATA.map((item, idx) => (
                    <div
                      key={idx}
                      className={`min-h-[5.5rem] sm:min-h-[7rem] md:min-h-[9rem] lg:h-72 p-1.5 sm:p-2 lg:p-3 border-r border-b border-gray-100 relative [&:nth-child(7n)]:border-r-0 ${
                        item.prevMonth ? 'text-gray-300 bg-[#e1e3e460]' : ''
                      } ${item.active ? 'bg-[#F0F7FF]' : ''}`}
                    >
                      <div className="flex flex-col items-start h-full min-w-0">
                        <span
                          className={`text-xs sm:text-sm font-bold mb-1 sm:mb-2 shrink-0 ${
                            item.prevMonth ? 'text-[#43465680]' : 'text-gray-700'
                          } ${
                            item.active
                              ? 'bg-[#2563EB] text-white w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full -ml-0.5 sm:-ml-1'
                              : ''
                          }`}
                        >
                          {item.day}
                        </span>
                        <div className="w-full min-w-0 space-y-1 sm:space-y-1.5 overflow-hidden flex-1">
                          {item.events.map((ev, i) => (
                            <div
                              key={i}
                              className={`text-[10px] sm:text-[12px] font-bold px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-md border-l-4 ${ev.color} truncate shadow-sm`}
                              title={ev.title}
                            >
                              {ev.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="px-3 py-2 text-[11px] text-gray-400 font-medium border-t border-gray-100 lg:hidden">
              Swipe horizontally to view the full calendar
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow-md">
            <div className="relative h-48">
              <img src="/footbal.png" alt="Soccer" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap gap-2 justify-between items-center mb-4">
                <span className="px-3 py-1 bg-[#2563EB] text-white text-[10px] font-bold rounded-md uppercase tracking-wider">
                  U12 Elite Training
                </span>
                <span className="text-[18px] sm:text-[20px] font-extrabold text-[#2563EB]">$149</span>
              </div>
              <h2 className="text-[18px] sm:text-[20px] font-bold text-[#111827] mb-3">Youth soccer training</h2>
              <p className="text-[14px] sm:text-[16px] text-gray-500 font-regular leading-[22px] mb-6">
                Intensive training session focusing on advanced dribbling techniques and small-sided games. Please arrive 15 minutes early for warm-ups.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                   <div className="bg-[#EFF6FF] p-2.5 rounded-xl text-[#2563EB]"><Clock size={20}/></div>
                   <div>
                     <p className="text-sm font-semibold text-gray-800">Oct 24, 2024</p>
                     <p className="text-xs text-gray-400 font-semibold uppercase">4:00 PM - 6:00 PM</p>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="bg-[#EFF6FF] p-2.5 rounded-xl text-[#2563EB]"><Users size={20}/></div>
                   <div>
                     <p className="text-sm font-semibold text-gray-800">North Complex Field 3</p>
                     <p className="text-xs text-gray-400 font-semibold">123 Sports Pkwy, Cityville</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[8px] border border-gray-100 shadow-sm p-2">
            {SIDEBAR_MENU.map((m, i) => (
              <div key={i} className={`flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer mb-1 last:mb-0 ${m.active ? 'bg-[#0035D00A] text-[#1C50FB] border-r-4 border-[#2563EB]' : 'hover:bg-gray-50 text-[#64748B]'}`}>
                <div className="flex items-center gap-3">
                  <m.icon size={20} />
                  <span className="text-sm font-semibold">{m.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[8px] border border-gray-100 shadow-sm p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
            <button
              type="button"
              className="w-full bg-[#2563EB] text-white py-3.5 sm:py-4 rounded-xl font-bold text-[15px] sm:text-[18px] uppercase tracking-wide sm:tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-blue-200 hover:bg-[#1D4ED8] transition-all"
            >
              <UserPlus size={20} aria-hidden /> Register Now
            </button>
            <button
              type="button"
              className="w-full border-2 border-gray-100 text-[#2563EB] py-3.5 sm:py-4 rounded-xl font-bold text-[15px] sm:text-[18px] uppercase tracking-wide sm:tracking-widest flex items-center justify-center gap-2 hover:border-[#2563EB] transition-all"
            >
              <MessageSquare size={20} aria-hidden /> Message NRICH
            </button>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-2">
              <button className="flex items-center gap-2 text-[15px] font-bold text-gray-400 hover:text-[#2563EB] transition-colors">
                <Share2 size={18}/> Share
              </button>
              <button className="flex items-center gap-2 text-[15px] font-bold text-gray-400 hover:text-[#2563EB] transition-colors">
                <Bookmark size={18}/> Save
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrainingCalendarPage;