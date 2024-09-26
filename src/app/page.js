import MeSection from './components/MeSection';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <MeSection />
        <AboutSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  )
}
