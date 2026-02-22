import { Link } from "react-router-dom"
import Footer from "../components/layout/Footer"

export default function CourseDetailPage() {
  return (
    <>
      <main className="course-detail-page">
        <div className="go-back" style={{ padding: '20px' }}>
          <span>
            <Link to="/" >
               Back to Courses
            </Link>
          </span>
        </div>
        
        <section className="detail-hero" style={{ background: '#ff4900', padding: '60px 20px', color: 'white' }}>
          <div className="text-content">
            <h1 style={{ fontSize: '3rem' }}>Cloud Engineering with AWS</h1>
          </div>
        </section>

       

        <Footer />
      </main>
    </>
  ) 
}