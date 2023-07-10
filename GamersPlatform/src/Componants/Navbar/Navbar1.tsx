import { useState } from "react";
import { motion , AnimatePresence } from "framer-motion";
import Home0 from "../Home/Home";
import About0 from "../About";
import Footer from "../shared/footer"
const Navbar1 = () => { 
  const ChosenRoute=(a:number)=>{
    switch (a){
case 1 : 
    setAbout(false);
    setContact(false);
    setStream(false);
    break;
case 2 : 
    setHome(false);
    setContact(false);
    setStream(false);
    break;
 case 3 : 
    setAbout(false);
    setContact(false);
    setHome(false);
    break;
case 4 : 
    setAbout(false);
    setHome(false);
    setStream(false);
    break;
    }
  }
   const [Home, setHome] = useState(true);
    const [About, setAbout] = useState(false);
    const [Stream, setStream] = useState(false);
    const [Contact, setContact] = useState(false);
    const variant={
    A: {y:-100,},
    F:{y:-0,  transition:{ delay:.2, staggerChildren:.2, when:"beforeChildren",} },
    }
    const variantCh={ A: {x:-10, opacity:0 , scale:0.8 },F:{x:-0, opacity:1 , scale:1 },}
   const [Lg, setLg] = useState(false);
    return (
    <div className="max-w-full " >
            <motion.div className="flex shadow z-10 justify-between
         fixed w-[100vw] items-center h-[90px] text-white px-12 "   
         variants={variant}
         animate="F" initial="A"
         >
 <motion.h1 id="logo" className="text-4xl tracking-[2px] italic font-bold" variants={variantCh} >JESPER</motion.h1>
        <div id="links"  className="lg:hidden" >
                <ul className="flex gap-10  ">
                    <motion.li  className={` hover:text-[#cb9f2b] hover:border-b hover:border-solid 
             cursor-pointer hover:border-[#cb9f2b] tracking-[2px] font-medium 
        ${Home ? 'text-[#cb9f2b] border-b border-solid border-[#cb9f2b]' : 'text-white border-none' }  `}
                    onClick={()=>{setHome(true); ChosenRoute(1)} } variants={variantCh}   > HOME </motion.li>
                     <motion.li className={` hover:text-[#cb9f2b] hover:border-b hover:border-solid 
              cursor-pointer hover:border-[#cb9f2b] tracking-[2px] font-medium 
        ${About ? 'text-[#cb9f2b] border-b border-solid border-[#cb9f2b]' : 'text-white border-none' }  `}
                    onClick={()=>{setAbout(true); ChosenRoute(2)}} variants={variantCh} > ABOUT </motion.li>
                     <motion.li  className={` hover:text-[#cb9f2b] hover:border-b hover:border-solid 
         cursor-pointer hover:border-[#cb9f2b] tracking-[2px] font-medium 
        ${Stream ? 'text-[#cb9f2b] border-b border-solid border-[#cb9f2b]' : 'text-white border-none' }  `}
                    onClick={()=>{setStream(true); ChosenRoute(3)}} variants={variantCh} > STEARMS </motion.li>
                     <motion.li  className={` hover:text-[#cb9f2b] hover:border-b hover:border-solid 
             cursor-pointer hover:border-[#cb9f2b] tracking-[2px] font-medium 
        ${Contact ? 'text-[#cb9f2b] border-b border-solid border-[#cb9f2b]' : 'text-white border-none' }  `}
                    onClick={()=>{setContact(true); ChosenRoute(4)}} variants={variantCh} > CONTACT </motion.li>
                </ul>
        </div> 
        <div id="burger"  className=" flex flex-col lgm:hidden items-end cursor-pointer " 
        onClick={()=>{setLg(!Lg)}} >
            <span  className="block w-6 h-[2px]  bg-white " ></span>
            <span  className="block w-4 h-[2px] my-1 bg-white duration-500 " ></span>
            <span  className="block w-6 h-[2px] bg-white " ></span>
        </div>
        { Lg &&  <div className="absolute top-[100%] right-[10%]  lgm:hidden  ">
                <ul className="flex flex-col gap-5 items-end  ">
                    <motion.li  className={` hover:text-[#cb9f2b] hover:border-b hover:border-solid 
             cursor-pointer hover:border-[#cb9f2b] tracking-[2px] font-medium  w-[max-content]
        ${Home ? 'text-[#cb9f2b] border-b border-solid border-[#cb9f2b]' : 'text-white border-none' }  `}
                    onClick={()=>{setHome(true); ChosenRoute(1)} } variants={variantCh}   > HOME </motion.li>
                     <motion.li className={` hover:text-[#cb9f2b] hover:border-b hover:border-solid 
              cursor-pointer hover:border-[#cb9f2b] tracking-[2px] font-medium 
        ${About ? 'text-[#cb9f2b] border-b border-solid border-[#cb9f2b]' : 'text-white border-none' }  `}
                    onClick={()=>{setAbout(true); ChosenRoute(2)}} variants={variantCh} > ABOUT </motion.li>
                     <motion.li  className={` hover:text-[#cb9f2b] hover:border-b hover:border-solid 
         cursor-pointer hover:border-[#cb9f2b] tracking-[2px] font-medium  w-[max-content]
        ${Stream ? 'text-[#cb9f2b] border-b border-solid border-[#cb9f2b]' : 'text-white border-none' }  `}
                    onClick={()=>{setStream(true); ChosenRoute(3)}} variants={variantCh} > STEARMS </motion.li>
                     <motion.li  className={` hover:text-[#cb9f2b] hover:border-b hover:border-solid 
             cursor-pointer hover:border-[#cb9f2b] tracking-[2px] font-medium  w-[max-content]
        ${Contact ? 'text-[#cb9f2b] border-b border-solid border-[#cb9f2b]' : 'text-white border-none' }  `}
                    onClick={()=>{setContact(true); ChosenRoute(4)}} variants={variantCh} > CONTACT </motion.li>
                </ul>
            </div> }
        </motion.div>
        <AnimatePresence>
        {Home && 
    <motion.div animate={{opacity:1 , x:0, transition:{delay:2,duration:1}}} initial={{opacity:0.5 , x:-1000}} 
    exit={{  x:100,opacity:0  ,transition:{delay:.3,duration:.2}}}>
     <Home0></Home0></motion.div> }

     {About && 
    <motion.div animate={{opacity:1 , x:0, transition:{delay:2,duration:1}}} initial={{opacity:0.5 , x:-1000}} 
    exit={{  x:100,opacity:0  ,transition:{delay:.3,duration:.2}}}>
     <About0></About0></motion.div> }

     {Stream && 
    <motion.div animate={{opacity:1 , x:0, transition:{delay:.2,duration:1}}} initial={{opacity:0.5 , x:-1000}} 
    exit={{  x:100,opacity:0  ,transition:{delay:.3,duration:.2}}}>
     <About0></About0></motion.div> }

     {Contact && 
    <motion.div animate={{opacity:1 , x:0, transition:{delay:2,duration:1}}} initial={{opacity:0.5 , x:-1000}} 
    exit={{  x:100,opacity:0  ,transition:{delay:.3,duration:.2}}}>
     <About0></About0></motion.div> }
        </AnimatePresence>
      <Footer></Footer>
    </div>
  
     
     );
} 
 
export default Navbar1;
