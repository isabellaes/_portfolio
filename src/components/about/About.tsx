import "./about.scss";
import profilbild from "../../assets/profilbild.jpg";

const About = () => {
  return (
    <div id="ABOUT" className="about">
      <h1>Om mig</h1>

      <p>
        <img src={profilbild} alt="profil-bild" />
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
        <br />
        Jag söker för närvarande en praktikplats på ett företag där jag kan
        tillämpa och utveckla mina färdigheter. Min första praktikplats är
        planerad att starta i september 2024 och pågå i fyra veckor, följt av en
        andra praktikplats som startar i januari 2025 och varar ungefär 20
        veckor. Jag ser fram emot att hitta en plats där jag kan tillämpa det
        jag lärt mig och fortsätta att växa. Även om min passion ligger inom
        frontendutveckling är jag öppen för olika möjligheter. Om du är intresserad,
        tveka inte att kontakta mig!
      </p>
    </div>
  );
};

export default About;
