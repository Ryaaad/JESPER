import { motion } from "framer-motion"
import { useState } from "react";

const Box3 = () => {
   
    const [animate,setAnimate]=useState(false);

    const BBvariant={ parent:{
        opacity:0,
      },
      parentF:{
        opacity:1,
      }}
    const Bvariant={
        parent:{
            x:-700,
        },
        parentF:{
            x:0,
            scale:1.1,
            transition:{
                delay:.4,
                staggerChildren:.2,
                when:"beforeChildren",
             
            }
        },
    }
    return( 
      <div className='bg-white pl-5 pb-[10rem] '>
      
      <motion.div id="box" className="w-[10rem] h-[10rem] bg-[aquamarine] flex flex-col 
      items-center justify-center gap-2 "
      variants={Bvariant}
      animate="parentF" initial="parent"
      >
      <motion.div className="bg-white h-7 w-7" 
      variants={BBvariant}></motion.div>   
        {/* // children Li fihom motion animate and transition t3hom ykono kima ta3 lpere mais 
       variant mykonch kifkif */}
      <motion.div className="bg-white h-7 w-7" 
      variants={BBvariant}
       ></motion.div>
      <motion.div className="bg-white h-7 w-7"  variants={BBvariant}
      ></motion.div>

      </motion.div>
      </div>);
}
 
export default Box3;