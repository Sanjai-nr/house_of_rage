import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-dark border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold neon-glow">HOUSE_OF_RANGE</h3>
            <p className="text-gray-400 text-sm">
              Premium printed streetwear for those who dare to be different.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/house_of_range"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-hover rounded-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">T-Shirts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Oversized Tees</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hoodies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Print</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@houseofrange.com" className="hover:text-white transition-colors">
                  info@houseofrange.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 XXXXX XXXXX</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-sm">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-white/30 transition-colors"
                />
                <button className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 House_of_Range. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
