import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { StickyResume } from "./components/StickyResume";

export default function App() {
  return (
    <>
      <Nav />
      <StickyResume />
      <main>
        <Hero />
        <div className="border-t border-border">
          <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
            <About />
            <Projects />
          </div>
        </div>
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
