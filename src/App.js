import React from "react";
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer"


const App = () => {

  return (
    
    
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer />} />

            
            <Route path="/profile/" element={<ProfileContainer  />} />


            <Route path="/users" element={<UsersContainer/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>);
}

export default App;
