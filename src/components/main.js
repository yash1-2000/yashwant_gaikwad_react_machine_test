import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Main({ PlayerData }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Team</th>
            <th>Total matches</th>
          </tr>
        </thead>
        <tbody>
          {PlayerData.map((Player, key) => (
            <tr key={key}>
              <td>
                {" "}
                <Link
                  to={
                    Player.Id === undefined
                      ? `/player/${Player.id}`
                      : `/player/${Player.Id}`
                  }
                >
                  {Player.firstName} &nbsp; {Player.Lastname} &nbsp;{" "}
                </Link>
              </td>
              <td>{Player.player_type}</td>
              <td>{Player.teamName}</td>
              <td>{Player.total_match}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Main;
