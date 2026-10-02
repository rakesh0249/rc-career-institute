import { motion } from "framer-motion";
import {
  UserRound,
  Code2,
  Megaphone,
  BarChart3,
} from "lucide-react";

const faculty = [
  {
    icon: Code2,
    title: "Technology Mentor",
    text: "Web development & programming",
  },
  {
    icon: BarChart3,
    title: "Data Mentor",
    text: "Data & analytics learning",
  },
  {
    icon: Megaphone,
    title: "Marketing Mentor",
    text: "Digital marketing & SEO",
  },
  {
    icon: UserRound,
    title: "Career Mentor",
    text: "Learning & career guidance",
  },
];

function Faculty() {
  return (
    <section id="faculty" className="section faculty-section">
      <div className="section-container">
        <div className="section-heading">
          <span>LEARNING SUPPORT</span>

          <h2>
            Learn With
            <strong> Guidance</strong>
          </h2>

          <p>
            Mentor categories can be customized with your actual
            faculty details later.
          </p>
        </div>

        <div className="faculty-grid">
          {faculty.map((member, index) => {
            const Icon = member.icon;

            return (
              <motion.div
                className="faculty-card"
                key={member.title}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
              >
                <div className="faculty-avatar">
                  <Icon />
                </div>

                <h3>{member.title}</h3>

                <p>{member.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faculty;