"use client"

import { Button } from "@/components/ui/button";
import { Input } from "postcss/lib/postcss";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@radix-ui/react-select";


import {FaPhoneAlt,FaEnvelope,FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa'
const info =[
  {
    icon:<FaPhoneAlt/>,
    title: 'Phone',
    description: '(+212) 770-033366',
  },
  {
    icon:<FaEnvelope/>,
    title: 'Email',
    description: 'yasirjaaidi@gmail.com',
  },
  {
    icon:<FaMapMarkerAlt/>,
    title: 'Adrdess',
    description: 'LOT RIAD RUE HODA RABAt'
  },
];
import {motion} from "framer-motion"



const Contact = () => {
  const inputstyle="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none";
  const textareaStyle = "flex min-h-[80px] w-full rounded-md border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
  return <motion.section initial={{opacity:0}} 
  animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:'easeIn'}}} 
  className="py-6">
<div className="container mx-auto">
  <div className="flex flex-col xl:flex-row gap-[30px]">
{/* form */}
<div className="xl:h-[54%] order-2 xl:order-none">
  <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"> 
    <h3 className="text-4xl text-accent">let's work together</h3>
 <p className="text-white/60">enter your informations and send me your request</p>
  {/* input */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <input className={inputstyle} type="text" placeholder="Firstname" />
  <input className={inputstyle} type="text" placeholder="Lastname" />
  <input className={inputstyle} type="text" placeholder="Email" />
  <input className={inputstyle} type="text" placeholder="Phone Number" />
 </div>
 
{/* textarea */}
<Textarea className={textareaStyle} placeholder="how can i help you."></Textarea>
 {/* btn */}
 <Button size="md" className="max-w-40">Send Message</Button>
  </form>
</div>
{/* info */}
  </div>
</div>
  </motion.section>;
};

export default Contact;
