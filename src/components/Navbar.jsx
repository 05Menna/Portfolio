import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/70 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">

        {/* Logo */}

        <h1 className="text-2xl font-bold text-white cursor-pointer">
          Menna<span className="text-cyan-400">.</span>
        </h1>

        {/* Menu */}

        <ul className="hidden md:flex items-center gap-10">

          {navLinks.map((item) => (

            <li key={item}>

              <Link
                activeClass="text-cyan-400"
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
                className="
                  cursor-pointer
                  text-gray-300
                  hover:text-cyan-400
                  transition
                  font-medium
                "
              >
                {item}
              </Link>

            </li>

          ))}

        </ul>

        {/* Button */}

        {/* <a
          href="/resume.pdf"
          className="
            hidden
            md:block
            bg-cyan-500
            hover:bg-cyan-400
            text-slate-900
            font-semibold
            px-6
            py-3
            rounded-full
            transition
          "
        >
          Resume 
        </a> */}

      </div>
    </motion.nav>
  );
}

export default Navbar;