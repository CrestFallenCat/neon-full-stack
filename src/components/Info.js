import "./Info.css";
import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";
import CardAlt from "./CardAlt";
import redBrain from "./pics/redBrain.png";
import lizardPink from "./pics/lizard1.png";
import lizardYellow from "./pics/lizard2.png";
import lizardBlue from "./pics/lizard3.png";

export function Info() {
  const mountCards = window.innerWidth > 1400;
  return (
    <motion.div
      key="home"
      className="home"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div>
        <h1 id="title">Future of art?</h1>
      </div>

      <div>
        <div className="first-section">
          <div className="lizard-para">
            <img className="lizards" src={lizardPink}></img>
            <p>
              Traditionally, human art has been celebrated for its uniqueness
              and the inherent human experiences and emotions it encapsulates.
              AI has shown that it can generate artworks that possess similar
              qualities, blurring the line between what is created by humans and
              what is created by machines.
            </p>
          </div>
          <div className="lizard-para">
            <img className="lizards" src={lizardYellow}></img>
            <p>
              This advancement has sparked worry among artists who fear that
              their livelihoods may be threatened. With AI capable of generating
              art that is aesthetically pleasing and conceptually rich, some
              artists feel that their creative expertise is being overshadowed.
            </p>
          </div>
          <div className="lizard-para">
            <img className="lizards" src={lizardBlue}></img>
            <p>
              The impact of AI on the art industry raises significant questions
              about cost and efficiency. Creating art is often a time-consuming
              process that can take weeks, if not months, to complete. For
              businesses or individuals commissioning artwork, this extended
              timeline can result in higher costs and delayed deliverables.
            </p>
          </div>
        </div>
        <div div className="red-brain">
          <p className="brain-para">
            AI offers a faster alternative. Machine learning algorithms can
            analyze vast amounts of data and generate art in a fraction of the
            time it would take a human artist. This accelerated production
            process has the potential to attract businesses and clients looking
            for quick turnaround times.
          </p>
          <img src={redBrain}></img>
          <p className="brain-para">
            The advent of artificial intelligence has sparked diverse
            perspectives among artists. While some may view AI as a potential
            threat, others have eagerly embraced it as a valuable tool for
            artistic exploration and inspiration. This group of artists
            recognizes AI as a unique collaborator that can enhance and augment
            their creative process.
          </p>
        </div>

        <div className="human-art">
          <p>There will always be a place for us</p>
          {mountCards ? <Cards /> : <CardAlt />}
        </div>
      </div>
    </motion.div>
  );
}

export default Info;
