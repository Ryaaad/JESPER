import { useState } from "react";
import Home0 from "./Componants/Home/Home"
import Navbar1 from "./Componants/Navbar/Navbar1"
import Footer from "./Componants/shared/footer"
function App() {
 
  const [Home, setHome] = useState(true);
  const [About, setAbout] = useState(false);
  const [Stream, setStream] = useState(false);
  const [Contact, setContact] = useState(false);
  return (
  <div  className="bg-[#07070d]">
  <Navbar1></Navbar1>
  </div>
 
  )
}

export default App
