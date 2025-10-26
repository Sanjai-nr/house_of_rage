import { Heart, ShoppingCart } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export default function ProductCard({ product, onProductClick }: ProductCardProps) {
  const discount = product.compare_at_price
    ? Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100)
    : 0;

  return (
    <div className="glass-hover rounded-xl overflow-hidden group cursor-pointer">
      <div className="relative aspect-square overflow-hidden" onClick={() => onProductClick(product)}>
        <img
          src={product.images[0] || 'https://images.pexels.com/photos/1192335/pexels-photo-1192335.jpeg'}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-white text-black px-3 py-1 rounded-full text-xs font-bold">
            {discount}% OFF
          </div>
        )}
        {product.is_customizable && (
          <div className="absolute top-3 right-3 glass-dark px-3 py-1 rounded-full text-xs font-medium">
            Customizable
          </div>
        )}
        <button
          className="absolute top-3 right-3 p-2 glass-dark rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
          onClick={(e) => {
            e.stopPropagation();
          }}
          aria-label="Add to wishlist"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4 space-y-3">
        <div onClick={() => onProductClick(product)}>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">₹{product.price}</span>
            {product.compare_at_price && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.compare_at_price}
              </span>
            )}
          </div>

          <button
            className="p-2 glass-hover rounded-lg hover:bg-white/20 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-2">
          {product.sizes.slice(0, 5).map((size) => (
            <span
              key={size}
              className="px-2 py-1 text-xs glass rounded border border-white/10"
            >
              {size}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
