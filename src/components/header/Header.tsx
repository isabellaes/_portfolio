import "./header.scss";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";

const Header = () => {
  const navigation = useNavigate();
  return (
    <header>
      <nav>
        <Button
          id="basic-button"
          onClick={() => {
            navigation("/");
          }}
          style={{ color: "white" }}
        >
          Hem
        </Button>
        <Button
          id="basic-button"
          onClick={() => {
            navigation("about");
          }}
          style={{ color: "white" }}
        >
          Om mig
        </Button>

        <Button
          id="basic-button"
          onClick={() => {
            navigation("project");
          }}
          style={{ color: "white" }}
        >
          Projekt
        </Button>
        <Button
          id="basic-button"
          onClick={() => {
            navigation("contact");
          }}
          style={{ color: "white" }}
        >
          Kontakta mig
        </Button>
      </nav>
    </header>
  );
};

export default Header;
