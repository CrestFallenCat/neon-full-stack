import "./CardAlt.css";
import beetle1 from "./pics/beetle-b.png";
import beetle2 from "./pics/beetle-y.png";
import beetle3 from "./pics/beetle-p.png";

function CardAlt() {
  return (
    <div className="allBugs">
      <div className="pic-para" id="white">
        <img className="beetle" src={beetle3}></img>
        <p>
          While AI art advances and poses challenges to the traditional notion
          of human creativity, it is important to recognize that art is not
          solely defined by technical proficiency or visual appeal.
        </p>
      </div>
      <div className="pic-para" id="yellow">
        <img className="beetle" src={beetle2}></img>
        <p>
          The inherent human touch and the inherent imperfections that emerge
          from the hands of an artist hold a unique charm that cannot be
          replicated by machines or algorithms.
        </p>
      </div>
      <div className="pic-para" id="blue">
        <img className="beetle" src={beetle1}></img>
        <p>
          People have a preference for investing their financial resources in
          artwork crafted by fellow human beings.There is an appreciation
          creative expression that emerges uniquely within our species.
        </p>
      </div>
    </div>
  );
}

export default CardAlt;
