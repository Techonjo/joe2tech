import Header from "./Header";
import Hero from "./HomePage/herosection/Hero";
import ServicesSection from "./HomePage/cardServices/Service";
import WhyChooseUS from "./HomePage/Decision/WhyChooseUs";
import Portfolio from "./HomePage/portfolio/Portfolio";
import Testimonial from "./HomePage/Testimnials/Testmonial";
import CardSlider from "./HomePage/Team/CardSlider";
import Footer from "./Footer"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesSection />
      <WhyChooseUS />
      <Portfolio />
      <Testimonial />
      <CardSlider />
      <Footer />
    </>
  );
}

export default App;
