"use client";

import { easeIn, motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Project category",
    title: "Project 01",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad blanditiis sint, numquam possimus suscipit ducimus.",
    builtWith: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "Numpy" },
      { name: "Streamlit" },
      { name: "PyDeck" },
      { name: "Plotly" },
    ],
    image: "/assets/projects/crashtracker.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Project category",
    title: "Project 02",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad blanditiis sint, numquam possimus suscipit ducimus.",
    builtWith: [
      { name: "Language/Module 1" },
      { name: "Language/Module 2" },
      { name: "Language/Module 3" },
    ],
    image: "/",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Project category",
    title: "Project 03",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad blanditiis sint, numquam possimus suscipit ducimus.",
    builtWith: [
      { name: "Language/Module 1" },
      { name: "Language/Module 2" },
      { name: "Language/Module 3" },
    ],
    image: "/",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Project category",
    title: "Project 04",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad blanditiis sint, numquam possimus suscipit ducimus.",
    builtWith: [
      { name: "Language/Module 1" },
      { name: "Language/Module 2" },
      { name: "Language/Module 3" },
    ],
    image: "/",
    live: "",
    github: "",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none group">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} {/* project */}
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* built with */}
              <ul className="flex gap-4">
                {project.builtWith.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}

                      {/* remove last comma */}
                      {index !== project.builtWith.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* horizontal line */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full border border-white bg-none flex justify-center items-center hover:bg-accent hover:border-accent transition-all duration-500">
                        <BsArrowUpRight className="text-white text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full border border-white bg-none flex justify-center items-center hover:bg-accent hover:border-accent transition-all duration-500">
                        <BsGithub className="text-white text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((projects, index) => {
                return (
                  <SwiperSlide className="w-full" key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-[48px]">
                      {/* overlay */}
                      <div className="absolute top-0 w-full h-full bg-black/10 z-10 rounded-[48px]"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover rounded-[48px]"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-none border-2 border-accent text-accent hover:bg-accent hover:text-white xl:border-none xl:bg-accent xl:hover:text-primary xl:hover:bg-accent-hover xl:text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-[15px] mx-5 transition-all duration-500"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

{
  /* 
    PLACE: Left off at 2:39:54
    LINK: https://youtu.be/dImgZ_AH7uA?si=RoqTE7NTQ-MsvKx5&t=9594
    */
}
