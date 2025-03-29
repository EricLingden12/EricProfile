"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bfa7fde5-9e7f-49fa-afb6-f772b5ba1811");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="container mx-auto h-screen pt-30 text-center pb-30 ">
      <p className="md:text-lg text-md font-medium">Get in touch</p>
      <h1 className="text-3xl sm:text-5xl font-semibold mt-3 gap-2 font-ovo text-center">
        Contact me
      </h1>
      <p className="md:w-[60%] w-[90%] mx-auto mt-2 text-lg font-medium">
        I'd love to hear from you! if you have any questions or just want to say
        hi, please don't hesitate to reach out.
      </p>
      <div className="grid">
        {/* Contact Form */}
        <form onSubmit={onSubmit} className="md:w-[45%] w-[80%] mx-auto mt-10">
          <div className="md:flex grid items-center gap-6">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <textarea
            id="message"
            rows="4"
            name="message"
            placeholder="Enter your message"
            className="w-full p-2 border rounded my-8"
            required
          ></textarea>

          <button
            type="submit"
            className="flex items-center bg-black text-white px-10 py-3 rounded-4xl text-xl font-bold"
          >
            Send Message
          </button>
        </form>
        <p className="mt-4">{result}</p>

        {/* Contact Info */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2">Direct Contact</h3>
          <div className="flex items-center justify-center gap-4">
            <p className="flex items-center gap-2">
              <FaEnvelope /> ericlingden12@gmail.com
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/EricLingden12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/eric-lingden-4aa03b344/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} color="#0A66C2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
