"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[7px] border border-[#d19932] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#d19932] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[#d19932]">Software Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl font-bold text-white max-w-[500px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-purple-700">
              {" "} Praneetha Mukkamala {" "}
            </span>
            Software Development Engineer
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300"
        >
          A Full Stack Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        {/* ✅ Hire Me Button with Resume Popup */}
        <motion.button
          variants={slideInFromLeft(1)}
          className="py-2 px-5 bg-gradient-to-r from-orange-700 to-purple-500 text-white font-semibold text-lg rounded-lg max-w-[120px] hover:scale-105 transition-transform duration-300"
        >
          Resume
        </motion.button>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
