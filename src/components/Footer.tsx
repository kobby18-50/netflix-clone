import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="mt-10 flex items-center justify-center bg-slate-300 gap-x-1">
           <span> Developed by</span> <Link to={'https://ekwabena.netlify.app/'} className='font-semibold'> Kwabena</Link>
        </footer>
     );
}
 
export default Footer;