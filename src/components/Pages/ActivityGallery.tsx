import React from 'react';

const ActivityGallery = () => {
  return (
    <div className="relative z-0 max-w-[1600px] mx-auto py-12 px-6 mb-[-160px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden group shadow-xl h-[400px] md:h-[710px]">
          <img 
            src="/basketball.png" 
            alt="Basketball"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

        </div>
        <div className="flex flex-col gap-4">
          <div className="relative rounded-3xl overflow-hidden group shadow-lg h-[200px] md:h-[347px]">
            <img 
              src="/soccer-bg.jpg" 
              alt="Soccer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          <div className="relative rounded-3xl overflow-hidden group shadow-lg h-[200px] md:h-[347px]">
            <img 
              src="/swimmingpool.png" 
              alt="Swimming"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ActivityGallery;