import './index.css'
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0f0c12] pt-15 p-10 sm:px-24 sm:py-12 md:px-32 md:py-12 lg:px-40 xl:px-80">
      <Navbar/>
      <Bio/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;