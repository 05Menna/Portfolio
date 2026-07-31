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
  const [active, setActive] = useState("home");
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
        <ul className="hidden md:flex items-center gap-3">

          {navLinks.map((item) => (

            <li
              key={item}
              className="relative"
            >

              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
                onSetActive={() => setActive(item.toLowerCase())}
                className={`
                  relative
                  px-5
                  py-2
                  rounded-full
                  cursor-pointer
                  font-medium
                  transition-colors
                  duration-300
                  z-10
                  ${
                    active === item.toLowerCase()
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }
                `}
              >

                {item}

                {active === item.toLowerCase() && (

                  <motion.div
                    layoutId="navbar-pill"
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-cyan-500/15
                      border
                      border-cyan-400/40
                      backdrop-blur-md
                      -z-10
                    "
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 35,
                    }}
                  />

                )}

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