import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#030712] border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Name */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-3xl font-bold">
            Menna Mohammed Abdelbaky
          </h2>

          <p className="text-gray-400 mt-3">
            Data Scientist • Machine Learning Engineer • Data Analyst
          </p>

        </motion.div>

        {/* Socials */}

        <div className="flex justify-center gap-8 mt-8 text-3xl">

          <a
            href="https://github.com/05Menna"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/menna-mohammed-abdelbaky-290249304"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:mennamohammedabdelbaky@gmail.com"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-800 my-10"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Menna Mohammed Abdelbaky.
            <br />
            Built with React, Tailwind CSS & Framer Motion.
          </p>

          <button
            onClick={scrollTop}
            className="
              w-12
              h-12
              rounded-full
              bg-cyan-500
              hover:bg-cyan-400
              text-slate-900
              flex
              items-center
              justify-center
              transition
              shadow-lg
            "
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;