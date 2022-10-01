import { BsInstagram,BsFacebook } from "react-icons/bs";
import {TiSocialTwitter} from "react-icons/ti";

const Footer = () => {
    return ( 
        <div id="footer" className=" px-20 py-[75px] bg-[#ffc632] w-full flex justify-between justify-items-center  items-start  h-[45vh] md:justify-center md:gap-20 " >
            <div className="flex flex-col items-center ">
            <h1 className="text-2xl text-[#07080d] font-['Fugaz_One',cursive] " >JESPER</h1>
             <div className="flex gap-5 justify-center mt-4 text-xl items-center " > 
             <TiSocialTwitter className="text-3xl" ></TiSocialTwitter>
             <BsFacebook></BsFacebook>
             <BsInstagram></BsInstagram>
             </div>
            </div>
            <div  className="flex w-[50%]  justify-between md:w-full ">
                <div className="flex flex-col">
                    <h1  className="text-2xl font-['Fugaz_One',cursive] text-[#07080d] ">CONTACTS</h1>
                    <div  className="mt-2  " >
                    <p>info@jesper.com </p>
                <p> (917) 365-8863</p>
                    </div>
                    
                </div>
                <div className="flex flex-col ">
                    <h1  className="text-2xl text-[#07080d] font-['Fugaz_One',cursive] ">P.O. BOX</h1>
                    <div  className="mt-2" >
                    <p>    3721 Single Street </p>
                <p> Quincy, MA 02169</p>
                    </div>
            

                </div>
            </div>
        </div>
     );
}
 
export default Footer;