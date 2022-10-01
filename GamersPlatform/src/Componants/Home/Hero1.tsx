import Game from '../../assets/Game.webp'
const Hero1 = () => {
    return (  
            <div id="hero1" className="flex pt-[100px] gap-24  w-full lgm:justify-end lg:flex-wrap-reverse
             items-center lg:my-10  ">
                <div id="text"  className='text-white flex flex-col gap-6  w-[50%] lg:w-[%100] lg:p-5 ' >
            <h1 className='text-6xl font-["Fugaz_One",cursive] lg:text-3xl  '>NEW LIVE STREAM EVERY  <strong className='text-[rgb(203,159,43)] max-w-[90%] ' >MONDAY 6PM </strong> </h1>
                    <p className='  lg:min-w-[400px] sm:min-w-[250px]  mx-3 ' >From 
                    challenges to duels, testing out mods, 
            reviewing games or bloody matches with other teams - you name it, we stream it. </p>
            
            
     <button className=' mt-7 lg:translate-x-[-10%] py-2 font-[300] text-black 
    bg-[#ffc632] w-[250px] hover:bg-white ' >PREVIOUS MATCHES</button>
                </div>

                <img src={Game} className=" h-[100vh] lgm:max-w-[600px] object-cover "  />
            </div>
     );
}
 
export default Hero1;