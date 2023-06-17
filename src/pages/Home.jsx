import React from "react";
import Technologies from "../components/Technologies";
import bgVideo from "./../../videos/bg-video-min.mp4";

const Home = () => {
  return (
    <section className="home">
      <video src={bgVideo} autoPlay muted loop></video>
      <div className="presentation">
        <h6 className="hello">Hi, my name is</h6>
        <h1 className="name">Arman Dilanean</h1>
        <h2>
          I'm a <span className="job">Front End Developer</span>
        </h2>
        <Technologies />
      </div>
    </section>
  );
};

export default Home;
