import React from "react";

function Footer() {
  return (
    <footer className="w-screen bg-gray-100 text-center py-6 shadow mt-10 ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]">
      <div className=" mx-auto">
        <h3 className="text-gray-600 text-sm sm:text-base font-medium">
          Join the A-List and save 15%
        </h3>
        <h3 className="text-gray-800 text-sm sm:text-base mt-4">
          Follow the latest trends, sales and styles.
        </h3>

        
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-1">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full sm:w-[500px] p-2 ps-5 border border-black rounded"
          />
          <button className="bg-slate-900 text-white px-4 py-3 rounded">
            SUBSCRIBE
          </button>
        </div>

        <p className="mt-6">Stay Connected</p>
        <ul className="flex justify-center gap-5 mt-3 text-xl">
          <li>
            <i className="fa-brands fa-facebook-f"></i>
          </li>
          <li>
            <i className="fa-brands fa-x-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-pinterest-p"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
