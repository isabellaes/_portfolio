import "./homePage.scss";
import { useNavigate } from "react-router";
import Footer from "../components/footer/Footer";
import profile from "../assets/20240429_113312.jpg";

const HomePage = () => {
  const navigation = useNavigate();
  return (
    <div className="homePage">
      <div className="content">
        <div className="flex-row">
          <div className="flex-column">
            <h1>Isabella Ekdahl Sahlberg</h1>
            <h2>Fullstackutvecklare</h2>

            <button
              onClick={() => {
                navigation("contact");
              }}
            >
              KONTAKTA MIG
            </button>
          </div>
          <img src={profile} alt="profil-bild" />
        </div>
      </div>
      <Footer color="white" />
    </div>
  );
};

export default HomePage;
