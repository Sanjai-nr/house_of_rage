import { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';
import ProductCard from '../components/ProductCard';
import type { Product, Category } from '../types';

interface HomePageProps {
  onProductClick: (product: Product) => void;
  onPageChange: (page: string) => void;
}

export default function HomePage({ onProductClick, onPageChange }: HomePageProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [categoriesRes, featuredRes, trendingRes] = await Promise.all([
      supabase.from('categories').select('*').limit(6),
      supabase.from('products').select('*').eq('is_featured', true).limit(4),
      supabase.from('products').select('*').eq('is_trending', true).limit(4),
    ]);

    setCategories(categoriesRes.data || []);
    setFeaturedProducts(featuredRes.data || []);
    setTrendingProducts(trendingRes.data || []);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1192335/pexels-photo-1192335.jpeg)',
            filter: 'brightness(0.3)',
          }}
        />

        <div className="relative z-10 text-center space-y-6 px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold neon-glow tracking-wider">
            HOUSE_OF_RANGE
          </h1>
          <p className="text-xl md:text-3xl gradient-text font-light tracking-widest">
            WEAR YOUR RANGE
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => onPageChange('shop')}
              className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all hover:scale-105"
            >
              SHOP NOW
            </button>
            <button
              onClick={() => onPageChange('shop')}
              className="px-8 py-4 glass-hover font-semibold rounded-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              CUSTOMIZE YOUR TEE
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          EXPLORE COLLECTIONS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onPageChange('shop')}
              className="glass-hover rounded-2xl overflow-hidden group aspect-square"
            >
              <div className="relative w-full h-full">
                <img
                  src={category.image_url}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-bold neon-glow">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {featuredProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            FEATURED PRODUCTS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={onProductClick}
              />
            ))}
          </div>
        </section>
      )}

      {trendingProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            TRENDING NOW
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={onProductClick}
              />
            ))}
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass-dark rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 neon-glow">
            CREATE YOUR OWN STYLE
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Bring your ideas to life with our custom printing service. Design your unique t-shirt today.
          </p>
          <button
            onClick={() => onPageChange('shop')}
            className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all hover:scale-105"
          >
            START DESIGNING
          </button>
        </div>
      </section>
    </div>
  );
}
