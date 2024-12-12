import "./projectPage.scss";
import Footer from "../components/footer/Footer";
import pyssel from "../assets/pysselfrun.png";
import poster from "../assets/poster-store.png";

const ProjectPage = () => {
  return (
    <div className="projectPage">
      <div className="content">
        <h1>Pysselfrun</h1>

        <img src={pyssel} alt="Pysselfrun" />
        <p>Detta är en hemsida jag byggt åt företaget Pysselfrun.</p>
        <p>Projektet är byggt med react och typescript.</p>
        <a href="https://pysselfrun.se/">SE LIVE</a>
      </div>

      <div className="content">
        <h1>Poster Store - Webbshop</h1>

        <img src={poster} alt="Poster store webbshop" />
        <p>En Webbshop som är ett hobbyprojekt jag byggt.</p>
        <p>Projektet är byggt med react och typescript.</p>
        <a href="https://github.com/isabellaes/poster-store">GITHUB REPO</a>
      </div>

      <Footer color="black" />
    </div>
  );
};

export default ProjectPage;
