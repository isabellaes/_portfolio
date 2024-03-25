import { useState } from "react";
import emailjs from "@emailjs/browser";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./contactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<string>("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const emailmessage = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_0zqihxk",
        "template_mr474fg",
        emailmessage,
        "5KAAPu8vXIV-IniE2"
      )
      .then(
        () => {
          // show the user a success message
          alert("Ditt meddelande är nu skickat!");
        },
        () => {
          // show the user an error
          alert("Någonting gick fel. Försök igen!");
        }
      );
  };
  return (
    <div id="CONTACT" className="contact">
      <h1>Kontakt</h1>
      <div className="contact-form-box">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (validateEmail(email) !== true) {
              setErrors("Format: email@mail.se");
            }
            if (validateEmail(email)) {
              setErrors("");
              sendEmail(e);
              e.currentTarget.reset();
            }
          }}
          className={"contact-form"}
        >
          <h3>Kontakta mig här</h3>
          <input
            required
            id="name"
            placeholder="Namn"
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <input
            required
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          {errors}
          <input
            required
            id="message"
            placeholder="Meddelande"
            onChange={(e) => setMessage(e.currentTarget.value)}
          />

          <button>SKICKA</button>
        </form>
        <div className="row">
          <a href="https://www.linkedin.com/in/isabellaes/">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="https://github.com/isabellaes">
            <GitHubIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
