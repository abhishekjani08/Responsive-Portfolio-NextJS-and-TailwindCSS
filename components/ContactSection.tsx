"use client"
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Form validation logic goes here
    if (!e.currentTarget.checkValidity()) {
      // Handle form validation errors
      alert("Form validation failed");
      return;
    }
  
    // Send form data to your email API endpoint
    console.log(formData);
  
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  
    // Display success message
    alert("Form submitted successfully");
  };
  

  return (
    <section id="contactmee">
      <div className=" md:pt-20 md:pb-10">
        <h1 className="mt-10 text-center font-bold text-4xl">       Contact Me        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">

          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-black-300 dark:border-black-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 dark:bg-black-100 text-black-500 dark:text-white dark:bg-opacity-10"
              required
            />
          </div>


          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email Id:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black-500 dark:text-white bg-gray-200 dark:bg-opacity-10"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black-500 dark:text-white bg-gray-200 dark:bg-opacity-10  "
              rows={4}
              required
            />
          </div>
          <div className="flex justify-center">

            <button
              type="submit"
              className="bg-teal-500 text-center text-white rounded-md px-4 py-2 hover:bg-teal-700 transition-colors duration-300 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
