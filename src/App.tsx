import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
