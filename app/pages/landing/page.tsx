import React from "react"
import Hero from "@/components/Hero/Hero"
import Header from "@/components/Header/header"
import About from "@/components/About/about"
import FAQs from "@/components/FAQs/faqs"
import Testimonials from "@/components/Testimonials/testimonials"
import Footer from "@/components/Footer/footer"
import Contact from "@/components/Contact/contact"

const page = () => {
    return (
        <div>
            <Hero />
            <Header />
            <About />
            <FAQs />
            <Contact />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default page
