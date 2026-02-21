import { FaSearch, FaUser, FaArrowRight } from 'react-icons/fa';
import Navbar from "./components/layout/Navbar"
import Hero from "./components/layout/Hero"
import Card from "./components/ui/Card"


function App() {
    return (
      <>
      <Navbar />s
      <Hero />
      <Card className="search-container">
          
      <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search courses, instructors..."
          className="search-input"
        />
    </Card>
      </>
    )
}

export default App
