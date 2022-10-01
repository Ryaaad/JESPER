import NasaAbout from "../../assets/NasaAbout.webp";
const About1 = () => {
    return ( 
        <div id="About1" className="flex lgm:pl-[5rem] pt-[100px] lgm:gap-24 lgm:justify-end flex-wrap-reverse lgm:flex-nowrap
         items-center ">
        <div id="text"  className='text-white flex flex-col gap-6  w-[60%]  lg:w-[100vw] lg:p-2 ' >
       
    <h1 className='text-8xl  tracking-[2px] italic font-[900] lg:text-5xl'>ABOUT
    <strong className='text-[rgb(203,159,43)]  ' > OUR TEAM</strong> </h1>
            <p className='  lg:min-w-[400px] sm:min-w-[250px] ' >WWe are a bunch of friends connected by
love for FPS games. It all started in Benjamin's  basement, the only safe spot while skipping classes.They looked down 
upon our gaming habits, but hey,look at us now.</p>
        </div>
        <img src={NasaAbout} className=" h-[90vh] lg:h-[136vh] lgm:max-w-[500px]  object-cover"  />
       
    </div>

     );
}
 
export default About1;