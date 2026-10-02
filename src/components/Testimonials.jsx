import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Student Name",
    course: "Full Stack Web Development",
    text: "A great place to learn practical skills and build confidence.",
  },
  {
    name: "Student Name",
    course: "Digital Marketing",
    text: "The course structure helped me understand digital concepts clearly.",
  },
  {
    name: "Student Name",
    course: "Programming",
    text: "The learning experience was simple, structured and practical.",
  },
];

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="section-container">
        <div className="section-heading">
          <span>STUDENT VOICE</span>

          <h2>
            What Learners
            <strong> Say</strong>
          </h2>

          <p>
            Sample testimonials — replace these with real student
            reviews before publishing.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <motion.div
              className="testimonial-card"
              key={index}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
            >
              <Quote className="quote-icon" />

              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>

              <p>"{item.text}"</p>

              <div className="testimonial-user">
                <div>{item.name.charAt(0)}</div>

                <section>
                  <strong>{item.name}</strong>
                  <span>{item.course}</span>
                </section>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;