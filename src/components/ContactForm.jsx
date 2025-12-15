'use client';

import React from "react";
import { Send, Mail, User } from 'lucide-react';

function ContactForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-12 w-full">
      
      <form 
        className="flex flex-col gap-6 p-10 sm:p-12 rounded-3xl bg-gray-900/70 border border-white/10 shadow-2xl w-full max-w-lg md:max-w-xl backdrop-blur-sm"
        // Replace with your actual form submission handler
        onSubmit={(e) => { e.preventDefault(); alert("Form submitted (Demo)"); }}
      >
        {/* Title */}
        <div>
          <h2 className="text-white text-4xl font-extrabold mb-2">Let's Connect</h2>
          <p className="text-gray-400">Have a project idea or just want to chat? Send me a message!</p>
        </div>

        {/* Name Input */}
        <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/>
            <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full h-[50px] pl-12 pr-6 font-medium rounded-xl text-white bg-gray-800 border border-gray-700 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
        </div>

        {/* Email Input */}
        <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/>
            <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full h-[50px] pl-12 pr-6 font-medium rounded-xl text-white bg-gray-800 border border-gray-700 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
        </div>

        {/* Message Textarea */}
        <textarea
          name="message"
          placeholder="Your message"
          required
          rows={5}
          className="w-full px-6 pt-4 pb-4 font-medium rounded-xl text-white bg-gray-800 border border-gray-700 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-3 text-white text-lg font-bold py-3 px-7 rounded-xl bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-500/50 transform hover:scale-[1.01]"
        >
          Send Message <Send className="w-5 h-5"/>
        </button>
      </form>
    </div>
  );
}

export default ContactForm;