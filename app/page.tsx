import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/header";
import About from "@/components/About/about";
import Contact from "@/components/Contact/contact";
import Testimonials from "@/components/Testimonials/testimonials";
import FAQs from "@/components/FAQs/faqs";
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Header/>
      <About/>
      <FAQs/>
      <Contact/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
