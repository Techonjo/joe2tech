import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Hero from "./Pages/HomePage/herosection/Hero";
import ServicesSection from "./Pages/HomePage/cardServices/Service";
import WhyChooseUS from "./Pages/HomePage/Decision/WhyChooseUs";
import Portfolio from "./Pages/HomePage/portfolio/Portfolio";
import Testimonial from "./Pages/HomePage/Testimnials/Testmonial";
import CardSlider from "./Pages/HomePage/Team/CardSlider";
import Footer from "./Footer";
import About from "./AboutUs/AboutUs"; // Import About page

function App() {
  return (
    <Router basename="/joe2tech">
      {/* Header will show on all pages */}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ServicesSection />
              <WhyChooseUS />
              <Portfolio />
              <Testimonial />
              <CardSlider />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
