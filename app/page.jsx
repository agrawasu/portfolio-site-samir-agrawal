import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const about =
    "I am an IT student at the University of Cincinnati and I have a heavy interest in anything related to Artificial Intelligence and Machine Learning and I want to grow my knowledge in both of these fields as much as possible.";
  const intro = "Hello I'm";
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1JNLYFf8lLPrnfd_w7P5gArpCbgra1feO";

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Certified AI/ML Engineer</span>
            <h1 className="h1 mb-6">
              {intro} <br /> <span className="text-accent">Samir Agrawal</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">{about}</p>

            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href={resumeLink} download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2
                  transition-all duration-500"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base bg-none border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
