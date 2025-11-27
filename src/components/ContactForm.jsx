import React from "react";

function ContactForm() {
  return (
    <div className="h-screen flex flex-row items-center justify-evenly px-4 md:px-12 bg-transparent">
      {/* Left Side (Form) */}
      <form className="flex flex-col items-start gap-5 p-10 rounded-3xl bg-white/10 bg-opacity-60 w-[400px] sm:w-[500px] md:w-[600px]">
        {/* Title */}
        <div>
          <h2 className="text-white text-4xl font-semibold mb-1">Get in touch</h2>
          <hr className="w-[120px] h-[5px] bg-white rounded-lg mb-5 border-none" />
        </div>

        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full h-[50px] px-6 font-medium rounded-full text-black bg-white bg-opacity-60 placeholder:text-[#171717] focus:outline-none focus:border-2 focus:border-[#]"
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full h-[50px] px-6 font-medium rounded-full text-black bg-white bg-opacity-60 placeholder:text-[#171717] focus:outline-none focus:border-2 focus:border-[#]"
        />

        {/* Message Textarea */}
        <textarea
          name="message"
          placeholder="Your message"
          required
          className="w-full h-[140px] px-6 pt-4 font-medium rounded-2xl text-black bg-white bg-opacity-60 placeholder:text-[#171717] focus:outline-none focus:border-2 focus:border-[#ffffff]"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center gap-3 text-black text-base font-medium py-3 px-7 rounded-full bg-gradient-to-l bg-white opacity-40 hover:opacity-100 transition duration-300"
        >
          Submit!
        </button>
      </form>

      {/* Right Side Image (hidden on small screens) */}

    </div>
  );
}

export default ContactForm;
