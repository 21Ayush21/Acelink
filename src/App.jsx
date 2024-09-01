import Navbar from "./components/Navbar";
import Herosection from "./segments/Herosection";
import Aboutsection from "./segments/Aboutsection";
import Clientsection from "./segments/Clientsection";
import FeatureSection from "./segments/FeatureSection";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
import { useRef } from "react";


export default function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "About") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Services") {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
    <Navbar scrollToSection={scrollToSection}/>
    <Herosection></Herosection>
    <FeatureSection ref={servicesRef}></FeatureSection>
    <Aboutsection ref={aboutRef}></Aboutsection>
    <Clientsection></Clientsection>
    <Footer></Footer>
    <Chat></Chat>
    </>
  )
}