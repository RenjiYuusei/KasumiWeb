import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function Card({ children, className, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 rounded-2xl sm:rounded-3xl border shadow-2xl p-5 sm:p-8 md:p-10",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
