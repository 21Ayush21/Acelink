import Navbar from "./components/Navbar";
import Herosection from "./segments/Herosection";
import Aboutsection from "./segments/Aboutsection";
import Clientsection from "./segments/Clientsection";
import FeatureSection from "./segments/FeatureSection";

export default function App() {
  return (
    <>
    <Navbar/>
    <Herosection></Herosection>
    <Aboutsection></Aboutsection>
    <Clientsection></Clientsection>
    <FeatureSection></FeatureSection>
    </>
  )
}