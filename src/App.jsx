import CasesSection from "./components/CasesSection.jsx"
import Certifications from "./components/Certifications.jsx"
import FeatureSection from "./components/FeatureSection.jsx"
import Footer from "./components/Footer.jsx"
import HeroSection from "./components/HeroSection.jsx"
import Navbar from "./components/Navbar.jsx"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <FeatureSection/>
        <Certifications/>
        <CasesSection/>
        <Footer/>
      </div>
    </>
  )
}

export default App