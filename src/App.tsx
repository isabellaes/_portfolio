import "./App.scss";
import About from "./components/about/About";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Container from "./components/projects/container/Container";

function App() {
  return (
    <>
      <Header />
      <Button />
      <About />
      <Container />
      <Footer />
    </>
  );
}

export default App;
