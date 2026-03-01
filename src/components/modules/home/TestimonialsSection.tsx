import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import quoteImage from "../../../assets/images/home10_quote.png";
import avatar1 from "../../../assets/images/home10_avatar-148x148.jpg";
import avatar2 from "../../../assets/images/testimonials_09_1-148x148.jpg";
import avatar3 from "../../../assets/images/home6_img_3-148x148.png";

const testimonials = [
  {
    text: "Design is a way of life, a point of view. It involves the whole complex of visual communications: talent, creative ability and technical knowledge.",
    name: "Denis Robinson",
    role: "Customer",
    image: avatar1,
  },
  {
    text: "Design is a way of life, a point of view. It involves the whole complex of visual communications: talent, creative ability manual skill.",
    name: "Silviia Garden",
    role: "Customer",
    image: avatar2,
  },
  {
    text: "Design is a way of life, a point of view. It involves the whole complex of visual communications: talent, creative ability and technical knowledge.",
    name: "Tommy Dents",
    role: "Customer",
    image: avatar3,
  },
];

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">
        {/* ===== Left Column ===== */}
        <div className="md:col-span-1">
          <h5 className="text-orange-500 font-semibold uppercase tracking-widest">
            Testimonials
          </h5>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-gray-600">
            Ewebot stays ahead of the curve with digital marketing trends.
          </p>

          <img
            src={quoteImage}
            alt="quote"
            className="mt-8 w-32 opacity-80"
          />
        </div>

        {/* ===== Right Column (Slider) ===== */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index}>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {item.text}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
