import { useEffect } from 'react';

export const Navbar = ({menuOpen , setmenuOpen}) => {

    useEffect(()=>{
        document.body.style.overflow = menuOpen? "hidden" : "" ;
    },[menuOpen]);
  return(
    <nav className="top-0 fixed w-full z-40 backdrop-blur-lg border-b border-white/10 bg-[rgba(10,10,10,0.8)]">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16 ">
                <a href="#home" clasName="font-mono text-xl font-bold text-white">
                    Kz<span className="text-blue-700">.tech</span>
                </a>
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={()=>setmenuOpen((prev)=>!prev)}>
                    &#9776;
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors">{" "}Home{" "}</a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors">about</a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                </div>
            </div>

        </div>

    </nav>
    
  );
};
