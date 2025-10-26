import { Sparkles, Users, Palette } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            ABOUT HOUSE_OF_RANGE
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're not just a clothing brand. We're a movement for those who refuse to blend in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="glass-hover rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg"
              alt="Brand Story"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-bold neon-glow">OUR STORY</h2>
            <p className="text-gray-400 leading-relaxed">
              House_of_Range was born from a simple belief: everyone has a range of identities,
              moods, and expressions that deserve to be celebrated. Founded in 2024, we set out
              to create premium streetwear that goes beyond fashion - it's a canvas for self-expression.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Every piece we create is carefully designed and printed with attention to detail,
              ensuring you get clothing that not only looks incredible but feels authentic to who you are.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From our signature oversized tees to custom prints that tell your unique story,
              we're here to help you wear your range with confidence.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            OUR MISSION
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-hover rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-400">
                We use only the finest fabrics and printing techniques to ensure every piece
                meets our high standards.
              </p>
            </div>

            <div className="glass-hover rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Creative Expression</h3>
              <p className="text-gray-400">
                Our designs push boundaries and encourage you to express yourself boldly
                and authentically.
              </p>
            </div>

            <div className="glass-hover rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Driven</h3>
              <p className="text-gray-400">
                We're building a community of individuals who aren't afraid to stand out
                and make their mark.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            DESIGN PHILOSOPHY
          </h2>

          <div className="glass-dark rounded-2xl p-12">
            <div className="max-w-3xl mx-auto space-y-6 text-center">
              <p className="text-lg text-gray-300 leading-relaxed">
                At House_of_Range, we believe in the power of minimalism meets boldness.
                Our designs are clean, modern, and timeless, yet each piece makes a statement.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We draw inspiration from streetwear culture, contemporary art, and the diverse
                individuals who wear our pieces. Every design is crafted to be versatile enough
                for everyday wear while standing out in any crowd.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you choose from our curated collection or create a custom design,
                you're not just buying clothes - you're investing in pieces that represent your range.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            OUR PROCESS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="glass rounded-2xl overflow-hidden aspect-square mb-4">
                <img
                  src="https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg"
                  alt="Design Process"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold">1. DESIGN</h3>
              <p className="text-gray-400">
                Each design is carefully crafted by our creative team or customized by you
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="glass rounded-2xl overflow-hidden aspect-square mb-4">
                <img
                  src="https://images.pexels.com/photos/7679866/pexels-photo-7679866.jpeg"
                  alt="Quality Materials"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold">2. MATERIALS</h3>
              <p className="text-gray-400">
                We source premium fabrics that are comfortable, durable, and sustainable
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="glass rounded-2xl overflow-hidden aspect-square mb-4">
                <img
                  src="https://images.pexels.com/photos/7679862/pexels-photo-7679862.jpeg"
                  alt="Print Process"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold">3. CRAFT</h3>
              <p className="text-gray-400">
                Advanced printing techniques bring each design to life with vibrant, lasting colors
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center glass-dark rounded-3xl p-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 neon-glow">
            JOIN THE RANGE
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Follow us on Instagram @house_of_range to see our latest drops,
            behind-the-scenes content, and community highlights.
          </p>
          <a
            href="https://instagram.com/house_of_range"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all hover:scale-105"
          >
            FOLLOW US
          </a>
        </div>
      </div>
    </div>
  );
}
