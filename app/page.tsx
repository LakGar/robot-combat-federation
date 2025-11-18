import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RobotClasses from "@/components/RobotClasses";
import Teams from "@/components/Teams";
import Events from "@/components/Events";
import Register from "@/components/Register";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <RobotClasses />
      <Teams />
      <Events />
      <Register />
      <Newsletter />
      <Footer />
    </main>
  );
}
