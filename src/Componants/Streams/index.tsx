import soldat from "../../assets/images/Streams/Soldier.avif"
import YellowButton from "../shared/button";

const Streams = () => {
return ( 
<>
<section className="flex flex-col-reverse gap-5 w-full items-center justify-center lg:gap-2 lg:flex-row px-5 py-20 md:px-10 lg:px-32 xl:px-44 2xl:px-60  ">
          <div className='text-white flex flex-col gap-6 w-[65vw] sm:w-[40vw] md:w-[35vw] xl:w-[32vw] items-start ' >
           <h1 className='font-["Fugaz_One",cursive] text-3xl sm:text-4xl md:text-5xl xl:w-[30vw] xl:text-7xl 2xl:text-8xl tracking-wider'>LIVE <strong className='text-[rgb(203,159,43)]'> STREAMS</strong></h1>
           <p className='xl:w-[30vw] xl:text-lg 2xl:text-xl'>Watch us as we explore the vast world of FPS shooters, kick some butt in team matches or just have fun with some beers and easy-going games.</p>
         </div>
         <img src={soldat} className=" w-96 sm:max-w-[400px] md:max-w-[500px] lg:flex-1 lg:min-h-[600px] min-w-[35vw] lg:min-w-[45vw] xl:min-w-[40vw] 2xl:min-w-[36vw] xl:min-h-[650px] 2xl:min-h-[700px]"  />
</section>

<section className="flex w-full bg-[#111523] items-center lg:justify-between lg:items-start py-20 gap-1 lg:gap-8 flex-col lg:flex-row lg:px-32 xl:px-44 2xl:px-60 ">
    <div className='text-white flex flex-col gap-1 w-[50vw] sm:gap-3 md:gap-2 xl:gap-3 lg:w-auto' >
        <h1 className='font-["Fugaz_One",cursive] text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl '>TANYA VS. BENJAMIN</h1>
        <h2 className="font-['Fugaz_One',cursive] text-[#ffc632] sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl "> AUGUST 24TH </h2>
        <p className='mt-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ' >Weird mods for games? Bring it on! I love the creativity of the gaming community, but sometimes it gives me nightmares. </p>
    </div>
    <div className="mt-2 w-[50vw] text-start lg:w-auto ">
    <YellowButton content='watch' />
    </div>
</section>

<section className="flex w-full items-center lg:justify-between lg:items-start py-20 gap-1 lg:gap-8 flex-col lg:flex-row lg:px-32 xl:px-44 2xl:px-60 ">
    <div className='text-white flex flex-col gap-1 w-[50vw] sm:gap-3 md:gap-2 xl:gap-3 lg:w-auto' >
        <h1 className='font-["Fugaz_One",cursive] text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl '>MONDAY FUN</h1>
        <h2 className="font-['Fugaz_One',cursive] text-[#ffc632] sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl ">AUGUST 31ST</h2>
        <p className='mt-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>The team plays games with their fans and random people on internet. No rules, no judgement -well, kind of. Come and have some fun.</p>
    </div>
    <div className="mt-2 w-[50vw] text-start lg:w-auto ">
    <YellowButton content='watch' />
    </div>
</section>

<section className="flex w-full bg-[#111523] items-center lg:justify-between lg:items-start py-20 gap-1 lg:gap-8 flex-col lg:flex-row lg:px-32 xl:px-44 2xl:px-60 ">
    <div className='text-white flex flex-col gap-1 w-[50vw] sm:gap-3 md:gap-2 xl:gap-3 lg:w-auto' >
        <h1 className='font-["Fugaz_One",cursive] text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl '>JESPER VS. REAPERS</h1>
        <h2 className="font-['Fugaz_One',cursive] text-[#ffc632] sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl "> SEPTEMBER  24TH </h2>
        <p className='mt-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ' >Weird mods for games? Bring it on! I love the creativity of the gaming community, but sometimes it gives me nightmares. </p>
    </div>
    <div className="mt-2 w-[50vw] text-start lg:w-auto ">
    <YellowButton content='watch' />
    </div>
</section>

<section className="flex w-full items-center lg:justify-between lg:items-start py-20 gap-1 lg:gap-8 flex-col lg:flex-row lg:px-32 xl:px-44 2xl:px-60 ">
    <div className='text-white flex flex-col gap-1 w-[50vw] sm:gap-3 md:gap-2 xl:gap-3 lg:w-auto' >
        <h1 className='font-["Fugaz_One",cursive] text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl '>TESTING OUT  MODS </h1>
        <h2 className="font-['Fugaz_One',cursive] text-[#ffc632] sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl ">AUGUST 31ST</h2>
        <p className='mt-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>The team plays games with their fans and random people on internet. No rules, no judgement -well, kind of. Come and have some fun.</p>
    </div>
    <div className="mt-2 w-[50vw] text-start lg:w-auto ">
    <YellowButton content='watch' />
    </div>
</section>
</>
);
}
 
export default Streams;