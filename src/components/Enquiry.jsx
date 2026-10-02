import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

// ========================================
// EMAILJS CONFIGURATION
// ========================================

const EMAILJS_SERVICE_ID = "service_chn68x8";
const EMAILJS_TEMPLATE_ID = "template_0u604ht";
const EMAILJS_PUBLIC_KEY = "7rXl8iFLG19B0zrbT";

function Enquiry() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    setSending(true);
    setSuccess(false);
    setError("");

    const form = e.currentTarget;

    const formData = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      course: form.course.value,
      message: form.message.value.trim(),
    };

    try {
      console.log("Sending enquiry:", formData);

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      console.log("EmailJS Success:", response);

      setSuccess(true);
      setError("");

      form.reset();

    } catch (err) {
      console.error("EmailJS Error:", err);

      if (err?.status === 400) {
        setError(
          "EmailJS rejected the request. Please check your EmailJS template variables and email service."
        );
      } else if (err?.status === 401) {
        setError(
          "EmailJS Public Key is invalid. Please check your Public Key."
        );
      } else {
        setError(
          err?.text ||
          "Unable to send enquiry. Please try again."
        );
      }

    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="enquiry"
      className="section enquiry-section"
    >
      <div className="section-container enquiry-grid">

        {/* LEFT CONTENT */}
        <motion.div
          className="enquiry-content"
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <span className="section-label">
            START YOUR JOURNEY
          </span>

          <h2>
            Ready To Build Your
            <strong> Career?</strong>
          </h2>

          <p>
            Send us your details and our team can
            help you choose a suitable course.
          </p>

          <div className="contact-mini">

            <div>
              <Phone />
              <span>Call Us</span>
            </div>

            <div>
              <MessageCircle />
              <span>WhatsApp</span>
            </div>

            <div>
              <Mail />
              <span>Email</span>
            </div>

          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          className="enquiry-form"
          onSubmit={submitForm}
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          {/* Name + Phone */}
          <div className="form-row">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              autoComplete="tel"
              required
            />

          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            autoComplete="email"
            required
          />

          {/* Course */}
          <select
            name="course"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select Course
            </option>

            <option value="Full Stack Web Development">
              Full Stack Web Development
            </option>

            <option value="Programming">
              Programming
            </option>

            <option value="Data Science">
              Data Science
            </option>

            <option value="Cyber Security">
              Cyber Security
            </option>

            <option value="Finance & Accounting">
              Finance & Accounting
            </option>

            <option value="Digital Marketing">
              Digital Marketing
            </option>

            <option value="Graphic Designing">
              Graphic Designing
            </option>

            <option value="Social Media Marketing">
              Social Media Marketing
            </option>

            <option value="Search Engine Optimization">
              Search Engine Optimization
            </option>

            <option value="Advanced Excel - GST Filing">
              Advanced Excel - GST Filing
            </option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
          />

          {/* SUCCESS */}
          {success && (
            <div className="form-success">
              <CheckCircle size={20} />

              <span>
                Thank you! Your enquiry has been
                submitted successfully.
              </span>
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="form-error">
              <AlertCircle size={20} />

              <span>{error}</span>
            </div>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            className="primary-btn form-btn"
            disabled={sending}
          >
            {sending ? (
              "Sending..."
            ) : (
              <>
                Submit Enquiry
                <ArrowRight size={19} />
              </>
            )}
          </button>

        </motion.form>

      </div>
    </section>
  );
}

export default Enquiry;