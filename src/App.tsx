import "./App.scss";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Container from "./components/projects/container/Container";
import Home from "./components/home/Home";
import ContactForm from "./components/contact/ContactForm";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Container />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
