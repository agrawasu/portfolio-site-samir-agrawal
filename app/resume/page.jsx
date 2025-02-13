"use client";

import { FaHtml5, FaCss3, FaJs, FaPython, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPowerbi, SiCsharp, SiMicrosoftsqlserver } from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Information regarding the most recent experiences below - as well as more information about me - is detailed on my resume, which can be found on my Home page.",
  items: [
    {
      company: "Real-Estate Investor",
      position: "Self-Employed",
      duration: "August 2024 - Current",
    },
    {
      company: "University of Cincinnati",
      position: "Information Technology EEP",
      duration: "May 2023 - August 2023",
    },
    {
      company: "University of Cincinnati",
      position: "Undergraduate Researcher",
      duration: "May 2022 - August 2022",
    },
    {
      company: "SSOE Group",
      position: "Student Intern",
      duration: "August 2021 - December 2021",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I am currently a remote student studying at the University of Cincinnati. I am majoring in Information Technology, focusing on a dual-track with both Data Technology and Game Development & Simulation. I have taken multiple certification courses in the area of AI/ML which can be found on the Certifications tab. Information below details my education. More information regarding my most recent education - GPA, relevant courses - is detailed on my resume, which can be found on my Home page.",
  items: [
    {
      institution: "University of Cincinnati",
      degree: "Information Technology",
      duration: "2020 - 2026",
    },
    {
      institution: "IBM | Coursera",
      degree: "IBM AI Engineering Professional Certificate",
      duration: "June 2024 - July 2024",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "The following skills are skills I have developed throughout the duration of my time at the University of Cincinnati, the certification courses I am taking, and projects I have worked on.",
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
      icon: <SiCsharp />,
      name: "C#",
    },
    {
      icon: <SiPowerbi />,
      name: "Microsoft PowerBI",
    },
    {
      icon: <TbBrandOffice />,
      name: "Microsoft Office 360",
    },
    {
      icon: <SiMicrosoftsqlserver />,
      name: "Microsoft SQL Server Management Studio",
    },
  ],
};

// libraries data
const libraries = {
  title: "My Skills",
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
    {
      name: "Django",
    },
    {
      name: "Requests",
    },
  ],
};

// about data
const about = {
  title: "About me",
  description:
    "As I am still a student, my experience may be limited. Rather than seeing this as a negative, it can be seen as a way of bringing fresh, new, innovative approaches to a vast sea of challenges.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Samir Agrawal",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 (614) 707 2103",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 year",
    },
    {
      fieldName: "Email",
      fieldValue: "agrawasu@mail.uc.edu",
    },
    {
      fieldName: "Address",
      fieldValue: "384 Silver Sage Lane, Saint Augustine, Florida 32095",
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
      className="min-h-[80vh] flex items-center justify-center py-12"
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
                <p className="text-sm max-w-[600px] text-white/60 mx-auto xl:mx-0">
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
                          <span className="text-sm text-accent">{item.duration}</span>
                          <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left font-bold">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <p className="text-sm text-white/60">{item.company}</p>
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
                <p className="text-sm max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="text-sm max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[650px] xl:h-[350px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillsList.map((skills, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={0}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-secondary rounded-xl flex justify-center items-center group">
                                <div className="text-5xl group-hover:text-accent group-hover:scale-[1.05] transition-all duration-300">
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

                  {/* horizontal line */}
                  <div className="border border-white/20 my-[30px]" />

                  {/* python libraries */}
                  <h3 className="text-2xl font-bold">Python Libraries</h3>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] mt-[30px]">
                    {libraries.librariesList.map((libraries, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="px-5 group text-white/60">
                                <div className="group-hover:text-accent group-hover:scale-[1.075] transition-all duration-300">
                                  {libraries.name}
                                </div>
                              </TooltipTrigger>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="text-sm max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        className="flex items-center justify-center xl:justify-start gap-4"
                        key={index}
                      >
                        <span className="text-sm text-white/60">{item.fieldName}</span>
                        <span className="text-md">{item.fieldValue}</span>
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
