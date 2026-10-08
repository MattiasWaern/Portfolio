import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Code } from './sections/Code';
import { Journey } from './sections/Journey';
import { Bring } from './sections/Bring';
import { Contact } from './sections/Contact';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero /><Skills /><Projects /><Code /><Journey /><Bring /><Contact />
      </main>
      <Footer />
    </>
  );
}
