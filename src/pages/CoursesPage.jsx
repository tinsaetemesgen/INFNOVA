import Card from "../components/ui/Card"
export default function CoursesPage() {
    return (
        <main className="home">
            <section className="home-hero">
                <h1 className="home-heading">Explore Our Courses</h1>
                <p className="home-intro">Master new skills with expert-led courses designed for thr modern
                    <br /> learner. Start your learning journey today with INFNOVA Academy.
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
                    
                </div>
            </section>
            
        </main>
    )
}