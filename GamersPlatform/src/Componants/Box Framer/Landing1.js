import { motion } from "framer-motion"
import { useState } from "react";
const Box1 = () => {
   const [animate,setAnimate]=useState(false);
    return ( 
      <div id="Landing1" className=' bg-white pl-5 pt-20 mt-[40rem] pb-[10rem] '>
      <motion.div id="box" className="w-[10rem] h-[10rem] bg-[aquamarine] flex flex-col 
      items-center"
      animate={{
         x:animate ? 1000 : 0,
         opacity:animate ? 1 : 0.5,
       rotate:animate ? 360 : 0,
      }}
      initial={{
         opacity:0.5,
      }}
      transition={{
         type:"spring",
         stiffness:60,
         damping:5
      }} onClick={()=>setAnimate(!animate)}
      >
      </motion.div>
      </div>
     );
}
 
export default Box1;