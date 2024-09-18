import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import History from "./pages/History/History";
import Footer from "./components/Footer/Footer";
import StarBackground from "./components/StarBackground/StarBackground";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/history" element={<History />} />
        </Routes>
        <StarBackground />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
