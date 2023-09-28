import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Section04 from "./Section04";
import Section05 from "./Section05";
import Footer from "./Footer";
function App() {
  useEffect(() => {
    setTimeout(function() {
        AOS.init({
          
        });
    }, 100);
    // AOS.refresh()
  }, []);
  return (
    <div className="App ">
      <Navbar />
      <Header  />
   
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Footer />
      <div className="px-8 md:px-20 py-7 bg-black text-white flex flex-col md:flex-row md:items-center justify-between">
        <img src={process.env.PUBLIC_URL+'/images/footer_logo.png'} alt="" className="w-1/3 md:w-auto" />
        <div className="my-5 md:my-0 text-sm md:text-base" >地址：桃園市中壢區高鐵站前西路一段286號13樓之9 | 電話：03-287-8868 | 傳真：03-287-7089</div>
      </div>
    </div>
  );
}

export default App;
