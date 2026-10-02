import { motion } from "framer-motion";
import {
  CheckCircle2,
  Target,
  Lightbulb,
  Users,
} from "lucide-react";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-container about-grid">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="about-card">
            <img src="/logo.png" alt="RC Career Institute" />

            <div className="about-floating">
              <Target size={22} />
              <div>
                <strong>Career Focus</strong>
                <span>Learn with purpose</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">ABOUT US</span>

          <h2>
            Learn. Build.
            <strong> Grow.</strong>
          </h2>

          <p>
            RC Career Institute is designed around practical
            learning and career-oriented skill development.
          </p>

          <p>
            Our course collection covers technology, finance,
            marketing and creative skills so learners can choose
            a path that fits their goals.
          </p>

          <div className="about-points">
            <div>
              <CheckCircle2 />
              <span>Practical learning approach</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Career-focused course paths</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Modern industry-relevant topics</span>
            </div>
          </div>

          <div className="about-values">
            <div>
              <Lightbulb />
              <span>Learn</span>
            </div>

            <div>
              <Users />
              <span>Build</span>
            </div>

            <div>
              <Target />
              <span>Grow</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;