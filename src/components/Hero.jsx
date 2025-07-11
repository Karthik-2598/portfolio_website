import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/profile-pic.png";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-8 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-wide bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
                        >
                            KARTHIK
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-500 via-slate-500 to-purple-700 bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide text-transparent"
                        >
                            Software Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-4 max-w-xl py-5 text-neutral-300"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0">
                    <div className="flex justify-center items-center" style={{ height: 'auto', maxWidth: '100%' }}>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            alt="profilepic"
                            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-lg hover:shadow-purple-500 transition-shadow duration-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;