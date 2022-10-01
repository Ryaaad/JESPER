import Nasa from '../../assets/Nasa.webp'
const Hero2 = () => {
    return ( 
        <div id="hero" className="flex lgm:gap-24 lgm:justify-end  flex-wrap  w-full
         lgm:flex-nowrap items-center bg-[#111523] lg:p-4 ">
            <img src={Nasa} className=" lgm:max-w-[700px] object-cover lgm:h-[100vh]"  />
            <div id="text"  className='text-white flex flex-col gap-6 
            w-[50%] lg:w-[%100] lg:p-5 ' >
        <h1 className='text-6xl max-w-[80%] font-["Fugaz_One",cursive] lg:text-3xl'>IN LOVE 
        <strong className='text-[rgb(203,159,43)] max-w-[90%] ' > WITH GAMING </strong> </h1>
                <p className=' lg:max-w-[75%] lg:min-w-[400px] sm:min-w-[250px]  mx-3 ' >
                All of the best stories begin in the basement, and Team Jesper is one of those. </p>
                <button className=' mt-7 lg:translate-x-[-10%] py-2 font-[300] text-black 
                bg-[#cb9f2b] w-[250px]  hover:bg-white ' >GET TO KNOW US</button>
            </div>
        </div>
    );}
 
export default Hero2;