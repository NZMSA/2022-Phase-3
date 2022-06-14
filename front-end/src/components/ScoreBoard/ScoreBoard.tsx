import { useEffect, useRef } from "react";
import { useAppSelector } from "../../store/hooks";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./ScoreBoard.css";
// import axios from "axios";

// const getURL: string = "PUT URL HERE";
// const postURL: string = "PUT URL HERE";

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
  const prevScore = useRef(0);
  const bestScore = useRef(0);

  const { score } = useAppSelector((store) => store.game);

  useEffect(() => {
    if (score !== prevScore.current) {
      prevScore.current = score;
      bestScore.current = Math.max(bestScore.current, score);
    }
  }, [score]);

  return (
    <Box className="scoreboard">
      <Box className="current">
        <Box
          key={Math.random()}
          className={score === prevScore.current ? "" : "show"}
          sx={{
            position: "absolute",
            top: "calc(50% + 3px)",
            right: "27%",
            zIndex: "100",
            fontSize: "20px",
            fontWeight: "700",
            opacity: "0",
          }}
        >
          +{score - prevScore.current}
        </Box>
        <Typography sx={{ color: "#eee4cf", fontWeight: "700" }}>
          SCORE
        </Typography>
        <Typography
          sx={{ color: "white", fontWeight: "700", fontSize: "25px" }}
        >
          {score}
        </Typography>
      </Box>
      <Box className="best">
        <Typography sx={{ color: "#eee4cf", fontWeight: "700" }}>
          BEST
        </Typography>
        <Typography
          sx={{ color: "white", fontWeight: "700", fontSize: "25px" }}
        >
          {Math.max(bestScore.current, score)}
        </Typography>
      </Box>
    </Box>
  );
}
