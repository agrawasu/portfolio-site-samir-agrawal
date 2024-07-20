"use client";

import { FaHtml5, FaCss3, FaJs, FaPython, FaJava } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad blanditiis sint, numquam possimus suscipit ducimus.",
  items: [
    {
      company: "Company 1",
      position: "Position title",
      duration: "Duration",
    },
    {
      company: "Company 2",
      position: "Position title",
      duration: "Duration",
    },
    {
      company: "Company 3",
      position: "Position title",
      duration: "Duration",
    },
    {
      company: "Company 4",
      position: "Position title",
      duration: "Duration",
    },
    {
      company: "Company 5",
      position: "Position title",
      duration: "Duration",
    },
    {
      company: "Company 6",
      position: "Position title",
      duration: "Duration",
    },
    {
      company: "Company 7",
      position: "Position title",
      duration: "Duration",
    },
    {
      company: "Company 8",
      position: "Position title",
      duration: "Duration",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad blanditiis sint, numquam possimus suscipit ducimus.",
  items: [
    {
      institution: "School 1",
      degree: "Degree title",
      duration: "XXXX - XXXX",
    },
    {
      institution: "School 2",
      degree: "Degree title",
      duration: "XXXX - XXXX",
    },
    {
      institution: "School 3",
      degree: "Degree title",
      duration: "XXXX - XXXX",
    },
    {
      institution: "School 4",
      degree: "Degree title",
      duration: "XXXX - XXXX",
    },
    {
      institution: "School 5",
      degree: "Degree title",
      duration: "XXXX - XXXX",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad blanditiis sint, numquam possimus suscipit ducimus.",
  skillsList: [
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind Css",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
    {
      icon: <FaPython />,
      name: "Filler",
    },
  ],
};

// libraries data
const libraries = {
  title: "My Skills",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad blanditiis sint, numquam possimus suscipit ducimus.",
  librariesList: [
    {
      name: "Pandas",
    },
    {
      name: "NumPy",
    },
    {
      name: "Tensorflow",
    },
    {
      name: "Keras",
    },
    {
      name: "PyTorch",
    },
    {
      name: "Matplotlib",
    },
    {
      name: "Scikit-Learn",
    },
    {
      name: "Scikit-Image",
    },
    {
      name: "Pillow",
    },
    {
      name: "OpenCV",
    },
    {
      name: "YOLO",
    },
  ],
};

// about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad blanditiis sint, numquam possimus suscipit ducimus.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "My Name",
    },
    {
      fieldName: "Phone",
      fieldValue: "My Phone",
    },
    {
      fieldName: "Experience",
      fieldValue: "My Experience",
    },
    {
      fieldName: "Email",
      fieldValue: "My Email",
    },
    {
      fieldName: "Address",
      fieldValue: "My Address",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className=" text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-bold">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className=" text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-bold">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills and libraries */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillsList.map((skills, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-secondary rounded-xl flex justify-center items-center group">
                              <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                {skills.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skills.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* horizontal line */}
              <hr className="my-[30px]" />

              {/* python libraries */}
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">Python Libraries</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] mb-[30px]">
                  {libraries.librariesList.map((libraries, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="px-5 group text-white/60">
                              <div className="group-hover:text-accent transition-all duration-300">
                                {libraries.name}
                              </div>
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        className="flex items-center justify-center xl:justify-start gap-4"
                        key={index}
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

{
  /* 
    PLACE: Left off at 2:12:32
    LINK: https://youtu.be/dImgZ_AH7uA?si=1tV6FWU7rcy2TC9j&t=7952
    */
}
