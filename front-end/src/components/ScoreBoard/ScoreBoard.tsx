import React, { useEffect, useRef, useState } from "react";
import "./ScoreBoard.css";
import { getScore } from "../../store/slices/gameSlice";
import { useAppSelector } from "../../store/hooks";
// import axios from "axios";

const getURL: string = "PUT URL HERE";
const postURL: string = "PUT URL HERE";

// // get score to backend TODO
// let getScore = () => {
//   axios
//     .get(getURL)
//     .then((response: any) => {
//       score = response.score;
//     })
//     .catch((error: any) => {
//       console.log(error);
//     });
// };

// // post score from backend TODO
// let postScore = () => {
//   axios
//     .post(postURL, {
//       score,
//     })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export default function ScoreBoard() {
  return (
    <div className="ScoreBoard">
      <div className="Current">
        <div>CURRENT</div>
        <div className="scoreChange">+12</div>
        <div className="Score">{useAppSelector(getScore)}</div>
      </div>
      <div className="Highest">
        <div>BEST</div>
        <div className="Score">{useAppSelector(getScore)}</div>
      </div>
    </div>
  );
}
