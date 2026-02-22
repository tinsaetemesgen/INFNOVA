
const course = [
    {
        id: 1,
        category: "Web Development",
        label: "intermediate",
        name: "Full Stack Web Development Bootcamp",
        instructor: "Lidetu Tadesse",
        period: "12 weeks",
        students: "3124",
        rating: "4.9",
        image: 
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
    id: 2,
    category: "Data Science",
    level: "Advanced",
    name: "Practical Machine Learning",
    instructor: "Bereket Tesfaye",
    period: "10 weeks",
    students: 1742,
    rating: 4.8,
    image: "/images/machine-learning.jpg"
  },
  {
    id: 3,
    category: "Design",
    level: "Beginner",
    name: "UI/UX Design for Modern Products",
    instructor: "Hana Alemayehu",
    period: "8 weeks",
    students: 2891,
    rating: 4.7,
    image: "/images/uiux.jpg"
  },
  {
    id: 4,
    category: "Cloud Computing",
    level: "Intermediate",
    name: "Cloud Engineering with AWS",
    instructor: "Samuel Getachew",
    period: "9 weeks",
    students: 2015,
    rating: 4.6,
    image: "/images/cloud.jpg"
  },
  {
    id: 5,
    category: "Mobile Development",
    level: "Intermediate",
    name: "Mobile App Development with Flutter",
    instructor: "Natnael Desta",
    period: "10 weeks",
    students: 2563,
    rating: 4.8,
    image: "/images/mobile.jpg"
  },
  {
    id: 6,
    category: "Security",
    level: "Beginner",
    name: "Cybersecurity Foundations",
    instructor: "Melkit Gima",
    period: "6 weeks",
    students: 1489,
    rating: 4.7,
    image: "/images/security.jpg"
  },
  {
    id: 7,
    category: "Data Science",
    level: "Beginner",
    name: "Data Analytics with Python",
    instructor: "Abel Hailu",
    period: "7 weeks",
    students: 2674,
    rating: 4.8,
    image: "/images/data-analytics.jpg"
  },
  {
    id: 8,
    category: "Blockchain",
    level: "Advanced",
    name: "Blockchain & Fintech Systems",
    instructor: "Yonas Bekele",
    period: "11 weeks",
    students: 1321,
    rating: 4.5,
    image: "/images/blockchain.jpg"
  }
];

export default course

export function getCourses() {
    return course
}
