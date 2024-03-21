import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  /* const [loading, setLoading] = useState<boolean>(false); */
  const [errors, setErrors] = useState<string>("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    /*  setLoading(true); */

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
      {/*    {loading ? <CircularProgress /> : <p></p>} */}
      <label htmlFor="name">Namn: </label>
      <input
        required
        id="name"
        placeholder="Namn"
        onChange={(e) => setName(e.currentTarget.value)}
      />

      <label htmlFor="email">Email: </label>
      <input
        required
        id="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      {errors}

      <label htmlFor="message">Meddelande: </label>
      <input
        required
        id="message"
        placeholder="Meddelande"
        onChange={(e) => setMessage(e.currentTarget.value)}
      />

      <button>Skicka</button>
    </form>
  );
};

export default ContactForm;
