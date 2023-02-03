import React from "react";

function ContactUs() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center w-[95%] mx-auto mt-6">
      {/* Image */}
      <div>
        <img src="" alt="" />
      </div>
      {/* Form */}
      <div>
        <form className="space-y-6 font-light">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 bg-transparent border border-blue-500 rounded-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 bg-transparent border border-blue-500 rounded-lg focus:outline-none"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-transparent border border-blue-500 rounded-lg focus:outline-none"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-transparent border border-blue-500 rounded-lg focus:outline-none"
            />
          </div>

          <textarea
            placeholder="Enter your message here..."
            className="h-[150px] px-4 py-3 bg-transparent border border-blue-500 rounded-lg focus:outline-none w-full"
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
