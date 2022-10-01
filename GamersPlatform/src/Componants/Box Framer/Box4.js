import { motion } from "framer-motion"
import { useState } from "react";


const Box4 = () => {
    return ( 
        <div id="Landing1" className='bg-white pl-5 pb-[10rem] '>
            <motion.div id="box" className="w-[10rem] h-[10rem] rounded-[20%] 
            bg-[aquamarine]"
            animate={{
                scale:[1, 1.4 ,1.4 , 1 , 1],
                borderRadius:["20%","20%","50%","50%","20%"],
                rotate:[0,0,270,270,0]
            }}
            transition={{
                duration:2
            }}
            >

            </motion.div>
        </div>
     );
}
 
export default Box4;