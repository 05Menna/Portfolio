import { motion } from "framer-motion";
import {
//  FaGraduationCap,
  FaLaptopCode,
  FaRobot,
//  FaStar,
} from "react-icons/fa";

const cards = [
  // {
  //   icon: <FaGraduationCap />,
  //   title: "Final-Year Student",
  //   value: "Alexandria University",
  // },
  // {
  //   icon: <FaStar />,
  //   title: "CGPA",
  //   value: "3.97 / 4.0",
  // },
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
          <div className="flex items-center justify-center gap-4">

            <div className="w-16 h-[2px] bg-cyan-500"/>

            <p className="uppercase tracking-[6px] text-cyan-400">
            ABOUT ME
            </p>

            <div className="w-16 h-[2px] bg-cyan-500"/>

            </div>

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
            </span>, a final-year Computing and Data Science student at
            Alexandria University.

            <br /><br />

            I specialize in <span className="text-white font-semibold">
            Data Science, Machine Learning, and Data Analytics
            </span>,
            building intelligent solutions that transform raw data into
            meaningful insights.

            <br /><br />

            I enjoy working on end-to-end data projects—from data
            collection and preprocessing to predictive modeling,
            interactive dashboards, and deploying practical applications.

            </p>
            <div className="mt-10 flex flex-wrap gap-4">

              <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                Data Science
              </span>

              <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                Machine Learning
              </span>

              <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                Data Analytics
              </span>

              {/* <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                SQL
              </span>

              <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                Power BI
              </span> */}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="flex flex-col gap-6 "
          >

            {cards.map((card, index) => (

              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                key={index}
                className="
                  inline-flex
                  flex-col
                  bg-slate-900/70
                  border
                  border-slate-800
                  rounded-3xl
                  p-7
                  max-w-md
                  hover:border-cyan-400
                  transition-all
                  duration-300
                  shadow-lg
                  "
              >

                <div className="text-cyan-400 text-4xl mb-6 items-center justify-center flex">
                  {card.icon}
                </div>

                <h3 className="font-semibold text-xl items-center justify-center flex mb-2">
                  {card.title}
                </h3>

                <p className="mt-3 text-gray-400 text-center">
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