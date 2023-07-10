import Soldat1 from '../../assets/Soldat1.webp'
import YellowButton from './button';

const Newsletter= () => {
    return (  
         <div className="lg:flex justify-center lgm:justify-start lg:flex-wrap-reverse relative lg:px-1 h-[150vh] lg:my-10 px-20 ">
                <div className='text-white flex flex-col gap-5 lgm:h-full lgm:items-start  justify-center' >
            <h1 className='text-6xl font-["Fugaz_One",cursive] lg:text-3xl  max-w-[45vw] z-10 '>
     <strong className='text-[rgb(203,159,43)]' >“</strong> ONLY THE DEAD HAVE SEEN THE END OF WAR. <strong className='text-[rgb(203,159,43)]' >” </strong>  </h1>

    <div className='mt-10 z-10' >  
    <p className='text-2xl mb-5 font-["Fugaz_One",cursive] ' >SUBSCRIBE TO OUR NEWSLETTER </p>
            <label className='block'>Email address*</label>
            <input type="text" placeholder='Your email adress' className='bg-[#96989b] placeholder-[#181818d6] block h-[40px] w-[35vw] py-6 pl-4 mb-7' />
  
    <YellowButton content="Submit" ></YellowButton>
    </div>
                </div>

               <div className='lg:w-[100vw] lg:grid justify-center ' >
               <img src={Soldat1} className="flex-1 h-[145vh] lgm:absolute lg:h-[450px] lg:w-[390px] lgm:top-5 lgm:right-0 z-0 object-cover"  />
               </div>
             
            </div>
     );
}
 
export default Newsletter;