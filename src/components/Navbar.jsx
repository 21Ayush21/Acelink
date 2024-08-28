import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.01) {
        setVisible(false);
      } else {
        if (direction > 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const navlinks = ["Home", "About", "Portfolio", "Services"];
  return (
    <AnimatePresence mode="wait">
      <motion.header
        className=" hidden fixed top-8 inset-x-0 mx-auto border-2 border-white md:flex items-center justify-center z-10 py-2 px-2 rounded-full max-w-fit cursor-pointer "
        initial={{ opacity: 1, y: -100 }}
        animate={{y: visible ? 0 : -100 , opacity: visible ? 1 : 0}}
        translate={{ duration: 0.5}}
        style={{backgroundImage: "linear-gradient(288deg, rgba(115,7,99,1) 2%, rgba(52,9,203,1) 99%)"}}
      >
        <div className="flex flex-row text-white space-x-9 text-2xl font-bold">
          {navlinks.map((link, index) => {
            return (
              <div key={index} className="px-2">
                {link}
              </div>
            );
          })}
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Navbar;
