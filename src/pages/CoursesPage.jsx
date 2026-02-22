import Card from "../components/ui/Card"
import course from "../data/courses"
import Footer from "../components/layout/Footer"

export default function CoursesPage() {
    return (
        <main className="home">
            <section className="home-hero">
                <h1 className="home-heading">Explore Our Courses</h1>
                <p className="home-intro">Master new skills with expert-led courses designed for thr modern
                    learner. Start your learning journey today with INFNOVA Academy.
                </p>
            </section>

            <Card className="search-bar">
                <input type="text" placeholder="Search courses, instructors..." className="search-input" />
                <input type="text" className="non-input one" />
                <input type="text" className="non-input two" />
            </Card>

            <section className="courses-list">
                <h2>Showing <span>8</span> of <span>8</span> courses</h2>

                <div className="courses-container">
                    {course.map((c) => (
                        <Card key={c.id} className="course-card">
                        <img src={c.image} alt={c.name} className="course-image" />
                        <div className={`course-level-badge level-${c.level}`}>
                            {c.level}
                        </div>

                        <div className="course-info">
                            <p className="course-category">{c.category}</p>
                            <h3 className="course-name">{c.name}</h3>
                            <p className="course-instructor">Instructor: <span>{c.instructor}</span></p>
                            <hr />
                            <div className="course-bottom">
                            <span className="duration">{c.period}</span>
                            <span className="students">{c.students.toLocaleString()}</span>
                            <span className="rating">{c.rating}</span>
                            </div>
                        </div>
                        </Card>
                    ))}
                </div>
            </section>


            <Footer />
            
        </main>
    )
}