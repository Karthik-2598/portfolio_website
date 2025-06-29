import React from 'react';
import aboutImg from "../assets/karthik_about.jpg";
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <h2 className="my-20 text-center text-4xl font-bold tracking-wide">
        About <span className="text-purple-400">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <motion.img
              className="rounded-2xl shadow-lg shadow-purple-500/50"
              src={aboutImg}
              alt="about"
              style={{ height: '710px', width: '350px' }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <motion.p
              className="my-4 max-w-xl py-5 text-lg leading-relaxed tracking-wide"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;