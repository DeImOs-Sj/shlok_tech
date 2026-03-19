import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">

          {/* Text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-base uppercase text-accent font-primary font-medium mb-3 tracking-[4px]">
                Get in touch
              </h4>
              <h2 className="text-[52px] lg:text-[80px] leading-none mb-4 font-primary font-bold text-dark">
                Let's Work<br />Together.
              </h2>
              <div className="flex flex-col gap-2 mt-6">
                <a href="mailto:shlokjagtap.0608@gmail.com" className="text-muted hover:text-dark transition-colors text-base font-primary tracking-wider">
                  shlokjagtap.0608@gmail.com
                </a>
                <a href="tel:+918888890180" className="text-muted hover:text-dark transition-colors text-base font-primary tracking-wider">
                  +91-8888890180
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 glass border border-dark/10 rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start mt-8 lg:mt-0"
          >
            <input
              className="bg-transparent border-b border-dark/30 py-4 outline-none w-full placeholder:text-subtle/80 text-dark focus:border-accent transition-all font-primary"
              type="text"
              placeholder="Your name"
              id="name"
            />
            <input
              className="bg-transparent border-b border-dark/30 py-4 outline-none w-full placeholder:text-subtle/80 text-dark focus:border-accent transition-all font-primary"
              type="email"
              placeholder="Your email"
              id="email"
            />
            <textarea
              className="bg-transparent border-b border-dark/30 py-12 outline-none w-full placeholder:text-subtle/80 text-dark focus:border-accent transition-all resize-none mb-12 font-primary"
              placeholder="Your message"
              id="message"
            />
            <button className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
