import React from "react";
import "./home.css";
import prasanth from "../../Assets/prasanthEnhanced.jpg";

const Home = () => {
  return (
    <div id="home" className="py-[10%] flex justify-center">
      <div className="w-full max-w-[1240px] bg-cover p-3 flex flex-col md:flex-row justify-center items-center relative gap-10 ">
        <div className="md:w-[50%] w-full order-2 md:order-1 flex flex-col items-center md:items-start bg-cover p-3">
          <h2 className="hero-h2 font-sans">Hello, my name is</h2>
          <h1 className="mt-2 mb-5 hero-head text-5xl font-serif text-center sm:text-left">
            Prasanth <span>Chandaka</span>
          </h1>
          <p className="hero-para font-serif font-semibold">
            I'm a Web Developer
          </p>
          <div className="input-div">
            <input type="email" placeholder="Enter Your Email" required />
            <button type="button">Lets Start</button>
          </div>
        </div>
        <div className="animated-div order-1 md:order-2 relative overflow-hidden rounded-full md:w-[400px] md:h-[500px] w-full">
          <img
            className="w-full object-cover h-full rounded-full"
            src={prasanth}
            alt="hero-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
