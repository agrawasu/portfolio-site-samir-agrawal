"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const service = [
  {
    title: "IBM AI Engineering Professional Certificate",
    description:
      "Extensively explored Artificial Intelligence and Machine Learning models while also building upon a foundation of fundamental knowledge regarding proper methods of implementing it. From covering the basics with each of the most popular modules/libraries and neural networks to implementing them in a lab environment, this course helped shape a deeper understanding on AI and helped me learn skills that I can apply to any area or project in the future.",
    href: "https://coursera.org/verify/professional-cert/ZETRE67HZNX9",
  },
  {
    title: "Predicting House Prices with Regression using TensorFlow",
    description:
      "As the title of the certification suggests, this program was created using TensorFlow, along with Pandas, NumPy, Scikit-Learn, Matplotlib, and various Keras tools. The dataset contains different columns, such as date, age, distance to transportation, convenience stores located nearby, latitude/longitude, and the selling price associated with each house. This dataset was stored in a Pandas dataframe, and was manipulated and used by the other libraries mentioned above. See the projects tab for more info.",
    href: "https://coursera.org/verify/CDG2EWV5CRUZ",
  },
  {
    title: "Building Deep Learning Models with Tensorflow",
    description:
      "This course went into detail with multiple different types of learning models that can be built using Tensorflow. Starting with Supervised Learning Models such as Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs), fundamentals of these were taught by lectures and labs. Following supervised learning models was the unsupervised models such as Restricted Boltzmann Machines (RBMs) to build a recommendation system and Autoencoders for image reconstruction.",
    href: "https://coursera.org/verify/4699XVBMPFRA",
  },
  {
    title: "Build a Data Science Web App with Streamlit and Python",
    description:
      "Interactive map showing motor vehicle collision statistics in New York City built primarily using Python and Streamlit. I gained different organizational strategies and best practices, as well as learned tips for manipulating the code for any data set.",
    href: "https://coursera.org/verify/JT3PJ8KY4B5U",
  },
  {
    title: "Deep Neural Networks with PyTorch",
    description:
      "As part of a 6 module IBM AI Engineer certification course, this course allowed me to practice the use of some of the most used and versatile Python libraries, including: PyTorch, Pandas, and NumPy. Fundamental to intermediate knowledge regarding Deep Neural Networks was also gathered while obtaining this certification.",
    href: "https://coursera.org/verify/H2JNT8CU2PED",
  },
  {
    title: "Introduction to Deep Learning & Neural Networks with Keras",
    description:
      "I learned many fundamentals involving Deep Learning and Neural Networks, as well as building them with the various Tensorflow and Keras  libraries.",
    href: "https://coursera.org/verify/5ZFZ6JEZHD4T",
  },
  {
    title: "Introduction to Computer Vision and Image Processing",
    description:
      "While obtaining this certificate, I was exposed to the vast applications of image classification using tools such as Computer Vision and Pillow, finishing it off with a final project in which we were required to build an image classification model to differentiate between various traffic signs. The model was trained using a provided set of labelled images.",
    href: "https://coursera.org/verify/99XC332MHPH8",
  },
  {
    title: "Machine Learning with Python",
    description:
      "This certification course was a very high-level introduction to Machine Learning concepts and how to apply them in Python. A combination of lectures and labs built a very sturdy foundation of knowledge, further reinforced by a final exam and project at the end of the course.",
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
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>

                  {/* button */}
                  <Link
                    href={service.href}
                    target="_blank"
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
