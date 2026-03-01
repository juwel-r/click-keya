import React from 'react';

interface BuyVerifiedAccountsSectionProps {
  className?: string;
}

const BuyVerifiedAccountsSection: React.FC<BuyVerifiedAccountsSectionProps> = ({ className = '' }) => {
  return (
    <section className={`bg-white py-8 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading with Gradient */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Want to Buy Verified Accounts?
          </h2>

          {/* Divider */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
          </div>

          {/* Description Text */}
          <p className="text-gray-600 text-lg mb-4">
            <span>Please message us for fast support to our Agent Team.</span>
          </p>

          {/* Telegram Link */}
          <p className="text-gray-800 text-xl md:text-2xl mb-8">
            Telegram –{' '}
            <a 
              href="https://t.me/Clickkeya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-600 transition-colors"
              style={{ color: '#877dee' }}
            >
              @Clickkeya
            </a>
          </p>

          {/* Send Message Button - Original Style */}
          <div className="flex justify-center">
            <a 
              href="https://clickkeya.top/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block overflow-hidden rounded-full"
            >
              {/* Front layer */}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 transition-transform duration-300 ease-in-out group-hover:-translate-y-full"></span>
              
              {/* Back layer */}
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
              
              {/* Button text */}
              <span className="relative block px-8 py-4 text-white font-semibold">
                Send message
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyVerifiedAccountsSection;