"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaCode,
  FaAndroid,
  FaDatabase,
} from "react-icons/fa";

import {
  SiKotlin,
  SiFlutter,
  SiSqlite,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about me data
const about = {
  title: "About me",
  description:
    "Hi! I'm Yassir, a passionate Android and web developer with expertise in Kotlin and modern web technologies. I specialize in creating functional mobile apps and dynamic web solutions, always aiming for excellent performance and user experience. I’m constantly improving my skills, diving into advanced programming concepts, and staying inspired by cutting-edge technologies like AI. Outside of coding, I enjoy fitness and personal growth. Let’s build something amazing together!",
  info: [
    {
      fieldName: "Name",
      filedValue: "Yassir JAAIDI",
    },
    {
      fieldName: "Phone",
      filedValue: "+212-7604-15528",
    },
    {
      fieldName: "Experience",
      filedValue: "1+ Years",
    },
    {
      fieldName: "LinkedIn",
      filedValue: "Yassir JAAIDI",
    },
    {
      fieldName: "Nationality",
      filedValue: "Moroccan",
    },
    {
      fieldName: "Email",
      filedValue: "yassirjaaidi.of@gmail.com",
    },
    {
      fieldName: "Freelance, InternShip, Job",
      filedValue: "Available",
    },
    {
      fieldName: "Languages",
      filedValue: "Arabic, French, English, Spanish",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I am currently building my skills through personal and academic projects in Android and web development. My work includes creating functional apps, as well as exploring dynamic web solutions. While I don’t have professional experience yet, I am eager to apply my knowledge, tackle real-world challenges, and grow as a developer in a professional setting.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Mobile App Developer",
      duration: "2023-Present",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I have a foundational academic background that complements my self-taught expertise. Alongside my studies, I’ve expanded my knowledge in Android and web development through online courses and practical projects. My hands-on approach has allowed me to deepen my understanding of programming concepts and modern development tools.",
  items: [
    {
      institution: "The City of Trades and Skills.",
      degree: "Technical specialiste in Digital Development.",
      duration: "2022 - present",
    },
    {
      institution: "The City of Trades and Skills.",
      degree: "Web Development.",
      duration: "2023",
    },
    {
      institution: "The City of Trades and Skills.",
      degree: "Mobile Application Development.",
      duration: "2024",
    },
    {
      institution: "Online Course Platform",
      degree: "Full Stack web Development Bootcamp.",
      duration: "2023",
    },
    {
      institution: "Online Course Platform",
      degree: "Mobile Development Bootcamp.",
      duration: "2024",
    },
    {
      institution: "Online Course Platform",
      degree: "Python",
      duration: "2023",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Proficient in Android and web development, with expertise in Kotlin, HTML/CSS, and modern tools like Android Studio and Git. Strong problem-solving abilities and a quick learner, constantly acquiring new skills to stay updated with industry trends.",
  skillsList: [
    {
      icon: <SiKotlin />,
      name: "Kotlin",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiFirebase />,
      name: "FireBase",
    },
    {
      icon: <FaAndroid />,
      name: "Android",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiMysql />,
      name: "My Sql",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextdotJs",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70hv] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            {/* about me */}
            <TabsContent value="about" className="w-full">
              abour me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
