"use client";

import { motion } from "framer-motion";
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

const projects = [
  {
    num: "01",
    category: "Project category",
    title: "Project 01",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad blanditiis sint, numquam possimus suscipit ducimus.",
    stack: [{ name: "Stack 1" }, { name: "Stack 2" }, { name: "Stack 3" }],
    image: "/",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Project category",
    title: "Project 02",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad blanditiis sint, numquam possimus suscipit ducimus.",
    stack: [{ name: "Stack 1" }, { name: "Stack 2" }, { name: "Stack 3" }],
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
    stack: [{ name: "Stack 1" }, { name: "Stack 2" }, { name: "Stack 3" }],
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
    stack: [{ name: "Stack 1" }, { name: "Stack 2" }, { name: "Stack 3" }],
    image: "/",
    live: "",
    github: "",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} {/* project */}
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}

                      {/* remove last comma */}
                      {index !== project.stack.length - 1 && ","}
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
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12">
              {projects.map((projects, index) => {
                return <SwiperSlide key={index}>slide</SwiperSlide>;
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
