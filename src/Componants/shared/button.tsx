
interface props{
    content:string
}
const YellowButton:React.FC<props> = ({content}) => {
    return ( 
        <button className='py-3 text-sm font-["Montserrat",sans-serif] uppercase text-[#07080d] bg-[#ffc632] tracking-[0.2rem] px-10 w-max hover:bg-white' >{content}</button>
     );
}
 
export default YellowButton;