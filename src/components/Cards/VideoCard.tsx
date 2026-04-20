import { Play, Download, FileText, User, Layout, MessageSquare, Phone, Mail, Globe } from 'lucide-react';

export const VideoCard = ({ image, title, category }: { image: string, title: string, category: string }) => (
  <div className="relative group cursor-pointer rounded-2xl overflow-hidden h-[240px]">
    <img src={image} className="w-full h-full object-cover" alt={title} />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
        <Play fill="white" className="text-white ml-0.5" size={20} />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 p-5 w-full bg-gradient-to-t from-black/90 to-transparent">
      <span className="bg-[#2557FF] text-white text-[9px] font-bold px-2 py-0.5 rounded mb-2 inline-block uppercase">
        {category}
      </span>
      <h3 className="text-white text-sm font-bold leading-snug uppercase tracking-tight">
        {title}
      </h3>
    </div>
  </div>
);