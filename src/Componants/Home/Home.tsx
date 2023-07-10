import Newsletter from '../shared/Newsletter';
import Soldat from '../../assets/images/home/Soldat.webp'
import Game from '../../assets/images/home/Game.webp'
import Nasa from '../../assets/images/home/Nasa.webp'
import YellowButton from '../shared/button';
const Home = () => {
    return ( 
     <>
        <section className="flex flex-col gap-5 w-full items-center justify-end lg:gap-0 lg:flex-row px-5 pt-28 xl:px-16 xl:pt-36 2xl:px-40 ">
          <img src={Soldat} className=" w-96 sm:max-w-[400px] md:max-w-[500px] lg:flex-1 lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] "  />
          <div className='text-white flex flex-col gap-6 w-[65vw] sm:w-[40vw] md:w-[35vw] lg:pr-16' >
           <h1 className='font-["Fugaz_One",cursive] text-3xl sm:text-4xl md:text-5xl xl:w-[30vw] xl:text-7xl 2xl:text-8xl tracking-wider'>TEAM <strong className='text-[rgb(203,159,43)]'> JESPER</strong></h1>
           <p className='xl:w-[30vw] xl:text-lg 2xl:text-xl'>We are a gaming team, owning  anyone and anything in our way in the field of FPS shooter games. Join us in our way  to glory!</p>
           <YellowButton content='WATCH OUR STREAM' ></YellowButton>
         </div>
        </section>
        <section className="flex w-full items-center justify-center border-y border-y-solid border-y-[#e9e9e9] mt-6 py-8 gap-6 flex-col-reverse lg:flex-row lg:mt-4 lg:py-12 lg:gap-10 xl:gap-14 xl:py-16 
        2xl:gap-16 2xl:py-20 ">
           <div className='text-white flex flex-col gap-2 w-80 sm:gap-3 sm:w-[384px] lg:w-[40vw] md:gap-4 xl:gap-6 xl:w-[40vw] 2xl:w-[35vw]' >
            <h1 className='font-["Fugaz_One",cursive] sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl '>NEW LIVE STREAM EVERY  <strong className='text-[rgb(203,159,43)] max-w-[90%] ' >MONDAY 6PM </strong> </h1>
            <p className='text-xs sm:text-sm md:text-base lg:max-w-[85%] xl:text-xl ' >From  challenges to duels, testing out mods, reviewing games or bloody matches with other teams - you name it, we stream it. </p>
           <YellowButton content='PREVIOUS MATCHES' ></YellowButton>
        </div>
        <img src={Game} className="h-80 w-80 sm:w-[400px] sm:h-[400px] xl:w-[500px] xl:h-[500px] object-cover "  />
        </section>
        <section className="flex w-full bg-[#111523] items-center justify-center py-8 gap-6 flex-col lg:flex-row lg:py-12 lg:gap-10 xl:gap-14 xl:py-16 2xl:gap-16 2xl:py-20 ">
            <img src={Nasa} className="w-80 sm::w-[400px] lg:w-[500px] xl:w-[650px] 2xl:w-[700px] h-max  object-cover"  />
           <div className='text-white flex flex-col gap-2 w-80 sm:gap-3 sm:w-[384px] lg:w-[40vw] md:gap-4 xl:gap-7 xl:w-[40vw] 2xl:w-[35vw]' >
            <h1 className='font-["Fugaz_One",cursive] sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl '>IN LOVE  <strong className='text-[rgb(203,159,43)] max-w-[90%] ' > WITH GAMING  </strong> </h1>
            <p className='text-xs sm:text-sm md:text-base lg:max-w-[85%] xl:text-xl ' >All of the best stories begin in the basement, and Team Jesper is one of those. </p>
            <YellowButton content='GET TO KNOW US' ></YellowButton>
        </div>
        </section>
      <Newsletter></Newsletter>
     </>
     );
}
 
export default Home;