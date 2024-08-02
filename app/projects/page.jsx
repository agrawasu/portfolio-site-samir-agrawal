"use client";

import {easeIn, motion} from "framer-motion";
import React, {useRef, useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowDownRight, BsCheck2, BsX, BsGithub} from "react-icons/bs";

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
        category: "Translation using API",
        title: "Text File Translator",
        description:
            "Responding to a need I came across while doing Moderation work for DDraceNetwork KoG (can be seen in my experience tab in the Resume section), I created a program using Python that would allow me to input a text file that contains chat logs from a server instance in-game. Due to the large majority of the player base being non-English speakers, understanding the logs became a hassle. To combat this, I built this program that allows me to use the DeepL API for machine translation of any language that is detected within the text file and translates it to any language the user chooses - in my case, English (EN-US).",
        builtWith: [
            {name: "Python"},
            {name: "os"},
            {name: "json"},
            {name: "DeepL API"},
        ],
        image: "/assets/projects/texttranslator.png",
        live: "",
        github: "https://github.com/agrawasu/text-translator",
    },
    {
        num: "02",
        category: "Encryption",
        title: "Password Manager using Staganography",
        description:
            "Taking inspiration from a popular twitch streamer and well-known programmer, Pirate Software, I looked into what it would take to build a program in Python that would allow me to take any filetype, in this case PNG, and use steganography to embed a password in the pixels of the image. The program uses the LSB, which takes the least significant bits of pixel values and modifies them to store data. An example of this would be taking the last few digits of an 8-bit binary number and alters them to store the password data. The password is also encrypted using the Fernet encryption scheme, which further secures the password. This was a necessary step to ensure no one could replicate this password by using the same image. The next step of the project is to figure out a way to allow me to drag and drop the image into a password field directly on the browser rather than decrypting it in the code and pasting the output to the password field.",
        builtWith: [
            {name: "Python"},
            {name: "Pillow"},
            {name: "NumPy"},
            {name: "cyptography"},
            {name: "os"},
            {name: "Pycharm"},
        ],
        image: "/assets/projects/passwordmanager.png",
        live: "",
        github: "https://github.com/agrawasu/steganography-password-manager",
    },
    {
        num: "03",
        category: "Data Analytics",
        title: "House Pricing Predictions",
        description:
            "This project was part of a guided project in which we were instructed to download a dataset and read it into a dataframe using Pandas. Then, a custom function to plot the predictions (see picture to the right) was created utilizing NumPy and Matplotlib. The data is then cleaned and normalized and then the train and test sets were created. After this, the model is created to have two hidden layers and one output with 10 neurons acting as the input. The model is compiled with the Mean Squared Error loss function and the Adam optimizer. Finally, the model gets trained and tested, and then predictions are made and plotted on a chart.",
        builtWith: [
            {name: "TensorFlow"},
            {name: "Keras"},
            {name: "Pandas"},
            {name: "NumPy"},
            {name: "Matplotlib"},
            {name: "Scikit-Learn"},
        ],
        image: "/assets/projects/housepricing.png",
        live: "",
        github: "https://github.com/agrawasu/house-pricing-predictor",
    },
    {
        num: "04",
        category: "Web Development",
        title: "Portfolio Site",
        description:
            "Using a video to familiarize myself with NextJS and Tailwind CSS, I built a very responsive and modern site to display my accomplishments and experience to be presented directly to employers who are curious about what I have done. Yes, I built this site from scratch! While the foundation of the site was built following a guide, many components have been altered to fit my personal desires and show off information that I wish to show. The site is currently deployed on Netlify and is stored in a Github repository, both of which are linked below.",
        builtWith: [
            {name: "NextJS"},
            {name: "Tailwind CSS"},
            {name: "React"},
            {name: "JavaScript"},
            {name: "HTML"},
            {name: "CSS"},
            {name: "Bootstrap"},
            {name: "Framer"},
        ],
        image: "/assets/projects/portfolio.png",
        live: "https://samir-agrawal-portfolio.netlify.app/",
        github: "https://github.com/agrawasu/portfolio-site-samir-agrawal",
    },
    {
        num: "05",
        category: "Data Analytics",
        title: "NYC Crash Reports",
        description:
            "Following a guided project on Coursera, I built a data web app using Python and the other libraries listed below. The purpose of this web app is to display motor vehicle collision data in New York City in a visually appealing way. This is important in Data Analytics as dashboards must be made such that a client can consume and understand the data.",
        builtWith: [
            {name: "Python"},
            {name: "Pandas"},
            {name: "Numpy"},
            {name: "Streamlit"},
            {name: "PyDeck"},
            {name: "Plotly"},
        ],
        image: "/assets/projects/crashtracker.png",
        live: "https://crash-report-nyc.streamlit.app/",
        github: "https://github.com/agrawasu/data-web-app-python",
    },
];

