import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "CKD Multi-Stage Classification",
    description:
      "Built a multi-class machine learning pipeline to classify Chronic Kidney Disease into five stages using feature selection, PCA, GridSearchCV and SVM.",
    tech: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "SVM",
      "PCA",
    ],
    github:
      "https://github.com/05Menna/CKD-Multi-Stage-Classification-using-Machine-Learning",
  },

  {
    title: "Alexandria Weather Analysis",
    description:
      "End-to-end Data Science project including web scraping, data cleaning, EDA, regression modeling, MongoDB Atlas and Streamlit dashboard.",
    tech: [
      "Python",
      "BeautifulSoup",
      "MongoDB",
      "Streamlit",
      "Regression",
    ],
    github:
      "https://github.com/05Menna/Alexandria-Weather-Analysis-Prediction",
  },

  {
    title: "Crime Rate Analysis",
    description:
      "Performed EDA, visualization, Logistic Regression and K-Medoids clustering to analyze crime patterns and predict police districts.",
    tech: [
      "Python",
      "ML",
      "EDA",
      "K-Medoids",
      "Visualization",
    ],
    github:
      "https://github.com/05Menna",
  },

  {
    title: "Customer Churn Dashboard",
    description:
      "Interactive Power BI dashboard exploring customer churn by demographics, geography, contracts and services.",
    tech: [
      "Power BI",
      "Excel",
      "Dashboard",
    ],
    github:
      "https://github.com/05Menna",
  },

  {
    title: "Egypt Weather MapReduce",
    description:
      "Analyzed Egyptian climate data (2000–2024) using Python and MapReduce to compute yearly maximum temperatures efficiently.",
    tech: [
      "Python",
      "MRJob",
      "MapReduce",
      "Pandas",
    ],
    github:
      "https://github.com/05Menna",
  },

  {
    title: "Breast Cancer Diagnosis",
    description:
      "Compared SVM and Neural Networks for breast cancer diagnosis with feature engineering, preprocessing and model evaluation.",
    tech: [
      "Python",
      "TensorFlow",
      "SVM",
      "ML",
    ],
    github:
      "https://github.com/05Menna",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#050816] text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            A selection of Data Science, Machine Learning,
            Data Analysis and Visualization projects showcasing
            my practical experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
              }}
              className="
                bg-slate-900/60
                border
                border-slate-800
                rounded-3xl
                p-7
                backdrop-blur-xl
                hover:border-cyan-500
                transition-all
              "
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {project.tech.map((item, i) => (

                  <span
                    key={i}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-cyan-500/10
                      text-cyan-300
                      text-sm
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>

              <div className="flex gap-5 mt-8">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl hover:text-cyan-400"
                >
                  <FaGithub />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl hover:text-cyan-400"
                >
                  <FaExternalLinkAlt />
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;