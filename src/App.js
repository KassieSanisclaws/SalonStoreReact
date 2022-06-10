import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/headers/topbar/topbar";
import "./App.css";
import Home from "./routes/pages/home/home";
import Login from "./routes/pages/login/login";
import Register from "./routes/pages/register/register";
import ContactUs from "./routes/pages/contactUs/contactUs";
import Favourites from "./routes/pages/favourites/favourites";
import AboutUs from "./routes/pages/aboutUs/aboutUs";
import ProtectedRoutes from "./routes/protectedRoutes/protectedRoutes";
import Footer from "./components/footers/footer";
import HotListItemScreen  from "./routes/pages/screens/hotListItems-screen/hotListItemScreen";


const App = () => { 
const [hamburgerDisplayOpen, setHamburgerDisplayOpen] = useState(false);
  return (  
  <BrowserRouter>
      <div className="grid-section-container">
        <header>
          <div className="header-content">
             <TopBar/>
          </div>     
        </header>
         
         <main>
          <Routes>
                  <Route path="/" index  element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>
                   <Route path="/contactUs" element={<ContactUs/>}/>
                   <Route path="/aboutUs" element={<AboutUs/>}/>
                   <Route path="/hotListItem/:id" element={<HotListItemScreen/>}/>
                  <Route element={<ProtectedRoutes exact path="/"/>}>
                  <Route path="/favourites" element={<Favourites />}/>
                  
              </Route> 
           </Routes>
         </main>

        <footer><Footer/></footer>
      </div>
 </BrowserRouter>
  );
}

export default App;
