import Newsletter from '../shared/Newsletter';
import Soldat from '../../assets/images/home/Soldat.webp'
import Game from '../../assets/images/home/Game.webp'
import Nasa from '../../assets/images/home/Nasa.webp'
import YellowButton from '../shared/button';
const Home = () => {
    return ( 
     <div className='overflow-hidden' >
        <div className="flex pt-32 w-full lgm:justify-end flex-wrap lgm:flex-nowrap items-center px-5 lg:mb-10  ">
          <img src={Soldat} className=" lgm:max-w-[700px]"  />
          <div id="text"  className='text-white flex flex-col gap-6  w-[50%] lg:w-[100%] lg:justify-center lg:px-20 lg:py-10 ' >
           <h1 className='text-8xl max-w-[70%] font-["Fugaz_One",cursive] lg:text-7xl'>TEAM <strong className='text-[rgb(203,159,43)] max-w-[90%] ' > JESPER </strong> </h1>
           <p className='  max-w-[70%]  sm:min-w-[250px] mx-3 ' >We are a gaming team, owning  anyone and anything in our way in the field of FPS shooter games. Join us in our way  to glory!</p>
           <YellowButton content='WATCH OUR STREAM' ></YellowButton>
            </div>
        </div>
        <div className="flex pt-[100px] gap-24  w-full lgm:justify-end lg:flex-wrap-reverse items-center lg:my-10  ">
           <div className='text-white flex flex-col gap-6  w-[50%] lg:w-[%100] lg:p-5 ' >
            <h1 className='text-6xl font-["Fugaz_One",cursive] lg:text-3xl  '>NEW LIVE STREAM EVERY  <strong className='text-[rgb(203,159,43)] max-w-[90%] ' >MONDAY 6PM </strong> </h1>
            <p className='lg:min-w-[400px] sm:min-w-[250px]  mx-3 ' >From  challenges to duels, testing out mods, reviewing games or bloody matches with other teams - you name it, we stream it. </p>
           <YellowButton content='PREVIOUS MATCHES' ></YellowButton>
        </div>
        <img src={Game} className=" h-[100vh] lgm:max-w-[600px] object-cover "  />
        </div>
        <div className="flex lgm:gap-24 lgm:justify-end flex-wrap w-full lgm:flex-nowrap items-center bg-[#111523] lg:p-4 ">
          <img src={Nasa} className=" lgm:max-w-[700px] object-cover lgm:h-[100vh]"  />
          <div id="text"  className='text-white flex flex-col gap-6 w-[50%] lg:w-[%100] lg:p-5 ' >
          <h1 className='text-6xl max-w-[80%] font-["Fugaz_One",cursive] lg:text-3xl'>IN LOVE <strong className='text-[rgb(203,159,43)] max-w-[90%] ' > WITH GAMING </strong> </h1>
          <p className=' lg:max-w-[75%] lg:min-w-[400px] sm:min-w-[250px]  mx-3 ' > All of the best stories begin in the basement, and Team Jesper is one of those. </p>
           <YellowButton content='GET TO KNOW US' ></YellowButton>
          </div>
        </div>
      <Newsletter></Newsletter>
     </div>
     );
}
 
export default Home;