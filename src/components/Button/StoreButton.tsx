export const StoreButton = ({ type }: { type: 'google' | 'apple' }) => (
  <button className="bg-white hover:bg-gray-100 transition-colors py-2 px-4 rounded-[19px] flex items-center justify-start gap-2 border border-gray-200">
    <div className="w-6 h-6 flex items-center">
      {type === 'google' ? (
         <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-full h-full object-contain" />
      ) : (
         <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="App Store" className="w-full h-full object-contain" /> // Apple loqosu daha təmiz görünməsi üçün sadələşdirildi
      )}
    </div>
    <div className="text-left leading-tight">
      <p className="text-[10px] text-gray-500 uppercase font-bold">
        {type === 'google' ? 'Get it on' : 'Download on the'}
      </p>
      <p className="text-[14px] text-black font-bold">
        {type === 'google' ? 'Google Play' : 'App Store'}
      </p>
    </div>
  </button>
);