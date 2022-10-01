import { motion } from "framer-motion";
import { useState } from "react";
 


const Box2 = () => {
    const [animate,setAnimate]=useState(false);
    return( 
      <div id="Landing1" className=' bg-white pl-5 pb-[10rem] '>
      <motion.div id="box" className="w-[10rem] h-[10rem] bg-[aquamarine] flex flex-col 
      items-center"
      drag 
      dragConstraints={{
     right:20,
     left:20,
     top:5,
     bottom:4
      }}
      whileHover={{
        scale:1.1
      }}
      whileTap={{
        scale:0.9
      }}
      >
      </motion.div>
      </div>);
}
 
export default Box2;