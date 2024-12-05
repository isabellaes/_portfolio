import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import ProjectPage from "./pages/ProjectPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="project/:id" element={<ProjectPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
