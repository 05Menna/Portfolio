import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Applied AI Development Intern",
    company: "Information Technology Institute (ITI)",
    duration: "Aug 2026 – Sep 2026",
    description:
      "Participating in an intensive Applied AI Development training focused on Machine Learning, Deep Learning, Python, and AI application development through practical projects.",
  },

  {
    title: "IoT Summer Training",
    company: "Faculty of Computers and Data Science, Alexandria University",
    duration: "Jul 2025 – Aug 2025",
    description:
      "Completed hands-on training in Internet of Things (IoT), working with sensors, embedded systems, and smart device applications while strengthening teamwork and problem-solving skills.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#07111F] text-white py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Experience
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Internships & Training
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My practical experience through internships and professional training.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-cyan-500 pl-10">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-16 relative"
            >

              {/* Circle */}

              <div className="
                absolute
                -left-[53px]
                top-1
                w-10
                h-10
                rounded-full
                bg-cyan-500
                flex
                items-center
                justify-center
                text-slate-900
                text-lg
              ">
                <FaBriefcase />
              </div>

              <div className="
                bg-slate-900/70
                border
                border-slate-800
                rounded-3xl
                p-8
                hover:border-cyan-500
                transition
              ">

                <span className="text-cyan-400 font-medium">
                  {exp.duration}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {exp.title}
                </h3>

                <h4 className="text-gray-300 mt-2">
                  {exp.company}
                </h4>

                <p className="text-gray-400 mt-5 leading-8">
                  {exp.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;