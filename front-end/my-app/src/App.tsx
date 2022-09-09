import "./App.css";
import Search from "./Components/Search";
import Login from "./Components/Login";
import Chat from "./Components/Webchat";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App () {

    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Login/>}></Route>
                <Route path={"/Search"} element={<Search/>}></Route>
                <Route path={"/Chat"} element={<Chat/>}></Route>
            </Routes>
        </Router>
    )
    
}

export default App;