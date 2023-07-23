import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Experiences />
        <Projects />
      </main>

      <Footer />

    </>
  )
}
