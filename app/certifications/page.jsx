"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const service = [
  {
    num: "01",
    title: "Build a Data Science Web App with Streamlit and Python",
    description: "Filler",
    href: "https://coursera.org/verify/JT3PJ8KY4B5U",
  },
  {
    num: "02",
    title: "Deep Neural Networks with PyTorch",
    description: "Filler",
    href: "https://coursera.org/verify/H2JNT8CU2PED",
  },
  {
    num: "03",
    title: "Introduction to Deep Learning & Neural Networks with Keras",
    description: "Filler",
    href: "https://coursera.org/verify/5ZFZ6JEZHD4T",
  },
  {
    num: "04",
    title: "Introduction to Computer Vision and Image Processing",
    description: "Filler",
    href: "https://coursera.org/verify/99XC332MHPH8",
  },
  {
    num: "05",
    title: "Machine Learning with Python",
    description: "Filler",
    href: "https://coursera.org/verify/5DPXLD3JTLCW",
  },
];

import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {service.map((service, index) => {
            return (
              <div
                className="flex-1 flex flex-col justify-center gap-6 group"
                key={index}
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full border border-white bg-none flex justify-center items-center hover:bg-accent hover:border-accent transition-all duration-500 hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-white text-3xl" />
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                {/* description */}
                <p className="text-white/50 group-hover:text-white/80 transition-all duration-500">
                  {service.description}
                </p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
