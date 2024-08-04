import React, {useRef} from 'react';
import { CONTACT } from '../constants';
import {motion} from "framer-motion";
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e)=>{
        e.preventDefault();
         emailjs.sendForm('service_y26qfut', 'template_fld4k9q', form.current, 'fdJ-HFFxHQpVR8u6i').then((result) => {
            console.log(result.text);
            alert('Message sent successfully');
        },(error)=> {
            console.log(error.text);
            alert('Failed to send message.Please try again');
        });
        e.target.reset();
    };
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 0.6}}className="my-10 text-center text-4xl">Contact Me</motion.h1>
        <motion.div 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:100}}
        transition={{duration: 0.7}}className="text-center tracking-lighter">
            <motion.p 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:100}}
            transition={{duration: 0.7}}className="my-4">{CONTACT.address}</motion.p>
            <motion.p 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:100}}
            transition={{duration: 0.8}}className="my-4">{CONTACT.phoneNo}</motion.p>
            <motion.a 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:100}}
            transition={{duration: 0.7}}href="#" className="border-b">{CONTACT.email}</motion.a>
        </motion.div>
        <motion.div
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:100}}
        transition={{duration:0.7}}
        className="text-center tracking-lighter mt-10">
            <form ref={form} onSubmit={sendEmail} className="mx-auto max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 item-center text-center">
                <input type="hidden" name="to_email"
                value={CONTACT.email} />
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from_name">
                    Your Name
                  </label>
                <input type="text" name="from_name" placeholder="Your name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from_email">
                   Your Email
                 </label>
                 <input
              type="email"
              name="from_email"
              id="from_email"
              placeholder="Your Email"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
                </div>
                <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline item-center"
            >
              Send Message
            </button>
          </div>

            </form>
        </motion.div>
    </div>
  )
}

export default Contact;
