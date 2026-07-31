import { motion } from "framer-motion";

import {
  FaPython,
  FaGitAlt,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaBrain,
  FaChartBar,
  FaCode,
  FaRobot,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiR,
  SiMysql,
  SiSupabase,
  SiPandas,
  SiNumpy,
} from "react-icons/si";


const categories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "C/C++", icon: <SiCplusplus /> },
      { name: "R", icon: <SiR /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },

  {
    title: "Data Science",
    skills: [
      { name: "Machine Learning", icon: <FaBrain /> },
      { name: "TensorFlow", icon: <FaRobot /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Power BI", icon: <FaChartBar /> },
    ],
  },

  {
    title: "Database & Tools",
    skills: [
      { name: "SQL", icon: <SiMysql /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Problem Solving", icon: <FaCode /> },
      { name: "Databases", icon: <FaDatabase /> },
    ],
  },
];
function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Skills
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technical Skills
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to build data-driven
            solutions and machine learning applications.
          </p>
        </motion.div>

        <div className="mt-20 space-y-14">

          {categories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .2 }}
            >

              <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                {category.skills.map((skill, i) => (

                  <motion.div
                    key={i}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                    }}
                    className="
                      bg-slate-900/70
                      border
                      border-slate-800
                      rounded-2xl
                      p-6
                      flex
                      flex-col
                      items-center
                      justify-center
                      backdrop-blur-lg
                      hover:border-cyan-500
                      transition-all
                      duration-300
                    "
                  >

                    <div className="text-5xl text-cyan-400 mb-4">
                      {skill.icon}
                    </div>

                    <p className="font-medium">
                      {skill.name}
                    </p>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;