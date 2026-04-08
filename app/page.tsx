import Header from "@/components/header"
import Hero from "@/components/hero"
import Categories from "@/components/categories"
import Vendors from "@/components/vendors"
import About from "@/components/about"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import CustomerCare from "@/components/customer-care"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Categories />
      <Vendors />
      <About />
      <Services />
      <Gallery />
      <CustomerCare />
      <Contact />
      <Footer />
    </main>
  )
}
