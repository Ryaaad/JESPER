
interface props{
    content:string
}
const YellowButton:React.FC<props> = ({content}) => {
    return ( 
        <button className='py-3 font-["Montserrat",sans-serif] uppercase text-[#07080d] bg-[#ffc632] tracking-[0.2rem] w-max hover:bg-white text-xs sm:text-sm px-5 lg:text-base lg:px-8 xl:px-10 ' >{content}</button>
     );
}
 
export default YellowButton;