import clumsygirl from "../../assets/images/contact/Clumsygirl.avif"

const ContactUs = () => {
    return ( 
        <>
         <section className="flex flex-col-reverse gap-5 w-full items-center lg:items-start justify-center lg:gap-5 lg:flex-row lg:px-10 py-24">
          <div className='text-white flex flex-col gap-6 lg:mt-16 xl:mt-24 2xl:mt-28  xl:w-[38vw] ' >
           <h1 className='font-["Fugaz_One",cursive] text-3xl sm:text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl tracking-wider uppercase'>Contact <strong className='text-[rgb(203,159,43)]'>Us</strong></h1>
          <div className="w-[95%] " >
          <label className='block'>Name*</label>
         <input type="text" placeholder='Your Name' className='bg-[#96989b] placeholder-[#181818d6] block pl-4 mb-5 w-80 sm:w-96 py-4 lg:w-full ' />
         <label className='block'>Last Name</label>
         <input type="text" placeholder='Your Last Name' className='bg-[#96989b] placeholder-[#181818d6] block pl-4 mb-5 w-80 sm:w-96 py-4 lg:w-full ' />
         <label className='block'> Your email *</label>
         <input type="text" placeholder='Your email adress' className='bg-[#96989b] placeholder-[#181818d6] block pl-4 mb-5 w-80 sm:w-96 py-4 lg:w-full ' />
         <label className='block'> Message *</label>
         <textarea placeholder='Message'  className='bg-[#96989b] placeholder-[#181818d6] block pl-4 mb-5 w-80 sm:w-96 py-4 h-40 lg:w-full '  ></textarea>
          </div>
         </div>
         <img src={clumsygirl} className=" lg:max-w-[40vw] xl:max-w-[38vw] 2xl:w-auto 2xl:h-auto"  />
     </section>
        </>
     );
}
 
export default ContactUs;