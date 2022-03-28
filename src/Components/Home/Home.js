import React from "react";
import About from "../HomePage/About/About";
import Banner from "../HomePage/Banner/Banner";
import Features from "../HomePage/Features/Features";
import Service from "../HomePage/Service/Service";


const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <About />
      <Features />
    </div>
  );
};

export default Home;
