import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiJavascript, SiMysql, SiDocker, SiExpress, SiCypress, SiPython } from "react-icons/si";
import { FaNodeJs, FaJava } from 'react-icons/fa';
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [-10, 10],
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl font-bold tracking-wide"
            >
                Technologies
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-8"
            >
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:shadow-purple-500 transition-shadow duration-300"
                >
                    <RiReactjsLine className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:shadow-green-500 transition-shadow duration-300"
                >
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(7)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:shadow-green-500 transition-shadow duration-300"
                >
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:shadow-green-500 transition-shadow duration-300"
                >
                    <SiExpress className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:shadow-orange-500 transition-shadow duration-300"
                >
                    <FaJava className="text-7xl text-orange-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(7)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:shadow-yellow-500 transition-shadow duration-300"
                >
                    <SiJavascript className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:shadow-blue-500 transition-shadow duration-300"
                >
                    <SiMysql className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:shadow-blue-500 transition-shadow duration-300"
                >
                    <SiDocker className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(7)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:shadow-green-500 transition-shadow duration-300"
                >
                    <SiCypress className="text-7xl text-green-500" />
                </motion.div>
               
            </motion.div>
        </div>
    );
};

export default Technologies;