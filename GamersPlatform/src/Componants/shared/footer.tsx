import { BsInstagram,BsFacebook } from "react-icons/bs";
import {TiSocialTwitter} from "react-icons/ti";

const Footer = () => {
    return ( 
        <div className="bg-[#ffc632] w-full flex items-start justify-center px-3 py-10 gap-10 sm:justify-evenly sm:py-20 " >
            <div className="flex flex-col items-center ">
            <h1 className="text-[#07080d] font-['Fugaz_One',cursive] text-sm sm:text-xl lg:text-2xl" >JESPER</h1>
             <div className="flex justify-center text-xl items-center gap-2 mt-2 sm:mt-4 sm:gap-5" > 
             <TiSocialTwitter className=" text-sm sm:text-xl cursor-pointer lg:text-3xl hover:text-[#000000a2]  " ></TiSocialTwitter>
             <BsFacebook  className=" text-sm sm:text-xl cursor-pointer lg:text-2xl hover:text-[#000000a2]  "></BsFacebook>
             <BsInstagram className=" text-sm sm:text-xl cursor-pointer lg:text-2xl hover:text-[#000000a2] "></BsInstagram>
             </div>
            </div>
            <div  className="flex items-center gap-5 sm:gap-0 sm:w-[50%]  sm:justify-between  ">
                <div className="flex flex-col">
                    <h1  className="font-['Fugaz_One',cursive] text-[#07080d] text-sm sm:text-xl lg:text-2xl">CONTACTS</h1>
                    <div  className="text-xs mt-1 sm:mt-2 sm:text-base  " >
                    <p>info@jesper.com </p>
                <p> (917) 365-8863</p>
                    </div>
                    
                </div>
                <div className="flex flex-col ">
                    <h1  className="text-[#07080d] font-['Fugaz_One',cursive] text-sm sm:text-xl lg:text-2xl">P.O. BOX</h1>
                    <div  className="text-xs mt-1 sm:mt-2 sm:text-base" >
                    <p>    3721 Single Street </p>
                <p> Quincy, MA 02169</p>
                    </div>
            

                </div>
            </div>
        </div>
     );
}
 
export default Footer;