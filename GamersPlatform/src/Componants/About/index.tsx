import NasaAbout from "../../assets/NasaAbout.webp";
import Newsletter from "../shared/Newsletter";
import Men1 from "../../assets/Men1.webp"
import Men2 from "../../assets/Men2.webp"
import FatWomen from "../../assets/FatWomen.webp"
const About = () => {
    return (  
        <> 
         <div className="flex lgm:pl-[5rem] pt-[100px] lgm:gap-24 lgm:justify-end flex-wrap-reverse lgm:flex-nowrap items-center ">
          <div id="text"  className='text-white flex flex-col gap-6  w-[60%]  lg:w-[100vw] lg:p-2 ' >
          <h1 className='text-8xl  tracking-[2px] italic font-[900] lg:text-5xl'>ABOUT <strong className='text-[rgb(203,159,43)]  '> OUR TEAM</strong> </h1>
            <p className='  lg:min-w-[400px] sm:min-w-[250px] ' >We are a bunch of friends connected by love for FPS games. It all started in Benjamin's  basement, the only safe spot while skipping classes.They 
            looked down upon our gaming habits, but hey,look at us now.</p>
         </div>
         <img src={NasaAbout} className="h-[90vh] lg:h-[136vh] lgm:max-w-[500px]  object-cover"  />
         </div>
         <div  className=" flex lgm:justify-center p-10 text-white items-center gap-24 lg:flex-wrap " >
           <div> <img src={Men1}  className=" lgm:max-w-[600px] lgm:min-w-[500px]" /></div>
                <div id="text" className="flex flex-col gap-4  ">
                   <h2  className="text-6xl italic font-[900]">BENJAMIN  <strong className='text-[rgb(203,159,43)] ' >  EVANS </strong>  </h2>
                  <p className="lgm:max-w-[70%]" >I guess gaming in your mothers basement can bring joy into your life? This and the fact that I have a better aim than Tanya.</p>
           </div> 
         </div>
         <div  className="flex lgm:justify-center p-10 text-white items-center gap-24 lg:flex-wrap-reverse bg-[#111523] " >
               <div id="text" className="flex flex-col gap-4 ">
                  <h2  className="text-6xl italic font-[900]">JEREMY  <strong className='text-[rgb(203,159,43)] ' >  CROW </strong>   </h2>
                  <p  className="lgm:max-w-[70%]" >Weird mods for games? Bring it on! I love the creativity of the gaming community, but sometimes it gives me nightmares.</p>
                </div>
                <div> <img src={Men2}  className="lgm:max-w-[600px] lgm:min-w-[500px]" /></div> 
        </div>
        <div  className=" flex lgm:justify-center p-10 text-white items-center gap-24 lg:flex-wrap " >
          <div> <img src={FatWomen}  className=" lgm:max-w-[600px] lgm:min-w-[500px]" /></div>
           <div id="text" className="flex flex-col gap-4  ">
             <h2  className="text-6xl italic font-[900]">TANYA  <strong className='text-[rgb(203,159,43)] ' >  COOPER </strong>   </h2>
          <p className="lgm:max-w-[70%]" >I have been trying to imitate a male voice for 6 years to prevent my inbox from flooding with messages from boys. Also - I have a better aim than Ben. </p>
           </div> 
        </div>
        <Newsletter></Newsletter>
       </>
    );
}
 
export default About;