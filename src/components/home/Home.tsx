import "./home.scss";
import Button from "../button/Button";

const Home = () => {
  return (
    <div className="home">
      <h1>WEBBUTVECKLARE</h1>
      <h2>Med fokus på react och typescript.</h2>
      <br />
      <Button text={"Kontakta mig"} onClick={() => console.log("clicked")} />
    </div>
  );
};

export default Home;
