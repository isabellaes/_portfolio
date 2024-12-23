import profile from "../assets/20240429_113312.jpg";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { skills } from "../data";
import "./aboutPage.scss";
import Footer from "../components/footer/Footer";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <h1>Om mig</h1>

      <p>
        <img src={profile} alt="profil-bild" />
        Hej! Jag heter Isabella Ekdahl Sahlberg och är en passionerad och
        ambitiös utvecklarstudent. När jag inte programmerar gillar jag att lösa
        sudoku, kolla serier eller umgås med min familj.
        <br />
        Min programmeringsresa började för ungefär tre år sedan när jag
        påbörjade min utbildning till systemutvecklare på Borås YH. Det blev 2
        intensiva och lärorika år innan jag tog examen i juni 2023. Under
        utbildningen läste jag mestadels backendutveckling, men också en kortare
        del med webb- och apputveckling.
        <br />
        <br />
        Efter examen valde jag att fortsätta mina studier, denna gång
        specialiserad på frontend-utveckling. Jag läser nu min andra termin på
        Borås YH, och jag har redan skaffat mig betydande kunskap och
        färdigheter. Jag ser med stor förväntan fram emot vad som väntar mig när
        jag närmar mig examen sommaren 2025.
        <br />
      </p>
      <div className="skills">
        <h3>Utbildningar</h3>

        <p>Borås Yrkeshögskola</p>
        <p className="italic">Frontendutvecklare, React - Nuvarande</p>
        <p className="italic">Systemutvecklare .Net - Examen 06/23</p>
        <h3>Stack</h3>
        <Stack spacing={0.5} direction="row" useFlexGap flexWrap="wrap">
          {skills.map((x) => (
            <Chip
              label={x}
              variant="outlined"
              key={x}
              sx={{
                marginInline: "0.6em",
                color: "white",
                outlineColor: "rgb(166, 0, 255)",
              }}
              color="primary"
            ></Chip>
          ))}
        </Stack>
      </div>
      <Footer color="white" />
    </div>
  );
};

export default AboutPage;
