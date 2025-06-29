import { useRef } from 'react';
import { CONTACT } from '../constants';
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_y26qfut', 'template_fld4k9q', form.current, 'fdJ-HFFxHQpVR8u6i').then((result) => {
            console.log(result.text);
            alert('Message sent successfully');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send message. Please try again');
        });
        e.target.reset();
    };

    return (
        <div className="border-b border-neutral-900 pb-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.6 }}
                className="my-10 text-center text-4xl font-bold tracking-wide"
            >
                Contact <span className="text-purple-400">Me</span>
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.7 }}
                className="text-center tracking-lighter"
            >
                <motion.p
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.7 }}
                    className="my-4 text-lg"
                >
                    {CONTACT.address}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.8 }}
                    className="my-4 text-lg"
                >
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.a
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.7 }}
                    href="#"
                    className="border-b text-lg text-purple-400 hover:text-purple-500 transition-colors duration-300"
                >
                    {CONTACT.email}
                </motion.a>
            </motion.div>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.7 }}
                className="text-center tracking-lighter mt-10"
            >
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="mx-auto max-w-md bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-lg rounded px-8 pt-6 pb-8 mb-4 text-center"
                >
                    <input type="hidden" name="to_email" value={CONTACT.email} />
                    <div className="mb-4">
                        <label
                            className="block text-gray-300 text-sm font-bold mb-2"
                            htmlFor="from_name"
                        >
                            Your Name
                        </label>
                        <motion.input
                            type="text"
                            name="from_name"
                            placeholder="Your name"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-300 text-sm font-bold mb-2"
                            htmlFor="from_email"
                        >
                            Your Email
                        </label>
                        <motion.input
                            type="email"
                            name="from_email"
                            id="from_email"
                            placeholder="Your Email"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-300 text-sm font-bold mb-2"
                            htmlFor="message"
                        >
                            Your Message
                        </label>
                        <motion.textarea
                            name="message"
                            id="message"
                            placeholder="Your Message"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <motion.button
                            type="submit"
                            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            Send Message
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;