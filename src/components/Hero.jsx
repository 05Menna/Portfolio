import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

import profile from "../assets/images/profile.png";

function Hero() {
  return (
    
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 overflow-hidden text-white"
    >
      {/* ================= Background ================= */}

      {/* Cyan Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />

      {/* Purple Glow */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-600/20 blur-[150px]" />

      {/* Grid */}
      <div
        className="
        absolute inset-0
        bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]
        bg-[size:55px_55px]
      "
      />

      {/* ================= Main Container ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 pt-32 pb-24">

        <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-20">

          {/* ===================================================== */}
          {/* LEFT SIDE */}
          {/* ===================================================== */}

          <div className="flex-1 text-center lg:text-left ">

            {/* Hello */}

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              className="uppercase tracking-[5px] text-cyan-400 font-semibold"
            >
              👋 Hello, I'm
            </motion.p>

            {/* Name */}

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="
              mt-5
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              leading-tight
            "
            >
              Menna
              <br />
              Mohammed Abdelbaky
            </motion.h1>

            {/* Typing */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .4 }}
              className="mt-7 h-10 text-2xl font-semibold text-cyan-400"
            >
              <TypeAnimation
                sequence={[
                  "Data Scientist",
                  1800,

                  "Machine Learning Enthusiast",
                  1800,

                  "Data Analyst",
                  1800,

                  "Python Developer",
                  1800,
                ]}
                speed={45}
                repeat={Infinity}
              />
            </motion.div>

            {/* Tagline */}

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .6 }}
              className="
                mt-8
                text-3xl
                md:text-5xl
                font-light
                leading-relaxed
              "
            >
              Transforming Data into{" "}
              <span className="font-bold text-cyan-400">
                Intelligent Solutions.
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .8 }}
              className="
                mt-8
                max-w-xl
                text-lg
                leading-9
                text-gray-400
                mx-auto
                lg:mx-0
              "
            >
              Final-year Computing and Data Science student at
              Alexandria University passionate about Machine
              Learning, Artificial Intelligence, Data Analytics,
              and building intelligent solutions that solve
              real-world problems.
            </motion.p>

            {/* Buttons */}

                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-10 flex flex-wrap gap-5 justify-center lg:justify-start"
                >
                <a
                    href="/resume.pdf"
                    className="
                    px-8
                    py-4
                    rounded-xl
                    bg-cyan-500
                    font-semibold
                    hover:bg-cyan-400
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    shadow-lg
                    shadow-cyan-500/20
                    "
                >
                    Download CV
                </a>

                <a
                    href="#projects"
                    className="
                    px-8
                    py-4
                    rounded-xl
                    border
                    border-cyan-500
                    hover:bg-cyan-500
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    "
                >
                    View Projects
                </a>
                </motion.div>

                {/* Social */}

                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex gap-7 mt-8 justify-center lg:justify-start"
                >
                <a
                    href="https://github.com/05Menna"
                    target="_blank"
                    rel="noreferrer"
                    className="
                    text-3xl
                    text-gray-300
                    hover:text-cyan-400
                    hover:scale-110
                    transition-all
                    "
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/menna-mohammed-abdelbaky-290249304/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                    text-3xl
                    text-gray-300
                    hover:text-cyan-400
                    hover:scale-110
                    transition-all
                    "
                >
                    <FaLinkedin />
                </a>
                </motion.div>

            </div>

          {/* ===================================================== */}
          {/* RIGHT SIDE */}
          {/* ===================================================== */}

          <div className="flex-1 flex justify-center">

  <motion.div
    initial={{ opacity: 0, scale: .8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.3 }}
    className="relative"
  >

    {/* Ring 1 */}

    <div className="
      absolute
      inset-0
      rounded-full
      border
      border-cyan-500/20
      scale-110
      animate-pulse
    " />

    {/* Ring 2 */}

    <div className="
      absolute
      inset-0
      rounded-full
      border-2
      border-cyan-500/30
      scale-125
      animate-[spin_25s_linear_infinite]
    " />

    {/* Ring 3 */}

    <div className="
      absolute
      inset-0
      rounded-full
      border
      border-purple-500/20
      scale-[1.42]
      animate-[spin_35s_linear_infinite_reverse]
    " />

    {/* Glow */}

    <div className="
      absolute
      inset-0
      rounded-full
      bg-cyan-500/20
      blur-3xl
    " />

    {/* Image */}

    <motion.img
      whileHover={{
        scale: 1.05,
        rotate: -1,
      }}
      transition={{
        duration: .4,
      }}
      src={profile}
      alt="Menna Mohammed Abdelbaky"
      className="
        relative
        w-[320px]
        h-[320px]

        md:w-[380px]
        md:h-[380px]

        lg:w-[430px]
        lg:h-[430px]

        object-cover
        rounded-full
        border-4
        border-cyan-400
        shadow-[0_0_60px_rgba(6,182,212,.35)]
      "
    />

  </motion.div>

</div>

        </div>
      </div>
      {/* Scroll */}

<motion.div
  animate={{
    y: [0, 12, 0],
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
  }}
  className="
    absolute
    bottom-8
    left-1/2
    -translate-x-1/2
    text-cyan-400
    text-3xl
  "
>
  <FaArrowDown />
</motion.div>
    </section>
  );
}

export default Hero;