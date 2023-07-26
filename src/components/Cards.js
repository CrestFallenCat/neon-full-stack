import "./Cards.css";
import beetle1 from "./pics/beetle-b.png";
import beetle2 from "./pics/beetle-y.png";
import beetle3 from "./pics/beetle-p.png";

function Cards() {
  return (
    <div className="all-cards">
      <div className="container">
        <div className="card">
          <div className="face face1" id="pink">
            <div className="content">
              <img className="bugs" src={beetle3}></img>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                While AI art advances and poses challenges to the traditional
                notion of human creativity, it is important to recognize that
                art is not solely defined by technical proficiency or visual
                appeal.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="face face1" id="yellow">
            <div className="content">
              <img className="bugs" src={beetle2}></img>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                The inherent human touch and the inherent imperfections that
                emerge from the hands of an artist hold a unique charm that
                cannot be replicated by machines or algorithms.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="face face1" id="blue">
            <div className="content">
              <img className="bugs" src={beetle1}></img>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                People have a preference for investing their financial resources
                in artwork crafted by fellow human beings.There is an
                appreciation creative expression that emerges uniquely within
                our species.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
