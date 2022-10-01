import Soldat1 from '../../assets/Soldat1.webp'
const Hero3= () => {
    return (  
         <div className="lg:flex justify-center px-5 lgm:justify-start lg:flex-wrap-reverse relative 
         lg:px-1 h-[150vh] lg:my-10   ">
                <div className='text-white flex flex-col gap-5 lgm:h-full lgm:items-start  justify-center' >
            <h1 className='text-6xl font-["Fugaz_One",cursive] lg:text-3xl  max-w-[45vw] z-10 '>
     <strong className='text-[rgb(203,159,43)]' >“ </strong>  
     ONLY THE DEAD HAVE SEEN THE END OF WAR. <strong className='text-[rgb(203,159,43)]' >” </strong>  </h1>

    <div className='mt-10  z-10' >  <p className='text-2xl mb-5 font-["Fugaz_One",cursive] ' >SUBSCRIBE TO OUR NEWSLETTER </p>
            <label className='block'>Email address*</label>
            <input type="text" placeholder='Your email adress' className='bg-[#96989b] text-black 
            h-[40px] w-[35vw] p-6  ' />
     <button className=' mt-7 lg:translate-x-[-10%] py-2  text-black 
    bg-[#ffc632]  w-[120px] hover:bg-white block ' >Submit</button> </div>
                </div>

               <div className='lg:w-[100vw] lg:grid justify-center ' >
               <img src={Soldat1} className=" w-[65vw] h-[145vh] lgm:absolute lg:h-[450px] lg:w-[390px] 
               lgm:top-5 lgm:right-[0%] z-0   object-cover "  />
               </div>
             
            </div>
     );
}
 
export default Hero3;