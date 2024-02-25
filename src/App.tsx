import { useEffect } from "react";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import { useState } from "react";

import Explore from "./components/Explore";
import Header from "./components/Header";
import Headsets from "./components/Headsets";
import Testimonial from "./components/Testimonial";
import Video from "./components/Video";
import NavMobile from "./components/NavMobile";

import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {

  const [navMobile, setNavMobile] = useState(false);

  useEffect(()=>{
    Aos.init({
      duration:2500
    })
  },[])
  
  return (
    <div className="overflow-hidden relative before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:block">
      <Header setNavMobile={setNavMobile} />
      <Banner />
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <Explore />
      
      <NavMobile setNavMobile={setNavMobile} navMobile={navMobile}/>
     
    </div>
  );
}

export default App;
