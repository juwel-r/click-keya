// Image imports (add these to your assets folder)
import ellipseBg from "../../../assets/images/home10_ellipse2.png";
import dotIcon from "../../../assets/images/home_06_icon_22.png";
import triangleOrange from "../../../assets/images/triangle_orange.png";
import triangleBlue from "../../../assets/images/triangle_blue.png";
import dotLargeIcon from "../../../assets/images/home_06_icon_23.png";

import { motion } from "framer-motion";

// Service Images
import socialMediaImg from "../../../assets/images/Social-Media-Accounts.png";
import socialMediaActive from "../../../assets/images/home10_service1-active.png";
import fastestDeliveryImg from "../../../assets/images/Fastest-Delivery.png";
import fastestDeliveryActive from "../../../assets/images/home10_service4-active.png";
import cashAppImg from "../../../assets/images/Cash-App-Service.png";
import cashAppActive from "../../../assets/images/home10_service2-active.png";
import replacementImg from "../../../assets/images/Replacement-Guarantee.png";
import replacementActive from "../../../assets/images/home10_service5-active.png";
import reviewsImg from "../../../assets/images/Reviews-Services.png";
import reviewsActive from "../../../assets/images/home10_service3-active.png";
import supportImg from "../../../assets/images/Customer-Support.jpg";
import supportActive from "../../../assets/images/home10_service6-active.png";

export default function WhatWeOffer() {
  interface ServiceItem {
    image: string;
    activeImg: string;
    title: string;
    description: string;
    link?: string;
  }

  const serviceItems: ServiceItem[] = [
    {
      image: socialMediaImg,
      activeImg: socialMediaActive,
      title: "Social Media Accounts",
      description:
        "You can get all type of social media accounts with friends and family also use history. You will also get a 100% moneyback and 7 days replacement!",
      link: "#",
    },
    {
      image: cashAppImg,
      activeImg: cashAppActive,
      title: "Cash App Services",
      description:
        "Cash App, Chime, Venmo, Go2Bank, Bank of America, Zelle, Paypal, Revolut , Stripe, Wise, Zen, Vivid, Relay- All types of Bank Cash out service & Accounts Available",
      link: "https://clickkeya.top/about-us/",
    },
    {
      image: reviewsImg,
      activeImg: reviewsActive,
      title: "Non Drop Reviews Services",
      description:
        "Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.",
      link: "#",
    },
    {
      image: fastestDeliveryImg,
      activeImg: fastestDeliveryActive,
      title: "Fastest Delivery",
      description:
        "After placing the order, you will receive your service within a minimum of 4 hours to 6 hours. We always deliver as soon as possible!",
      link: "#",
    },
    {
      image: replacementImg,
      activeImg: replacementActive,
      title: "Replacement Offer",
      description:
        "Our refund and returns policy lasts 15 days. If 15 days have passed since your purchase, we can't offer you a full refund or exchange.",
      link: "#",
    },
    {
      image: supportImg,
      activeImg: supportActive,
      title: "Customer Support",
      description:
        "The main thing why customers satisfied with our service is Customer support. We always provides the friendly support for 24 hours.",
      link: "#",
    },
  ];

  return (
    <div className="w-full mx-auto relative mb-12">
      <section className="w-full mx-auto text-center space-y-2">
        <p className="text-xs font-semibold text-muted-foreground">
          WHY CHOOSE US
        </p>
        <h1 className="font-extrabold text-3xl mb-8 mt-4">What We Offer</h1>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 max-w-6xl mx-auto gap-8">
        {serviceItems.map((item, index) => (
          <div
            key={index}
            className="relative group max-w-96 p-8 shadow-2xl rounded-xl text-[#696687] hover:text-muted hover:bg-[rgb(61,54,109)] transition-all duration-500"
          >
            <div className="flex items-center justify-start gap-4">
              <div className="w-16 h-16 group-hover:opacity-0 transition-all duration-300">
                <img className="" src={item.image} alt={item.title} />
              </div>
              <div className="absolute top-0 left-0 w-16 h-16 group-hover:opacity-100 opacity-0 transition-all duration-5QS mt-8 ml-8 ">
                <img className="w-full" src={item.activeImg} alt={item.title} />
              </div>
              <h3 className=" font-semibold">{item.title}</h3>
            </div>
            <p className="mt-4 leading-7">{item.description}</p>
          </div>
        ))}
      </section>

      {/* Floating Icons */}
      <motion.img
        src={ellipseBg}
        alt="Digital"
        className="absolute top-10 right-0 -z-20 w-3xl"
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
        className="absolute top-10 right-90 w-8 h-8"
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
        src={triangleOrange}
        alt=""
        className="absolute bottom-60 -left-10 w-10 h-10 z-50"
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
        className="absolute top-20 -left-10 w-4 h-4 z-50"
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

      {/* Cross icon black */}
      <motion.img
        src={dotLargeIcon}
        alt=""
        className="absolute top-70 right-10 w-5 h-5"
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

      {/* Cross icon blue*/}
      <motion.img
        src={dotIcon}
        alt=""
        className="absolute top-50 right-20 w-3 h-3"
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
    </div>
  );
}
