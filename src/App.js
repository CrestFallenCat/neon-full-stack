import "./App.css";
import Footer from "./components/footer";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import AnimatedPage from "./components/AnimatedPage";

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <Router>
          <nav>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              {" "}
              Home
            </NavLink>
            <NavLink to={"/Info"}> What next? </NavLink>
            <NavLink id="game" to={"/Game"}>
              The Game
            </NavLink>
            <NavLink id="comments" to={"/Comments"}>
              Talk
            </NavLink>
          </nav>
          <AnimatedPage />
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
