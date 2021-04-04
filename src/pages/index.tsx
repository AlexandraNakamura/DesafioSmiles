import { AcumularMilhas } from "../components/AcumularMilhas";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { MilhasParaTodos } from "../components/MilhasParaTodos";
import { NavBar } from "../components/NavBar";
import { OQueSaoMilhas } from "../components/OQueSaoMilhas";


export default function Home() {
  return (
    <div className="container">
    <NavBar />
    <Banner />
    <MilhasParaTodos />
    <OQueSaoMilhas />
    <AcumularMilhas />
    <Footer />
    
  </div>
  )
}
