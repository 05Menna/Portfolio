import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRobot,
  FaStar,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaGraduationCap />,
    title: "Final-Year Student",
    value: "Alexandria University",
  },
  {
    icon: <FaStar />,
    title: "CGPA",
    value: "3.97 / 4.0",
  },
  {
    icon: <FaLaptopCode />,
    title: "Projects",
    value: "10+ Completed",
  },
  {
    icon: <FaRobot />,
    title: "Specialization",
    value: "AI • ML • Data Science",
  },
];

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            About Me
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Get to Know Me Better
          </h2>
        </motion.div>

        {/* Content */}

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <p className="text-lg leading-9 text-gray-300">

              I'm <span className="text-cyan-400 font-semibold">
                Menna Mohammed Abdelbaky
              </span>,
              a final-year Computing and Data Science student at
              Alexandria University.

              <br /><br />

              My passion lies in turning raw data into valuable
              insights through Data Analysis, Machine Learning,
              and Artificial Intelligence.

              <br /><br />

              I enjoy solving real-world problems, building
              intelligent applications, and continuously learning
              modern technologies to become a professional
              Data Scientist.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                Python
              </span>

              <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                Machine Learning
              </span>

              <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                Data Analysis
              </span>

              <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                SQL
              </span>

              <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                Power BI
              </span>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="grid grid-cols-2 gap-6"
          >

            {cards.map((card, index) => (

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                key={index}
                className="
                  bg-slate-900/70
                  border
                  border-slate-800
                  rounded-3xl
                  p-8
                  backdrop-blur-lg
                  shadow-lg
                  hover:border-cyan-500
                  transition-all
                "
              >

                <div className="text-cyan-400 text-4xl mb-6">
                  {card.icon}
                </div>

                <h3 className="font-semibold text-xl">
                  {card.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {card.value}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;