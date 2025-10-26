import { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Star, ArrowLeft, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Product, Review } from '../types';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetailPage({ product, onBack }: ProductDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    loadReviews();
  }, [product.id]);

  const loadReviews = async () => {
    const { data } = await supabase
      .from('reviews')
      .select('*')
      .eq('product_id', product.id)
      .order('created_at', { ascending: false });

    setReviews(data || []);
  };

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

  const discount = product.compare_at_price
    ? Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100)
    : 0;

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="glass rounded-2xl overflow-hidden aspect-square">
              <img
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`glass-hover rounded-lg overflow-hidden aspect-square ${
                      selectedImage === index ? 'ring-2 ring-white' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              {product.is_customizable && (
                <div className="inline-flex items-center gap-2 px-3 py-1 glass-hover rounded-full text-sm mb-3">
                  <Sparkles className="w-4 h-4" />
                  Customizable
                </div>
              )}
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(averageRating)
                          ? 'fill-white text-white'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-400">
                    ({reviews.length} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold">₹{product.price}</span>
              {product.compare_at_price && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    ₹{product.compare_at_price}
                  </span>
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm font-bold">
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="text-gray-400 leading-relaxed">{product.description}</p>

            <div className="glass rounded-xl p-4 space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Select Size</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedSize === size
                          ? 'bg-white text-black'
                          : 'glass-hover'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Select Color</label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedColor === color
                          ? 'bg-white text-black'
                          : 'glass-hover'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 glass-hover rounded-lg font-bold"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 glass-hover rounded-lg font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 px-6 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all hover:scale-105 flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                ADD TO CART
              </button>
              <button className="px-6 py-4 glass-hover rounded-lg hover:bg-white/20 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            <div className="glass rounded-xl p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Print Type:</span>
                <span className="font-medium">{product.print_type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Fabric:</span>
                <span className="font-medium">{product.fabric_info}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Stock:</span>
                <span className="font-medium">{product.stock_quantity} available</span>
              </div>
            </div>
          </div>
        </div>

        {reviews.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="glass-hover rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'fill-white text-white' : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {new Date(review.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
