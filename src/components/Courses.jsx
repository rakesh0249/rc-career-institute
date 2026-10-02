import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  Database,
  ShieldCheck,
  Calculator,
  Megaphone,
  Palette,
  Share2,
  Search,
  FileSpreadsheet,
  ArrowUpRight,
} from "lucide-react";

const courses = [
  {
    title: "Full Stack Web Development",
    icon: Code2,
    text: "Learn modern frontend, backend, databases and full-stack development.",
    tag: "Technology",
  },
  {
    title: "Programming",
    icon: Terminal,
    text: "Build strong programming fundamentals and logical problem-solving skills.",
    tag: "Technology",
  },
  {
    title: "Data Science",
    icon: Database,
    text: "Explore data analysis, Python, visualization and data-driven concepts.",
    tag: "Technology",
  },
  {
    title: "Cyber Security",
    icon: ShieldCheck,
    text: "Understand cybersecurity concepts, security practices and digital safety.",
    tag: "Technology",
  },
  {
    title: "Finance & Accounting",
    icon: Calculator,
    text: "Develop practical knowledge of finance and accounting fundamentals.",
    tag: "Finance",
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    text: "Learn digital marketing channels, campaigns and online growth strategies.",
    tag: "Marketing",
  },
  {
    title: "Graphic Designing",
    icon: Palette,
    text: "Create engaging visual designs using modern design principles.",
    tag: "Creative",
  },
  {
    title: "Social Media Marketing",
    icon: Share2,
    text: "Learn content planning, social platforms and audience engagement.",
    tag: "Marketing",
  },
  {
    title: "Search Engine Optimization",
    icon: Search,
    text: "Understand SEO fundamentals and strategies for online visibility.",
    tag: "Marketing",
  },
  {
    title: "Advanced Excel - GST Filing",
    icon: FileSpreadsheet,
    text: "Learn advanced spreadsheet workflows and GST filing fundamentals.",
    tag: "Finance",
  },
];

function Courses() {
  return (
    <section id="courses" className="section courses-section">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>OUR COURSES</span>
          <h2>
            Skills That Move Your
            <strong> Career Forward</strong>
          </h2>
          <p>
            Choose a learning path that matches your career goals
            and interests.
          </p>
        </motion.div>

        <div className="courses-grid">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.article
                className="course-card"
                key={course.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
              >
                <div className="course-icon">
                  <Icon size={27} />
                </div>

                <span className="course-tag">
                  {course.tag}
                </span>

                <h3>{course.title}</h3>

                <p>{course.text}</p>

                <button
                  onClick={() =>
                    document
                      .getElementById("enquiry")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                >
                  Enquire
                  <ArrowUpRight size={17} />
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Courses;