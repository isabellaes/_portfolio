import "./home.scss";
import Button from "../button/Button";

const Home = () => {
  return (
    <div id="HOME" className="home">
      <h1>Frontendutvecklare</h1>
      <h3>Isabella Ekdahl Sahlberg</h3>

      <br />
      <a href="#CONTACT">
        <Button text={"Kontakta mig"} onClick={() => console.log("clicked")} />
      </a>
    </div>
  );
};

export default Home;
