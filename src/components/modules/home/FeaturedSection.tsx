import React from "react";
import map from "../../../assets/images/map-new.png";

const features = [
  {
    title: "Discover, Explore the Product",
    image: "https://clickkeya.top/wp-content/uploads/2021/01/circle_orange.png",
  },
  {
    title: "Product UX, Design & Development",
    image: "https://clickkeya.top/wp-content/uploads/2021/01/circle_green.png",
  },
  {
    title: "Art Direction & Brand Strategy",
    image: "https://clickkeya.top/wp-content/uploads/2021/01/circle_blue.png",
  },
  {
    title: "Marketing Strategy & SEO Campaigns",
    image: "https://clickkeya.top/wp-content/uploads/2021/01/circle_purple.png",
  },
];

export default function FeaturedSection() {
  return (
    <div className="w-full">
      {/* ===== Section 1 ===== */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Featured Projects
          </p>
          <h2 className="text-4xl font-bold mt-4">
            Premium Services from Our Company
          </h2>
        </div>
      </section>

      {/* ===== Section 2 ===== */}
      <section className="py-20  relative bg-center bg-cover" style={{ backgroundImage: `url(${map})` }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative">
            <h5 className="text-orange-500 font-semibold uppercase tracking-widest">
              Why Choose Us
            </h5>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Boosts Your Business Strategy
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              We are passionate about our work. You can get fully verified
              American Bank accounts and crypto Wallets. Real authentic
              documents from the USA, UK, CA, AU, EU, and other countries verify
              our accounts. We always deliver accounts as soon as you place your
              order. We care about your business, which is why we work with you.
            </p>

            <a
              href="https://clickkeya.top/shop/"
              className="inline-block mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
            >
              Discover More
            </a>
          </div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-md shadow-2xl hover:text-muted hover:bg-[rgb(61,54,109)] duration-500 transition text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
