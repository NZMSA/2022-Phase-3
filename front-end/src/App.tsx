import { Container } from "@mui/material";
import React from "react";
import "./App.css";
import LogicGameGrid from "./components/LogicGameGrid";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

function App() {
  return (
    <Container maxWidth="sm">
      <h1>2048 Clone</h1>
      <ScoreBoard />
      <LogicGameGrid width={4} height={4} />
    </Container>
  );
}

export default App;
