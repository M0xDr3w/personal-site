import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Interests } from "./components/Interests";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
