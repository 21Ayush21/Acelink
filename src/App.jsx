import Navbar from "./components/Navbar";
import Herosection from "./segments/Herosection";
import Aboutsection from "./segments/Aboutsection";
import Clientsection from "./segments/Clientsection";
import FeatureSection from "./segments/FeatureSection";
import Footer from "./components/Footer";
import Chat from "./components/Chat";


export default function App() {
  return (
    <>
    <Navbar/>
    <Herosection></Herosection>
    <FeatureSection></FeatureSection>
    <Aboutsection></Aboutsection>
    <Clientsection></Clientsection>
    <Footer></Footer>
    <Chat></Chat>
    </>
  )
}