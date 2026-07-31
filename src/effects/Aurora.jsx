import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 150, -80, 0],
          y: [0, -80, 100, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
        className="
        absolute
        w-[700px]
        h-[700px]
        bg-cyan-500/20
        blur-[140px]
        rounded-full
        top-[-250px]
        left-[-200px]
        "
      />

      <motion.div
        animate={{
          x: [0, -150, 80, 0],
          y: [0, 120, -100, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "easeInOut",
        }}
        className="
        absolute
        w-[650px]
        h-[650px]
        bg-purple-600/20
        blur-[160px]
        rounded-full
        bottom-[-250px]
        right-[-200px]
        "
      />

    </div>
  );
}