const Projects = () => {
    const [project, setProject] = useState(projects[0]);
    const [liveHovering, setLiveHovering] = useState(false);
    const [githubHovering, setGithubHovering] = useState(false);
    const swiperRef = useRef(null);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
    };

    const handleSwiperInit = (swiper) => {
        swiperRef.current = swiper;
        console.log(swiperRef.current);
    };

    const isFirstSlide = swiperRef.current?.activeIndex === 0;
    const isLastSlide = swiperRef.current?.activeIndex === projects.length - 1;

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div
                        className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none group">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div
                                className="text-8xl leading-none font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">
                                {project.num}
                            </div>

                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} {/* project */}
                            </h2>

                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>

                            {/* built with */}
                            <ul className="flex flex-wrap gap-4">
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
                            <div className="flex items-center gap-4 pb-[30px]">
                                {/* live project button */}
                                <Link href={project.live} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                className={`w-[70px] h-[70px] rounded-full border flex justify-center items-center ${
                                                    liveHovering
                                                        ? project.live
                                                            ? "hover:bg-trinary border-trinary"
                                                            : "hover:bg-accent border-accent cursor-not-allowed"
                                                        : "bg-none border-white"
                                                } transition-all duration-500`}
                                                onMouseEnter={() => {
                                                    setLiveHovering(true);
                                                }}
                                                onMouseLeave={() => {
                                                    setLiveHovering(false);
                                                }}
                                            >
                                                {liveHovering ? (
                                                    project.live ? (
                                                        <BsCheck2 className="text-white text-3xl"/>
                                                    ) : (
                                                        <BsX className="text-white text-4xl"/>
                                                    )
                                                ) : (
                                                    <BsArrowDownRight className="text-white text-3xl"/>
                                                )}
                                            </TooltipTrigger>
                                            <TooltipContent
                                                className="max-w-[32ch] bg-secondary border-none text-white/60">
                                                {project.live ? (
                                                    <p>Live project</p>
                                                ) : (
                                                    <p>
                                                        This project has not been deployed. If there is a Github
                                                        repository, please open the project there and follow the
                                                        instructions in the README.md file to see how to run it
                                                    </p>
                                                )}
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github project button */}
                                <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                className={`w-[70px] h-[70px] rounded-full border flex justify-center items-center ${
                                                    githubHovering
                                                        ? project.github
                                                            ? "hover:bg-trinary border-trinary"
                                                            : "hover:bg-accent border-accent"
                                                        : "bg-none border-white"
                                                } transition-all duration-500`}
                                                onMouseEnter={() => {
                                                    setGithubHovering(true);
                                                }}
                                                onMouseLeave={() => {
                                                    setGithubHovering(false);
                                                }}
                                            >
                                                {githubHovering ? (
                                                    project.github ? (
                                                        <BsGithub className="text-white text-3xl"/>
                                                    ) : (
                                                        <BsX className="text-white text-4xl"/>
                                                    )
                                                ) : (
                                                    <BsGithub className="text-white text-3xl"/>
                                                )}
                                            </TooltipTrigger>
                                            <TooltipContent
                                                className="max-w-[32ch] bg-secondary border-none text-white/60">
                                                {project.github ? (
                                                    <p>Github repository</p>
                                                ) : (
                                                    <p>There is no Github repository available for this project</p>
                                                )}
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
                            onSwiper={handleSwiperInit}
                        >
                            {projects.map((projects, index) => {
                                return (
                                    <SwiperSlide className="w-full" key={index}>
                                        <div
                                            className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-[48px]">
                                            {/* overlay */}
                                            <div
                                                className="absolute top-0 w-full h-full bg-black/10 z-10 rounded-[48px]"></div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={projects.image}
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
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
