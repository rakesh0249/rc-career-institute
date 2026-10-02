import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Faculty from "./components/Faculty";
import Testimonials from "./components/Testimonials";
import Enquiry from "./components/Enquiry";
import Footer from "./components/Footer";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Courses />
        <About />
        <WhyChooseUs />
        <Faculty />
        <Testimonials />
        <Enquiry />
      </main>

      <Footer />
    </div>
  );
}

export default App;