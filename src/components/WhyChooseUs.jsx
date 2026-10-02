import { motion } from "framer-motion";
import {
  BookOpenCheck,
  Laptop,
  UserRoundCheck,
  BriefcaseBusiness,
} from "lucide-react";

const reasons = [
  {
    icon: BookOpenCheck,
    title: "Practical Learning",
    text: "Focus on concepts through practical and project-oriented learning.",
  },
  {
    icon: Laptop,
    title: "Modern Skills",
    text: "Learn current tools, technologies and digital skills.",
  },
  {
    icon: UserRoundCheck,
    title: "Guided Learning",
    text: "Get structured guidance throughout your learning journey.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Focus",
    text: "Choose courses designed around real-world career skills.",
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="section why-section">
      <div className="section-container">
        <motion.div
          className="section-heading light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>WHY RC CAREER INSTITUTE?</span>

          <h2>
            Build Skills With
            <strong> Purpose</strong>
          </h2>

          <p>
            A learning environment focused on skills, practice
            and career development.
          </p>
        </motion.div>

        <div className="why-grid">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="why-card"
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
              >
                <div className="why-icon">
                  <Icon />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;