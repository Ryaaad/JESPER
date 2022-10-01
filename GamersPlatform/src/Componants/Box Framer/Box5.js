import { motion , useAnimation } from "framer-motion"
import { useState } from "react";
const Box5 = () => {
    const control=useAnimation();
    return ( 
        <div className='bg-white pl-5 pb-[10rem] '>
       
        <div className="flex gap-5 mb-4">
            <button className=" bg-blue-500 p-3 text-white " onClick={()=>control.start({
                x:1500,
                transition:{
                    duration:2
                }
            }) }  >left</button>
            <button className=" bg-blue-500 p-3 text-white"
             onClick={()=>control.start({
                x:-1500,
                transition:{
                    duration:2
                }
            }) } >right</button>
            <button className=" bg-blue-500  p-3 text-white "
             onClick={()=>control.start({
               borderRadius:"50%",
               x:50,
                transition:{
                    duration:2
                }
            }) } >circle</button>
            <button className=" bg-blue-500 p-3 text-white "  onClick={()=>control.start({
                borderRadius:"0%",
                x:150,
                transition:{
                    duration:2
                }
            }) } >square</button>
            <button className=" bg-blue-500 p-3 text-white "
             onClick={()=>control.stop() } >stop</button>
        </div>
        <motion.div id="box" className="w-[10rem] h-[10rem] bg-[aquamarine]"
         animate={control}>

        </motion.div>
        </div>
     );
}
 
export default Box5;