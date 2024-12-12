import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/footer/Footer";
import "./contactPage.scss";

const ContactPage = () => {
  return (
    <div className="contactPage">
      <ContactForm />
      <Footer color="black" />
    </div>
  );
};

export default ContactPage;
