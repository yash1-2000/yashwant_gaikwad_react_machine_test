import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../App.css";

function Player({ PlayerData }) {
  const [Player, setPLayer] = useState(null);

  useEffect(() => {
    const GetPlayer = PlayerData.find(
      (element) => element.Id === Number(playerId.PlayerId)
    );

    if (GetPlayer === undefined) {
      const GetPlayer_2 = PlayerData.find(
        (element) => element.id === Number(playerId.PlayerId)
      );

      setPLayer(GetPlayer_2);
    } else {
      setPLayer(GetPlayer);
    }
  }, [Player, PlayerData]);

  let playerId = useParams();

  return (
    <div>
      {Player == null ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <div
            className="img-container"
            style={{
              backgroundImage:
                Number(playerId.PlayerId) === 319946
                  ? `url(../../images/${playerId.PlayerId}.png)`
                  : `url(../../images/${playerId.PlayerId}.jpeg)`,
            }}
          ></div>
          <h3>{playerId.PlayerId}</h3>
          <h3>
            {Player.firstName} &nbsp; {Player.Lastname}{" "}
          </h3>
          <h3>
            Next match with {Player.upcomingMatchesList.against_team} on{" "}
            {Player.upcomingMatchesList.next_match_date}{" "}
          </h3>
          <h3>Total runs : {Player.total_run}</h3>
          <h3>Total wickets : {Player.total_wickets}</h3>
          <h3>Total century : {Player.total_centuries}</h3>
          <h3>
            Average run : {Math.floor(Player.total_run / Player.total_match)}
          </h3>
          <h3>
            Average wickets :{" "}
            {Math.ceil(Player.total_wickets / Player.total_match)}
          </h3>
          <Link to={"/"}>Back</Link>
        </div>
      )}
    </div>
  );
}

export default Player;
