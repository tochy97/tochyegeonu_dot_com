import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Runner from "./games/Runner/Runner";
import Games from "./pages/Games/Games";
import History from "./pages/History/History";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Loading from "./components/common/Loading/Loading";
import { useWindowDimensions } from "./components/common/Functions";
import StarBackground from "./components/StarBackground/StarBackground";
function App() {
  const dispatch = useDispatch();
  const [footDisplay, setFootDisplay] = useState("");
  const { width, height } = useWindowDimensions();

  const { isLoggedIn, status, user } = useSelector(
    (state) => ({
      isLoggedIn: state.auth.isLoggedIn,
      status: state.auth.status,
      user: state.auth.user
    }), shallowEqual);

  return (
    <div className="">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/history" element={<History />} />
          <Route path="/games" element={<Games />} />
          <Route path="/runner" element={<Runner />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <StarBackground />
        <Footer display={footDisplay} />
      </BrowserRouter>
    </div>
  );
}

export default App;
