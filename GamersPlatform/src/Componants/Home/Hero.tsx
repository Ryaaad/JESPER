import Soldat from '../../assets/Soldat.webp'
const Hero = () => {
    return ( 
        <div id="hero" className="flex pt-[100px] lgm:gap-24 w-full lgm:justify-end flex-wrap
         lgm:flex-nowrap items-center lg:mb-10  ">
            <img src={Soldat} className=" lgm:max-w-[700px]"  />
            <div id="text"  className='text-white flex flex-col gap-6
            w-[50%] lg:w-[100%] lg:justify-center lg:px-20 lg:py-10 ' >
        <h1 className='text-8xl max-w-[70%] font-["Fugaz_One",cursive] lg:text-7xl'>TEAM 
        <strong className='text-[rgb(203,159,43)] max-w-[90%] ' > JESPER </strong> </h1>
                <p className='  max-w-[70%]  sm:min-w-[250px] mx-3 ' >We are a gaming team, owning 
                anyone and anything in our way in the field of FPS shooter games. Join us in our way 
                to glory!</p>
                <button className=' mt-7 lg:translate-x-[-10%] py-2 font-[300] text-black 
                bg-[#ffc632] w-[250px]  hover:bg-white ' >WATCH OUR STREAM</button>
            </div>
        </div>
     );
}
 
export default Hero;