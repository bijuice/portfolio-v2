import { ChevronBottom } from "../Icons/Chevrons";
import { motion } from "framer-motion";

export default function DiscoverMore({
  id,
  color,
}: {
  id?: string;
  color?: string;
}) {
  return (
    <span className="w-full flex flex-col justify-center items-center absolute left-0 bottom-2 text-black ">
      more
      <motion.a
        href={`#${id}`}
        animate={{
          y: [5, -5, 5],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      >
        <ChevronBottom size={35} color={color || "black"} />
      </motion.a>
    </span>
  );
}
