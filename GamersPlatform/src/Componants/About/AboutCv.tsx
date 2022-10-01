import{img } from "./images.js";

interface props{
   a:number
}
const AboutCv:React.FC<props> = (props) => {
    const a=props.a;
    return ( 
<div>
{ a===0 &&   <div  className=" flex lgm:justify-center p-10 text-white items-center gap-24 lg:flex-wrap " >
<div> <img src={img[0]}  className=" lgm:max-w-[600px] lgm:min-w-[500px]" /></div>
<div id="text" className="flex flex-col gap-4  ">
  <h2  className="text-6xl italic font-[900]">BENJAMIN
   <strong className='text-[rgb(203,159,43)] ' >  EVANS </strong> 
   </h2>
   <p className="lgm:max-w-[70%]" >I guess gaming in your mothers basement can bring joy into your life? This and 
   the fact that I have a better aim than Tanya.</p>
   </div> 
</div>
}

{ a===1 &&   <div  className="flex lgm:justify-center p-10 text-white items-center gap-24 lg:flex-wrap-reverse bg-[#111523] " >
<div id="text" className="flex flex-col gap-4 ">
  <h2  className="text-6xl italic font-[900]">JEREMY
   <strong className='text-[rgb(203,159,43)] ' >  CROW </strong> 
   </h2>
   <p  className="lgm:max-w-[70%]" >Weird mods for games? Bring it on!
I love the creativity of the gaming community, but sometimes it gives me nightmares.</p>
   </div>
   <div> <img src={img[1]}  className="lgm:max-w-[600px] lgm:min-w-[500px]" /></div> 
</div>
}

{ a===2 &&   <div  className=" flex lgm:justify-center p-10 text-white items-center gap-24 lg:flex-wrap " >
<div> <img src={img[2]}  className=" lgm:max-w-[600px] lgm:min-w-[500px]" /></div>
<div id="text" className="flex flex-col gap-4  ">
  <h2  className="text-6xl italic font-[900]">TANYA 
   <strong className='text-[rgb(203,159,43)] ' >  COOPER </strong> 
   </h2>
   <p className="lgm:max-w-[70%]" >I have been trying to imitate a male voice for 6 years to prevent my inbox from flooding with 
   messages from boys. Also - I have a better aim than Ben. </p>
   </div> 
</div>
}
</div>
     );
}
 
export default AboutCv;