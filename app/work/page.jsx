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
 
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Mobile",
    title: "CONTOURI FYDI",
    description: "Android app, taximeter provides live",
    stack: [{ name: "Kotlin" }, { name: "Google Maps API" }, { name: "Retrofit" }],
    image: "/assets/work/contouri-fydi.png",
    live: "",
    github: "https://github.com/Yasser-JD/Conteuri-FYDI--My-Taximeter-.git",
  },
  {
    num: "02",
    category: "Web",
    title: "PORTFOLIO",
    description: "personel Portfolio website ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }, { name: "Next.js" }],
    image: "/assets/work/portfolio.png",
    live: "",
    github: "https://github.com/Yasser-JD/Portfolio.git",
  },
  {
    num: "03",
    category: "Mobile",
    title: "Y MOVIES",
    description: "hfbewh fbheb  fkbrhubr eguhrke bgfur ebgour eqbgu",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Mobile",
    title: "project 1",
    description: "hfbewh fbheb  fkbrhubr eguhrke bgfur ebgour eqbgu",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handelSlideChange =(swiper) =>{
    //get current slide index
    const currentIndex = swiper.activeIndex
    // update project state based on current dlide index
    setProject(projects[currentIndex])
  }
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:'easeIn'}}} 
     className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              {/* project category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              {/* project description*/}
<p className="text-white/60">{project.description}</p>
              {/* stack*/}
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return <li key={index} className="text-xl text-accent">{item.name}
                  {/* remove last comma*/}
                  {index !== project.stack.length -1 && ","}</li>
                })}
              </ul>
                {/* border*/}
                <div className="border border-white/20"></div>
                {/* buttons*/}
                <div className="flex items-center gap-4">
                {/* live project button*/}
                  <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      <TooltipContent>
                        <p>live project</p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider> 
                </Link>
                {/* github project button*/}
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider> 
                </Link>
                </div>

            </div>
          </div>
          <div className="w-full  xl:w-[50%] ">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handelSlideChange}>
              {projects.map((project,index)=>{
                return <SwiperSlide key={index} className="w-full ">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  {/*overlay*/}
                  <div className="absolute top-0 buttom-0 w-full h-full bg-black/10 z10"></div>
                  {/*image*/}
                  <div className="relative w-full h-full">
                    <Image src={project.image} alt="img" fill className="object-cover" />
                  </div>
                  </div>
                </SwiperSlide>;
              
              })}
              {/*slider button */}
              <WorkSliderBtns btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" 
              containerStyles="flex gap-2 absolute right-0 buttom-[calc(50%_-_22px)] xl:bottom-0 z-30 w-full justify-between xl:w-max xl:justify-none" />
            </Swiper>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Work;
