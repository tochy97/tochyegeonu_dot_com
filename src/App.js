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
import { checkUser } from "./redux/actionCreators/authActionCreators";
import getYear from "./components/CalenderApp/calculation/getYear";
import getPast from "./components/CalenderApp/calculation/getPast";
import { isLeap } from "./components/CalenderApp/calculation/constants";
import Loading from "./components/common/Loading/Loading";
import { useWindowDimensions } from "./components/common/Functions";
import StarBackground from "./components/StarBackground/StarBackground";
function App() {
  const dispatch = useDispatch();
  const today = new Date();
  const stringDay = (today).toString();
  const thisYear = getYear(stringDay, isLeap(today.getFullYear()), today.getFullYear(), true);
  const myLife = getPast(1997, thisYear);
  const display = [];
    
  myLife.forEach((element) => {
    element.data.forEach(value => {
      display.push(value);
    })
  });
  const [footDisplay,setFootDisplay] = useState("");
  const {width, height} = useWindowDimensions();

  const { isLoggedIn, status, user } = useSelector(
    (state) =>({
      isLoggedIn:state.auth.isLoggedIn, 
      status:state.auth.status,
      user:state.auth.user
  }), shallowEqual);

  // useEffect(() => {
  //   if(document.readyState === "complete") {
  //     if(window.location.pathname.includes("history")){
  //       setFootDisplay("absolute");
  //     }
  //     else{
  //       setFootDisplay("")
  //     }
  //     if(!isLoggedIn){
  //       dispatch(checkUser());
  //     }
  //   }
  // }, []);

  return (
    <div className="">
      {
        myLife.length < 1
        ?
        <Loading size={25}/>
        :
        <BrowserRouter>
          <Nav/>  
          <Routes>
            <Route path="/" element={<Main calender={display}/>} />
            <Route path="/history" element={<History display={display} today={today}/>} />
            <Route path="/games" element={<Games />} />
            <Route path="/runner" element={<Runner />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <StarBackground/>
          <Footer display={footDisplay}/>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
