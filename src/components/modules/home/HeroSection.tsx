import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// Image imports (you'll need to add these images to your project)
import smilingGirl from "../../../assets/images/smiling_girl.jpg";
import digitalIcon from "../../../assets/images/home10-img1.png";
import marketingIcon from "../../../assets/images/home10-img2.png";
import growIcon from "../../../assets/images/home10-img3.png";
import successIcon from "../../../assets/images/home10-img4.png";
import dotIcon from "../../../assets/images/home_06_icon_22.png";
import dotLargeIcon from "../../../assets/images/home_06_icon_23.png";
import triangleOrange from "../../../assets/images/triangle_orange.png";
import triangleBlue from "../../../assets/images/triangle_blue.png";
import circleIcon from "../../../assets/images/circle.png";
import phoneIcon from "../../../assets/images/img_box_29_orange.png";

interface DigitalMarketingSectionProps {
  className?: string;
}

const DigitalMarketingSection: React.FC<DigitalMarketingSectionProps> = ({
  className = "",
}) => {
  return (
    <section className={`relative bg-white py-16 px-24 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Images */}
          <div className="lg:w-1/2 relative min-h-[600px]">
            {/* Main Image */}
            <motion.img
              src={smilingGirl}
              alt="Smiling girl"
              className="relative z-10 w-full max-w-[785px] rounded-lg "
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />

            {/* Floating Icons */}
            <motion.img
              src={digitalIcon}
              alt="Digital"
              className="absolute top-10 left-0 z-20 w-48"
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  opacity: { duration: 0.6, delay: 0.2 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.2,
                  },
                },
              }}
            />

            <motion.img
              src={marketingIcon}
              alt="Marketing"
              className="absolute top-30 right-10 z-20 w-60"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  opacity: { duration: 0.6, delay: 0.4 },
                  scale: { duration: 0.6, delay: 0.4 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.4,
                  },
                },
              }}
            />

            <motion.img
              src={growIcon}
              alt="Grow"
              className="absolute bottom-25 -left-20 z-20 w-52"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  opacity: { duration: 0.6, delay: 0.4 },
                  scale: { duration: 0.6, delay: 0.4 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.4,
                  },
                },
              }}
            />

            <motion.img
              src={successIcon}
              alt="Success"
              className="absolute top-60 right-0 z-20 w-48"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,

                transition: {
                  opacity: { duration: 0.6, delay: 0.8 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.8,
                  },
                },
              }}
            />

            {/* Decorative Elements */}
            <motion.img
              src={dotIcon}
              alt=""
              className="absolute bottom-0 left-0 w-6 h-6 z-50"
              initial={{ x: 0, y: 0 }}
              animate={{
                rotate: [0, 20, -20, 0],
                x: [0, 40, 0],
                y: [0, -30, 0],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />


            <motion.img
              src={dotLargeIcon}
              alt=""
              className="absolute top-40 -left-20 w-5 h-5 z-10000"
              initial={{ x: 0, y: 0 }}
              animate={{
                rotate: [0, 20, -20, 0],
                x: [0, 20, 0],
                y: [0, 20, 0],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />

            <motion.img
              src={triangleOrange}
              alt=""
              className="absolute bottom-60 -left-25 w-10 h-10 z-50"
              initial={{ x: 0, y: 0 }}
              animate={{
                rotate: [0, 20, -20, 0],
                x: [0, 40, 0],
                y: [0, -30, 0],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />


          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 relative min-h-[500px]">
            {/* Headings */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                Digital
              </h2>
              <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-4">
                Marketing
              </h2>
            </motion.div>

            {/* Type Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 h-16"
            >
              <TypeAnimation
                sequence={[
                  "Agency",
                  2000,
                  "Studio",
                  2000,
                  "Company",
                  2000,
                  "Experts",
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed mb-8"
            >
              Ensuring the Best Digital Marketing Services in USA With The
              Skilled Staff from All Over The World!
            </motion.p>

            {/* Contact Info */}
            <motion.a
              href="https://wa.me/+15186171525"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 mb-8 group"
            >
              <motion.img src={phoneIcon} alt="Phone" className="w-6" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
                  +15186171525
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Email: clickkeya242@gmail.com
                </p>
              </div>
            </motion.a>

            {/* Decorative Elements for Right Column */}
            <motion.div></motion.div>
            <motion.img
              src={dotIcon}
              alt=""
              className="absolute bottom-70 right-80 w-3 h-3"
              initial={{ x: 0, y: 0 }}
              animate={{
                rotate: [0, 20, -20, 0],
                x: [0, 40, 0],
                y: [0, -10, 0],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />

            <motion.img
              src={triangleBlue}
              alt=""
              className="absolute top-10 left-80 w-8 h-8"
              initial={{ x: 0, y: 0 }}
              animate={{
                rotate: [0, 20, -20, 0],
                x: [0, 40, 0],
                y: [0, -10, 0],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />

            <motion.img
              src={circleIcon}
              alt=""
              className="absolute bottom-100 right-20 w-6 h-6"
              initial={{ x: 0, y: 10 }}
              animate={{
                x: [0, -20, 20, 0],
                y: [10, -10, 10],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />

            <motion.img
              src={dotLargeIcon}
              alt=""
              className="absolute bottom-40 right-40 w-5 h-5"
              initial={{ x: 0, y: 0 }}
              animate={{
                rotate: [0, 20, -20, 0],
                x: [0, 40, 0],
                y: [0, -10, 0],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;
