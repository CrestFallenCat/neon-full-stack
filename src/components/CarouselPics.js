import React from "react";
import "./CarouselCSS.css";
import shipwreck from "./pics/ship.png";
import synthwave from "./pics/synth.png";
import sea from "./pics/seapng.png";
import spaceship from "./pics/creation.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import clown from "./pics/clownl.png";
import sunset from "./pics/sunset.png";
import towers from "./pics/towers.png";
import ball from "./pics/ball.png";

export default function CarouselPics() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="carousel-container">
      <Carousel responsive={responsive}>
        <div className="carousel blue">
          <img
            id="ship"
            src={shipwreck}
            alt="AI art of a shipwreck under a moody sea"
          ></img>
        </div>
        <div className="carousel pink">
          <img
            src={spaceship}
            id="spaceship"
            alt="round spaceship hovering over a red planet with a red sky"
          ></img>
        </div>
        <div className="carousel blue">
          <img
            src={sea}
            id="sea"
            alt="stormy atmosphere, tall monoliths that look like buildings coming out of the sea"
          ></img>
        </div>
        <div className="carousel pink">
          <img
            src={synthwave}
            id="synth"
            alt="four separate pictures of an industrial cityscape with a neon colour palette"
          ></img>
        </div>
        <div className="carousel blue">
          <img
            src={ball}
            id="ball"
            alt="glass ball with an ocean and waves inside it, moon in the background which you can see through the ball"
          ></img>
        </div>
        <div className="carousel pink">
          <img
            src={sunset}
            id="sunset"
            alt="illustrative drawing of a wavy sea with a small boat, big sunset in the background and birds in the sky"
          ></img>
        </div>
        <div className="carousel blue">
          <img
            src={clown}
            id="clown"
            alt="scary old clown in a hat and suit jacket"
          ></img>
        </div>
        <div className="carousel pink">
          <img
            src={towers}
            id="towers"
            alt="organic looking towers with a road between them, view from bottom up, blue sky with fluffy clouds"
          ></img>
        </div>
      </Carousel>
    </div>
  );
}
