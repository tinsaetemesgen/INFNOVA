import { Routes, Route } from 'react-router-dom';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import Navbar from './components/layout/Navbar';


function App() { 
    return (
      <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<CoursesPage />} />
          <Route path="/details" element={<CourseDetailPage />} />
        </Routes>
      </div>
      </>
    )
}

export default App
