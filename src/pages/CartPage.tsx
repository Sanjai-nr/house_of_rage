import { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function CartPage() {
  const [cartItems] = useState([
    {
      id: '1',
      name: 'Urban Streetwear Tee',
      price: 899,
      image: 'https://images.pexels.com/photos/1192335/pexels-photo-1192335.jpeg',
      size: 'L',
      color: 'Black',
      quantity: 2,
    },
    {
      id: '2',
      name: 'Oversized Range Hoodie',
      price: 1499,
      image: 'https://images.pexels.com/photos/7679862/pexels-photo-7679862.jpeg',
      size: 'XL',
      color: 'White',
      quantity: 1,
    },
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text">SHOPPING CART</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg mb-6">Your cart is empty</p>
            <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all hover:scale-105">
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="glass-hover rounded-xl p-6">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 glass rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <div className="flex gap-4 text-sm text-gray-400">
                        <span>Size: {item.size}</span>
                        <span>Color: {item.color}</span>
                      </div>
                      <p className="font-bold text-lg">₹{item.price}</p>

                      <div className="flex items-center gap-3 mt-4">
                        <button className="w-8 h-8 glass-hover rounded-lg flex items-center justify-center">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-semibold">{item.quantity}</span>
                        <button className="w-8 h-8 glass-hover rounded-lg flex items-center justify-center">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <button className="p-2 glass-hover rounded-lg hover:bg-red-500/20 transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <p className="font-bold text-xl">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="glass-dark rounded-xl p-6 sticky top-24 space-y-4">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-3">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span>₹{shipping}</span>
                  </div>
                  <div className="border-t border-white/10 pt-3 flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <button className="w-full px-6 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all hover:scale-105 mt-6">
                  PROCEED TO CHECKOUT
                </button>

                <button className="w-full px-6 py-3 glass-hover rounded-lg font-semibold">
                  CONTINUE SHOPPING
                </button>

                <div className="mt-6 pt-6 border-t border-white/10 text-sm text-gray-400 space-y-2">
                  <p>✓ Free returns within 7 days</p>
                  <p>✓ Cash on Delivery available</p>
                  <p>✓ Secure checkout</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
