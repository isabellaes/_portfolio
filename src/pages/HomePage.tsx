import { Button } from "@mui/material";
import "./homePage.scss";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigation = useNavigate();
  return (
    <div className="homePage">
      <div className="content">
        <h1>Frontendutvecklare</h1>
        <h3>Isabella Ekdahl Sahlberg</h3>
        <Button
          onClick={() => {
            navigation("contact");
          }}
        >
          Kontakta mig
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
