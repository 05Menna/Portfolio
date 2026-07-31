import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            I'm always interested in internships, Data Science,
            Machine Learning, and Data Analytics opportunities.
            Feel free to reach out!
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {/* Email */}

          <motion.a
            whileHover={{ y: -8 }}
            href="mailto:mennamohammedabdelbaky@gmail.com"
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition"
          >
            <FaEnvelope className="text-4xl text-cyan-400 mb-5" />

            <h3 className="text-2xl font-semibold">
              Email
            </h3>

            <p className="text-gray-400 mt-3 break-all">
              mennamohammedabdelbaky@gmail.com
            </p>

          </motion.a>

          {/* Phone */}

          <motion.a
            whileHover={{ y: -8 }}
            href="tel:+201012056740"
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition"
          >
            <FaPhoneAlt className="text-4xl text-cyan-400 mb-5" />

            <h3 className="text-2xl font-semibold">
              Phone
            </h3>

            <p className="text-gray-400 mt-3">
              +20 101 205 6740
            </p>

          </motion.a>

          {/* LinkedIn */}

          <motion.a
            whileHover={{ y: -8 }}
            href="https://www.linkedin.com/in/menna-mohammed-abdelbaky-290249304"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition"
          >
            <FaLinkedin className="text-4xl text-cyan-400 mb-5" />

            <h3 className="text-2xl font-semibold">
              LinkedIn
            </h3>

            <p className="text-gray-400 mt-3">
              Connect with me
            </p>

          </motion.a>

          {/* GitHub */}

          <motion.a
            whileHover={{ y: -8 }}
            href="https://github.com/05Menna"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition"
          >
            <FaGithub className="text-4xl text-cyan-400 mb-5" />

            <h3 className="text-2xl font-semibold">
              GitHub
            </h3>

            <p className="text-gray-400 mt-3">
              View my repositories
            </p>

          </motion.a>

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap justify-center gap-6 mt-20">

          <a
            href="/resume.pdf"
            className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-4 rounded-full transition"
          >
            <FaDownload />
            Download CV
          </a>

          {/* <a
            href="mailto:mennamohammedabdelbaky@gmail.com"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold px-8 py-4 rounded-full transition"
          >
            Send Email
          </a> */}

        </div>

      </div>
    </section>
  );
}

export default Contact;
