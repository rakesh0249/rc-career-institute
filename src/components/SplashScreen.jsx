import { motion } from "framer-motion";

function SplashScreen() {
  return (
    <div className="splash-screen">
      <motion.div
        className="splash-glow"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="splash-logo-wrapper"
        initial={{ opacity: 0, scale: 0.4, y: 100 }}
        animate={{
          opacity: 1,
          scale: [0.4, 1.15, 0.95, 1],
          y: [100, -25, 10, 0],
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
      >
        <img
          src="/logo.png"
          alt="RC Career Institute"
          className="splash-logo"
        />
      </motion.div>

      <motion.div
        className="splash-loader"
        initial={{ width: 0 }}
        animate={{ width: "180px" }}
        transition={{ duration: 2.2 }}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        LEARN • BUILD • GROW
      </motion.p>
    </div>
  );
}

export default SplashScreen;