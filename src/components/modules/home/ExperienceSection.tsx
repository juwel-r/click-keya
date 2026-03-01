import React from "react";
import { motion } from "framer-motion";

// Image imports (add these to your assets folder)
import phonesFigure from "../../../assets/images/home10-figure1.jpg";
import phoneStatistic from "../../../assets/images/home10-phone1.png";
import phoneProgress from "../../../assets/images/home10_phone2.png";
import phoneMarketing from "../../../assets/images/home10_phone3.png";

interface ProgressBarProps {
  label: string;
  percentage: number;
  delay?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  percentage,
  delay = 0,
}) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{label}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-orange-500 to-pink-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
        />
      </div>
      <div className="text-right mt-1">
        <span className="text-sm font-semibold text-orange-500">
          {percentage}%
        </span>
      </div>
    </motion.div>
  );
};

interface ExperienceSectionProps {
  className?: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  className = "",
}) => {
  return (
    <section className={`relative  py-20 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl ">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* ============== */}
          {/* Left Column - Images */}
          <div className="lg:w-1/2 relative min-h-[600px]">
            {/* Background Figure */}
            <div className="relative z-10">
              <img
                src={phonesFigure}
                alt="Phones Figure"
                className="w-full max-w-[600px]"
              />
            </div>

            {/* Floating Phone 1 - Statistic */}
            <motion.div
              initial={{ opacity: 0, x: -500 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  opacity: { duration: 1, delay: 0.2 },
                  x: {
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }}
              className="absolute left-2 -top-20 z-20"
            >
              <div>
                <img
                  src={phoneStatistic}
                  alt="Statistic"
                  className="w-[280px] lg:w-[380px]"
                />
              </div>
            </motion.div>

            {/* Floating Phone 2 - Progress */}
            <motion.div
              initial={{ opacity: 0, y: 500 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  opacity: { duration: 1, delay: 0.2 },
                  y: {
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }}
              className="absolute right-10 bottom-0 z-20"
            >
              <div>
                <img
                  src={phoneProgress}
                  alt="Progress"
                  className="w-[317px] lg:w-[417px] "
                />
              </div>
            </motion.div>

            {/* Floating Phone 3 - Marketing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute left-[60%] bottom-40 z-30"
            >
              <div>
                <img
                  src={phoneMarketing}
                  alt="Marketing"
                  className="w-[185px] lg:w-[235px] drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* ========================= */}

          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            {/* Experience Label */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h5 className="text-orange-500 text-lg font-semibold mb-3 tracking-wide uppercase">
                experience
              </h5>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Trusted Place To Buy Verified Accounts And Review Services.
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-gray-600 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="font-semibold text-gray-800">click keya</span> is
              your best choice for providing 100% real and non-drop Google,
              Google Maps, Google 5 Star, Facebook, Trustpilot, Elite Yelp,
              Sitejabber, and other review services. We also have all types of
              Bank/Crypto accounts for sale. Our teams are fully skilled and
              assured of promoting your business one step ahead.
            </motion.p>

            {/* Progress Bars */}
            <div className="space-y-4 mb-8">
              <ProgressBar
                label="Verified Bank/Crypto Accounts"
                percentage={90}
                delay={0.3}
              />
              <ProgressBar
                label="Social Media Accounts"
                percentage={79}
                delay={0.4}
              />
              <ProgressBar
                label="Non Drop Reviews Service"
                percentage={95}
                delay={0.5}
              />
            </div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="https://clickkeya.top/shop/"
                className="inline-block group"
              >
                <motion.button
                  className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Discover more</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
