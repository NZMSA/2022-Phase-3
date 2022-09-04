import React from "react";
import "./App.css";
import Search from "./Components/Search";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App () {

    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Login/>}></Route>
                <Route path={"/Search"} element={<Search/>}></Route>
            </Routes>
        </Router>
    )
    
}

export default App;