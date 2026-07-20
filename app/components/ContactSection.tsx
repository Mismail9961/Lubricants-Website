"use client";
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface FormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  phoneNumber: string;
  address: string;
  message: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    address: '',
    message: '',
  });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        workEmail: '',
        phoneNumber: '',
        address: '',
        message: '',
      });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  // Smooth staggered viewport entry animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  return (
    <section className="w-full bg-white px-4 xs:px-6 py-6 md:py-10 font-sans text-[#2d2d2d] overflow-x-hidden">
      <div className="w-full mx-auto max-w-[1440px]">
        
        {/* --- Top Header Bar --- */}
        <div className="w-full pb-4 mb-10 md:mb-16 border-b border-gray-300">
          <h1 className="text-lg md:text-xl font-bold text-[#555555] tracking-wide">
            PRIME <span className="font-medium text-[#777777]">Get in Touch</span>
          </h1>
        </div>

        {/* --- Main Grid Content Layout --- */}
        <motion.div 
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          
          {/* Left Column: Context Content */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-4 md:space-y-6">
            <h2 className="text-3xl xs:text-4xl md:text-[54px] font-bold tracking-tight text-[#2d2d2d] leading-none">
              Connect With Us
            </h2>
            <h3 className="text-xl xs:text-2xl md:text-3xl font-normal tracking-tight text-[#4a4a4a] leading-tight pt-1">
              Let's Build Something <br className="hidden lg:inline" /> Prime Together
            </h3>
            <div className="space-y-4 text-xs xs:text-sm md:text-[15px] text-[#4a4a4a] leading-relaxed max-w-[460px] pt-2">
              <p>
                Our premier support and consultation team is available to assist you. 
                Whether you are exploring new industrial solutions, scaling your operations, 
                or seeking specialized guidance, we are ready to partner with you.
              </p>
              <p>
                We focus on precision, quality, and exceptional industrial products. Drop us a line, and a 
                dedicated relations expert will get back to you shortly.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.form 
            variants={itemVariants}
            onSubmit={handleSubmit} 
            className="lg:col-span-7 space-y-5 md:space-y-6 w-full"
          >
            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-1.5 md:gap-2">
                <label htmlFor="firstName" className="text-xs xs:text-sm md:text-[15px] font-normal text-[#1a1a1a]">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full h-11 md:h-12 px-3 md:px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 transition-all text-sm md:text-base"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5 md:gap-2">
                <label htmlFor="lastName" className="text-xs xs:text-sm md:text-[15px] font-normal text-[#1a1a1a]">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full h-11 md:h-12 px-3 md:px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 transition-all text-sm md:text-base"
                  required
                />
              </div>
            </div>

            {/* Email & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-1.5 md:gap-2">
                <label htmlFor="workEmail" className="text-xs xs:text-sm md:text-[15px] font-normal text-[#1a1a1a]">Work Email</label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className="w-full h-11 md:h-12 px-3 md:px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 transition-all text-sm md:text-base"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5 md:gap-2">
                <label htmlFor="phoneNumber" className="text-xs xs:text-sm md:text-[15px] font-normal text-[#1a1a1a]">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full h-11 md:h-12 px-3 md:px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 transition-all text-sm md:text-base"
                />
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-1.5 md:gap-2">
              <label htmlFor="address" className="text-xs xs:text-sm md:text-[15px] font-normal text-[#1a1a1a]">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full h-11 md:h-12 px-3 md:px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 transition-all text-sm md:text-base"
              />
            </div>

            {/* Help Request Textarea */}
            <div className="flex flex-col gap-1.5 md:gap-2">
              <label htmlFor="message" className="text-xs xs:text-sm md:text-[15px] font-normal text-[#1a1a1a]">How may we help you?</label>
              <textarea
                id="message"
                name="message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                className="w-full min-h-[48px] md:min-h-[56px] px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 transition-all text-sm md:text-base resize-y"
                required
              />
            </div>

            {/* Pill Submit Button */}
            <div className="pt-2 md:pt-4 flex items-center gap-4">
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                className="relative inline-flex items-center justify-center px-10 md:px-12 h-11 md:h-12 text-sm md:text-base font-bold text-[#2d2d2d] bg-white rounded-full overflow-hidden border border-transparent transition-shadow duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #3b82f6, #818cf8, #f87171, #f59e0b)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                  borderWidth: '1.5px'
                }}
              >
                {status === 'loading' ? 'Sending...' : 'Submit'}
              </motion.button>

              {status === 'success' && (
                <span className="text-sm text-green-600 font-medium">
                  Message sent! We'll be in touch shortly.
                </span>
              )}
              {status === 'error' && (
                <span className="text-sm text-red-600 font-medium">
                  {errorMsg}
                </span>
              )}
            </div>
          </motion.form>
        </motion.div>

        {/* --- Central Divider Line --- */}
        <div className="mt-16 md:mt-24 border-t border-gray-300 w-full" />

        {/* --- Bottom Section: Office Details & Registration Columns --- */}
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left w-full"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Main Address Column */}
          <div className="space-y-3">
            <h4 className="text-xl md:text-2xl font-bold text-[#2d2d2d]">
              PRIME Head Office
            </h4>
            <div className="text-xs xs:text-sm md:text-[15px] text-[#4a4a4a] leading-relaxed space-y-1.5 pt-1">
              <p className="font-medium text-[#1a1a1a]">Plot No: K 227/A</p>
              <p>Site Super Highway Phase II</p>
              <p className="pt-2">
                <span className="font-bold text-[#1a1a1a]">Email:</span>{" "}
                <a href="mailto:prime.lubetech75@gmail.com" className="hover:underline text-blue-600">
                  prime.lubetech75@gmail.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}