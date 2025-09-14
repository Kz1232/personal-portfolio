import { useState } from 'react';
import './App.css'
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  
  const [ isLoaded , setisLoaded] = useState(false);
  const [ menuOpen,setmenuOpen ] = useState(false);
  return (
    <>

      {!isLoaded && <LoadingScreen onComplete={ ()=>setisLoaded(true)} />}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" :"opacity-0"} bg-black text-gray-500`}>
        <Navbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
        <MobileMenu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
        <Home />
        <About />
        <Projects />
        <Contact />
        </div>
    </>
  );
}

export default App
