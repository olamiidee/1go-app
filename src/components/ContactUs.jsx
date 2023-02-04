import React from "react";
import contact from "/images/matey-man-and-woman-work-in-support-service.png";

function ContactUs() {
  return (
    <div className="overlay bg-[#020d18]/80 h-full w-full block md:flex items-center justify-between text-[1rem] md:px-[50px] py-[80px]">
      <div className="w-[90%] mx-auto md:w-[40%] text-center text-slate-100">
        <h2 className="text-[2.5rem] font-bold">Get in Touch</h2>
        <p className="text-[1.2rem] md:text-[1.4rem]">
          Contact us and we will get back to you soon
        </p>
        <div>
          <img src={contact} alt="" className="w-[80%] mx-auto" />
        </div>
      </div>
      {/* Form */}
      <div className="w-full md:w-1/2 px-4">
        <form className="space-y-6 font-light">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 bg-transparent text-white border-2 border-blue-500 rounded-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 bg-transparent text-white border-2 border-blue-500 rounded-lg focus:outline-none"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-transparent text-white border-2 border-blue-500 rounded-lg focus:outline-none"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-transparent text-white border-2 border-blue-500 rounded-lg focus:outline-none"
            />
          </div>

          <textarea
            placeholder="Enter your message here..."
            className="h-[150px] px-4 py-3 bg-transparent text-white border-2 border-blue-500 rounded-lg focus:outline-none w-full"
          ></textarea>
          <button className="bg-blue-500 text-white py-4 w-full rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
