import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    width: 60,
    borderRadius: 5
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "dark" ? 200 : 700]
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "lightblue"
  }
}))(LinearProgress);

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="card">
        <h2>{props.name}</h2>
        <img src={props.image} alt="pokemon" />
        <div>
          <ul>
            <li>
              HP:
              <div className="margin-bar">
                <BorderLinearProgress
                  variant="determinate"
                  value={props.base.HP}
                />
              </div>
            </li>
            <li>
              Attack:
              <div className="margin-bar">
                <BorderLinearProgress
                  variant="determinate"
                  value={props.base.Attack}
                />
              </div>
            </li>
            <li>
              Defense:
              <div className="margin-bar">
                <BorderLinearProgress
                  variant="determinate"
                  value={props.base.Defense}
                />
              </div>
            </li>
            <li>
              Speed:
              <div className="margin-bar">
                <BorderLinearProgress
                  variant="determinate"
                  value={props.base.Speed}
                />
              </div>
            </li>
          </ul>
        </div>
        <div>
          {props.types.map((type) => {
            return <span className={`types ${type}`}>{type}</span>;
          })}
        </div>
      </div>
    </div>
  );
}
