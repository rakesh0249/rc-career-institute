import { motion } from "framer-motion";

import {
  ArrowRight,
  Play,
  Code2,
  Database,
  ShieldCheck,
  BarChart3,
  GraduationCap,
} from "lucide-react";

function Hero() {
  const scrollToCourses = () => {
    document.getElementById("courses")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToEnquiry = () => {
    document.getElementById("enquiry")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-grid" />

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}
          <motion.div
            className="hero-badge"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <GraduationCap size={18} />
            <span>Career Focused Learning</span>
          </motion.div>

          {/* Heading */}
          <h1>
            Learn Today.
            <span>Build Tomorrow.</span>
          </h1>

          {/* Description */}
          <p>
            Build practical skills, explore modern technologies and
            prepare yourself for the next career opportunity with
            RC Career Institute.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={scrollToCourses}
            >
              Explore Courses
              <ArrowRight size={19} />
            </button>

            <button
              className="secondary-btn"
              onClick={scrollToEnquiry}
            >
              <Play size={17} />
              Enquire Now
            </button>

          </div>

          {/* Stats */}
          <div className="hero-mini-stats">

            <div>
              <strong>10+</strong>
              <small>Courses</small>
            </div>

            <div>
              <strong>100%</strong>
              <small>Skill Focus</small>
            </div>

            <div>
              <strong>1:1</strong>
              <small>Guidance</small>
            </div>

          </div>

        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >

          {/* Orbit 1 */}
          <motion.div
            className="hero-orbit orbit-one"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Orbit 2 */}
          <motion.div
            className="hero-orbit orbit-two"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Logo */}
          <motion.div
            className="hero-logo-card"
            animate={{
              y: [0, -18, 0],
              rotate: [0, 1.5, 0, -1.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/logo.png"
              alt="RC Career Institute"
            />
          </motion.div>

          {/* Development */}
          <motion.div
            className="floating-card card-code"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Code2 size={22} />
            <span>Development</span>
          </motion.div>

          {/* Data Science */}
          <motion.div
            className="floating-card card-data"
            animate={{
              y: [0, 14, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <BarChart3 size={22} />
            <span>Data Science</span>
          </motion.div>

          {/* Cyber Security */}
          <motion.div
            className="floating-card card-security"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ShieldCheck size={22} />
            <span>Cyber Security</span>
          </motion.div>

          {/* Technology */}
          <motion.div
            className="floating-card card-db"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Database size={22} />
            <span>Technology</span>
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="hero-bottom-wave" />
    </section>
  );
}

export default Hero;