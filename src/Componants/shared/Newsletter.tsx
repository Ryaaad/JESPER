import Soldat1 from '../../assets/images/shared/SoldatShadow.webp'
import YellowButton from './button';

const Newsletter= () => {
    return (  
    <>
         <div className="justify-center relative items-center hidden px-8 lg:flex lg:h-[700px] xl:h-[900px] xl:px-24 2xl:px-36">
              {/* lgm:h-full lgm:items-start  */}
                <div className='text-white flex flex-col justify-center lg:gap-5 lg:max-w-[45vw] xl:max-w-[38vw] ' >
                     {/* lg:text-3xl */}
            <h1 className='font-["Fugaz_One",cursive] font-["Fugaz One"] text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl '>
     <strong className='text-[rgb(203,159,43)]' >“</strong>ONLY THE DEAD HAVE SEEN THE END OF WAR.<strong className='text-[rgb(203,159,43)]'>” </strong></h1>

    <div className='mt-4 lg:mt-10' >  
    <p className='mb-5 font-["Fugaz_One",cursive] text-xl xl:text-2xl' >SUBSCRIBE TO OUR NEWSLETTER </p>
            <label className='block'>Email address*</label>
            <input type="text" placeholder='Your email adress' className='bg-[#96989b] placeholder-[#181818d6] block pl-4 w-96 py-3 mb-5 xl:mb-7 xl:py-4 xl:w-[30vw] ' />
  
    <YellowButton content="Submit" ></YellowButton>
    </div>
                </div>
{/* lg:w-[100vw] lg:grid justify-center */}
               <div className='self-end ' >
                     {/*  lg:h-[450px] lg:w-[390px] lgm:top-5 lgm:right-0 lgm:absolute */}
               <img src={Soldat1} className="z-0 object-cover h-[450px] lg:h-[650px] xl:h-[750px] 2xl:h-[800px] "  />
               </div>
             
         </div>
    
       <div className="flex flex-col-reverse justify-center relative items-center gap-2 py-5 h-max px-8 text-white lg:hidden">
         <div className='flex flex-col justify-center items-center' >
          <h1 className='font-["Fugaz_One",cursive] font-["Fugaz One"] text-2xl sm:text-3xl sm:max-w-[60vw] '>
            <strong className='text-[rgb(203,159,43)]' >“</strong>ONLY THE DEAD HAVE SEEN THE END OF WAR.<strong className='text-[rgb(203,159,43)]'>” </strong></h1>
         <div className='mt-8' >  
         <p className='mb-5 font-["Fugaz_One",cursive] sm:text-lg' >SUBSCRIBE TO OUR NEWSLETTER </p>
        <label className='block'>Email address*</label>
         <input type="text" placeholder='Your email adress' className='bg-[#96989b] placeholder-[#181818d6] block pl-4 py-3 mb-5 w-80 sm:w-96 ' />
       <YellowButton content="Submit" ></YellowButton>
         </div>
        </div>
        <div>
        <img src={Soldat1} className="z-0 object-cover h-96 "  />
        </div>
       </div>
    </>

     );
}
 
export default Newsletter;