import NasaAbout from "../../assets/images/About/NasaWomen.webp";
import Newsletter from "../shared/Newsletter";
import Men1 from "../../assets/images/About/Men.webp"
import Men2 from "../../assets/images/About/Korean.webp"
import FatWomen from "../../assets/images/About/FatWomen.webp"
import { BsInstagram,BsFacebook } from "react-icons/bs";
import {TiSocialTwitter} from "react-icons/ti";
const About = () => {
  return (  
   <> 
     <section className="flex flex-col-reverse gap-5 w-full items-center justify-end lg:gap-0 lg:flex-row px-5 pt-24 lg:px-32 xl:px-44 2xl:px-60 ">
          <div className='text-white flex flex-col gap-6 w-[65vw] sm:w-[40vw] md:w-[32vw] lg:w-[40vw] xl:w-[32vw] ' >
           <h1 className='font-["Fugaz_One",cursive] text-3xl sm:text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl tracking-wider'>ABOUT <strong className='text-[rgb(203,159,43)]'> OUR TEAM</strong></h1>
           <p className='xl:w-[30vw] xl:text-lg 2xl:text-xl'>We are a bunch of friends connected by love for FPS games. It all started in Benjamin's  basement, the only safe spot while skipping classes.They 
            looked down upon our gaming habits, but hey,look at us now.</p>
         </div>
         <img src={NasaAbout} className=" w-96 sm:max-w-[400px] md:max-w-[500px] lg:flex-1 lg:max-h-[600px] min-w-[35vw] xl:min-w-[30vw] xl:max-h-[550px] 2xl:h-[600px] "  />
     </section>
      
    <section className="flex w-full justify-between items-center border-y border-y-solid border-y-[#e9e9e9] mt-6 py-8 gap-6 flex-col lg:flex-row lg:gap-14 lg:mt-4 lg:py-10 xl:py-14 2xl:py-16 lg:px-32 xl:px-44 
    2xl:px-60 ">
          <img src={Men1} className="h-80 w-80 sm:w-[400px] sm:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] object-cover "  />
          <div className='text-white flex flex-col gap-2 w-80 sm:gap-3 sm:w-[384px] lg:w-[40vw] md:gap-4 xl:gap-6 xl:w-[40vw] 2xl:w-[30vw]' >
          <h1 className='font-["Fugaz_One",cursive] sm:text-2xl md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl '>BENJAMIN  <strong className='text-[rgb(203,159,43)] max-w-[90%] lg:block ' >EVANS </strong></h1>
            <p className='text-xs sm:text-sm md:text-base lg:max-w-[85%] xl:text-xl ' >I guess gaming in your mothers basement can bring joy into your life? This and the fact that I have a better aim than Tanya. </p>
            <div className="flex justify-start items-center gap-2 mt-2 sm:mt-4 sm:gap-8 text-sm sm:text-xl lg:text-2xl xl:text-3xl " > 
             <TiSocialTwitter className=" cursor-pointer hover:text-[#000000a2]  " ></TiSocialTwitter>
             <BsFacebook  className=" cursor-pointer hover:text-[#000000a2]  "></BsFacebook>
             <BsInstagram className=" cursor-pointer hover:text-[#000000a2] "></BsInstagram>
             </div>
        </div>
    </section>

    <section className="flex w-full bg-[#111523] justify-between items-center py-8 gap-6 flex-col lg:flex-row-reverse lg:py-10 xl:py-14 2xl:py-16 lg:px-32 xl:px-44 2xl:px-60 ">
           <img src={Men2} className="h-80 w-80 sm:w-[400px] sm:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] object-cover "  />
           <div className='text-white flex flex-col gap-2 w-80 sm:gap-3 sm:w-[384px] lg:w-[40vw] md:gap-4 xl:gap-6 xl:w-[40vw] 2xl:w-[30vw]' >
            <h1 className='font-["Fugaz_One",cursive] sm:text-2xl md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl '>JEREMY  <strong className='text-[rgb(203,159,43)] max-w-[90%] lg:block ' >CROW </strong></h1>
            <p className='text-xs sm:text-sm md:text-base lg:max-w-[85%] xl:text-xl ' >Weird mods for games? Bring it on! I love the creativity of the gaming community, but sometimes it gives me nightmares. </p>
            <div className="flex justify-start items-center gap-2 mt-2 sm:mt-4 sm:gap-8 text-sm sm:text-xl lg:text-2xl xl:text-3xl " > 
             <TiSocialTwitter className=" cursor-pointer hover:text-[#000000a2]  " ></TiSocialTwitter>
             <BsFacebook  className=" cursor-pointer hover:text-[#000000a2]  "></BsFacebook>
             <BsInstagram className=" cursor-pointer hover:text-[#000000a2] "></BsInstagram>
             </div>
        </div>
    </section>

    <section className="flex w-full justify-between items-center py-8 gap-6 flex-col lg:flex-row lg:py-10 lg:gap-16 xl:py-14 2xl:py-16 lg:px-32 xl:px-44 2xl:px-60 ">
           <img src={FatWomen} className="h-80 w-80 sm:w-[400px] sm:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] object-cover "  />
           <div className='text-white flex flex-col gap-2 w-80 sm:gap-3 sm:w-[384px] lg:w-[40vw] md:gap-4 xl:gap-6 xl:w-[40vw] 2xl:w-[30vw]' >
            <h1 className='font-["Fugaz_One",cursive] sm:text-2xl md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl '>TANYA  <strong className='text-[rgb(203,159,43)] max-w-[90%] lg:block ' >COOPER </strong></h1>
            <p className='text-xs sm:text-sm md:text-base lg:max-w-[85%] xl:text-xl ' >I have been trying to imitate a male voice for 6 years to prevent my inbox from flooding with messages from boys. Also - I have a better aim than Ben. </p>
            <div className="flex justify-start items-center gap-2 mt-2 sm:mt-4 sm:gap-8 text-sm sm:text-xl lg:text-2xl xl:text-3xl " > 
             <TiSocialTwitter className=" cursor-pointer hover:text-[#000000a2]  " ></TiSocialTwitter>
             <BsFacebook  className=" cursor-pointer hover:text-[#000000a2]  "></BsFacebook>
             <BsInstagram className=" cursor-pointer hover:text-[#000000a2] "></BsInstagram>
             </div>
        </div>
    </section>
        <Newsletter></Newsletter>
   </>
    );
}
 
export default About;