import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Image imports (same as above)
import ellipseBg from "../../../assets/images/home10_ellipse.png";
import girlWithPhone from "../../../assets/images/girl-with_phone.jpg";
import dotLargeIcon from "../../../assets/images/home_06_icon_23.png";
import dotIcon from "../../../assets/images/home_06_icon_22.png";
import triangleBlue from "../../../assets/images/triangle_blue.png";
import triangleOrange from "../../../assets/images/triangle_orange.png";
import circleIcon from "../../../assets/images/circle.png";

interface StatItemProps {
  end: number;
  suffix?: string;
  description: string;
  delay?: number;
}

interface StatsSectionProps {
  className?: string;
}

const StatItem: React.FC<StatItemProps> = ({
  end,
  suffix = "",
  description,
  delay = 0,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className="mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
        {inView ? (
          <CountUp end={end} duration={2.5} suffix={suffix} />
        ) : (
          `0${suffix}`
        )}
      </div>
      <p className="text-gray-600 text-lg">{description}</p>
    </motion.div>
  );
};

const StatsSection: React.FC<StatsSectionProps> = ({ className = "" }) => {
  // Same JSX as above but using StatItem instead of Counter
  return (
    <section className={`relative bg-white py-20 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl ">
        <div className="flex flex-col lg:flex-row items-center gap-12 ">
          {/* Left Column - Stats */}
          <div className="lg:w-1/2 relative">
            {/* Background Ellipse - same as above */}
            <motion.div
              className="absolute -left-20 top-0 z-0 opacity-30"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 0.3, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img
                src={ellipseBg}
                alt=""
                className="w-[577px] lg:w-[777px] h-auto"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Stats Grid */}
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-content-center place-items-center">
                {/* Left Column Stats */}
                <div className="bg-white shadow-2xl ml-auto rounded-md p-8 w-64 h-56 flex justify-center items-center z-30">
                  <StatItem
                    end={320}
                    suffix="m"
                    description="Digital global audience reach"
                    delay={0.2}
                  />
                </div>
                <div className="bg-white shadow-2xl ml-auto rounded-md p-8 w-64 h-56 flex justify-center items-center z-30">
                  <StatItem
                    end={1350}
                    description="Content pieces produced everyday"
                    delay={0.4}
                  />
                </div>

                {/* Right Column Stats */}
                <div className="bg-white shadow-2xl ml-auto rounded-md p-8 w-64 h-56 flex justify-center items-center z-30">
                  <StatItem
                    end={89}
                    suffix="%"
                    description="Of the audience is under 34 years old"
                    delay={0.3}
                  />
                </div>
                <div className="bg-white shadow-2xl ml-auto rounded-md p-8 w-64 h-56 flex justify-center items-center z-30">
                  <StatItem
                    end={94}
                    suffix="%"
                    description="Employee worldwide"
                    delay={0.5}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2 relative">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10"
            >
              <img
                src={girlWithPhone}
                alt="Girl with phone"
                className="w-full max-w-[637px]"
              />
            </motion.div>

            {/* Decorative Elements around image */}
          </div>
        </div>
      </div>

      <motion.img
        src={ellipseBg}
        alt="Digital"
        className="absolute top-10 left-0 w-2xl"
        initial={{ opacity: 0, y: 0, x: 0 }}
        animate={{
          opacity: 1,
          y: [0, -40, 0],
          x: [0, 40, 30, 0],
          transition: {
            opacity: { duration: 0.6, delay: 0.2 },
            y: {
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.2,
            },
            x: {
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.2,
            },
          },
        }}
      />

      <motion.img
        src={triangleBlue}
        alt=""
        className="absolute bottom-50 left-15 w-8 h-8"
        initial={{ x: 0, y: 0 }}
        animate={{
          rotate: [0, 30, -30, 0],
          x: [0, 40, 0],
          y: [0, -10, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />

      <motion.img
        src={dotLargeIcon}
        alt=""
        className="absolute top-50 left-0 w-5 h-5"
        initial={{ x: 0, y: 0 }}
        animate={{
          rotate: [0, 30, -30, 0],
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
        src={dotIcon}
        alt=""
        className="absolute top-20 left-30 w-3 h-3 z-50"
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
        src={dotIcon}
        alt=""
        className="absolute top-30 right-10 w-3 h-3 z-50"
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
        src={circleIcon}
        alt=""
        className="absolute top-10 right-40 w-6 h-6"
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
        src={triangleOrange}
        alt=""
        className="absolute top-60 right-25 w-10 h-10 z-50"
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
    </section>
  );
};

export default StatsSection;
