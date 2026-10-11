import { ShoppingCart, Star } from 'lucide-react';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  rating: number;
  reviews: number;
  price: string;
}

const ProductCard = ({ image, category, title, rating, reviews, price }: ProductCardProps) => {
  return (
    <div
      className={`${quicksand.className} bg-white rounded-[8px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full`}
    >
      <div className="relative aspect-[4/3] w-full bg-[#f3f3f3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <span className="text-gray-400 text-[12px] sm:text-[14px] uppercase tracking-wider font-bold mb-1">
          {category}
        </span>

        <h3 className="text-[#1A1D1F] text-[16px] sm:text-[18px] font-bold mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < Math.floor(rating) ? '#FFC107' : 'none'}
              className={i < Math.floor(rating) ? 'text-[#FFC107]' : 'text-gray-300'}
              aria-hidden
            />
          ))}
          <span className="text-gray-400 text-[13px] ml-1 font-medium">({reviews})</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-auto">
          <span className="text-[#1A1D1F] text-[18px] sm:text-[20px] font-bold">${price}</span>
          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-[#2557FF] hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-bold text-[14px] sm:text-[16px] transition-all active:scale-95 w-full sm:w-auto"
          >
            <ShoppingCart size={18} aria-hidden />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
