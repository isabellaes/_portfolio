import "./home.scss";
import Button from "../button/Button";

const Home = () => {
  return (
    <div id="HOME" className="home">
      <h1>WEBBUTVECKLARE</h1>
      <h2>Med fokus på react och typescript.</h2>
      <br />
      <a href="#CONTACT">
        <Button text={"Kontakta mig"} onClick={() => console.log("clicked")} />
      </a>
    </div>
  );
};

export default Home;
