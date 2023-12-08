import Hero from "./images/hero-img.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create");
  };
  return (
    <div className="landing-page">
      <div className="hero">
        <img src={Hero} alt="Hero-image" />
        <div className="texts">
          <h2>The Web App You Never Knew You Needed</h2>
          <div>
            <button onClick={handleClick}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
