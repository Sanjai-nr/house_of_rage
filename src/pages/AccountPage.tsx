import { useState } from 'react';
import { User, Package, Heart, LogOut } from 'lucide-react';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'wishlist'>('profile');
  const [isLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="glass-dark rounded-2xl p-8 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold neon-glow">Welcome Back</h1>
              <p className="text-gray-400">Sign in to access your account</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <button className="w-full px-6 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all hover:scale-105">
                SIGN IN
              </button>

              <div className="text-center text-sm text-gray-400">
                Don't have an account?{' '}
                <button className="text-white hover:underline font-semibold">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text">MY ACCOUNT</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 space-y-2">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'profile'
                  ? 'bg-white text-black'
                  : 'glass-hover'
              }`}
            >
              <User className="w-5 h-5" />
              Profile
            </button>

            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'orders'
                  ? 'bg-white text-black'
                  : 'glass-hover'
              }`}
            >
              <Package className="w-5 h-5" />
              Orders
            </button>

            <button
              onClick={() => setActiveTab('wishlist')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'wishlist'
                  ? 'bg-white text-black'
                  : 'glass-hover'
              }`}
            >
              <Heart className="w-5 h-5" />
              Wishlist
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 glass-hover rounded-lg text-red-400 hover:bg-red-500/20 transition-colors">
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </aside>

          <main className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="glass-dark rounded-xl p-8 space-y-6">
                <h2 className="text-2xl font-bold mb-6">Profile Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">City</label>
                    <input
                      type="text"
                      placeholder="Mumbai"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                <button className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all hover:scale-105">
                  SAVE CHANGES
                </button>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Order History</h2>

                <div className="glass-hover rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-semibold text-lg">Order #HOR12345</p>
                      <p className="text-sm text-gray-400">Placed on Jan 15, 2025</p>
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                      Delivered
                    </span>
                  </div>

                  <div className="flex gap-4 border-t border-white/10 pt-4">
                    <img
                      src="https://images.pexels.com/photos/1192335/pexels-photo-1192335.jpeg"
                      alt="Product"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-semibold">Urban Streetwear Tee</p>
                      <p className="text-sm text-gray-400">Size: L, Color: Black</p>
                      <p className="font-bold mt-1">₹899</p>
                    </div>
                  </div>
                </div>

                <div className="glass-hover rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-semibold text-lg">Order #HOR12344</p>
                      <p className="text-sm text-gray-400">Placed on Jan 10, 2025</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                      In Transit
                    </span>
                  </div>

                  <div className="flex gap-4 border-t border-white/10 pt-4">
                    <img
                      src="https://images.pexels.com/photos/7679862/pexels-photo-7679862.jpeg"
                      alt="Product"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-semibold">Oversized Range Hoodie</p>
                      <p className="text-sm text-gray-400">Size: XL, Color: White</p>
                      <p className="font-bold mt-1">₹1499</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[1, 2].map((item) => (
                    <div key={item} className="glass-hover rounded-xl overflow-hidden">
                      <div className="aspect-square">
                        <img
                          src="https://images.pexels.com/photos/1192335/pexels-photo-1192335.jpeg"
                          alt="Wishlist item"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 space-y-3">
                        <h3 className="font-semibold">Urban Streetwear Tee</h3>
                        <p className="text-lg font-bold">₹899</p>
                        <button className="w-full px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
