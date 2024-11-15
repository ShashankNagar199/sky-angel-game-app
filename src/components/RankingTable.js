import React, { useState } from "react";
import "../App.css";

const RankingTable = ({ ranking }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const playersPerPage = 5;

  // Calculate ranks with ties
  const rankedPlayers = ranking.map((player, index, arr) => {
    // Determine rank based on previous player
    if (
      index > 0 &&
      player.stars === arr[index - 1].stars &&
      player.time === arr[index - 1].time
    ) {
      player.rank = arr[index - 1].rank;
    } else {
      player.rank = index + 1;
    }
    return player;
  });

  const startIndex = currentPage * playersPerPage;
  const currentPlayers = rankedPlayers.slice(
    startIndex,
    startIndex + playersPerPage
  );

  const nextPage = () => {
    if (startIndex + playersPerPage < ranking.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="ranking">
      <h2>Leaderboard</h2>
      <table className="ranking-table">
        <thead>
          <tr>
            <th className="rank">Rank</th>
            <th className="name">Name</th>
            <th className="stars">Stars</th>
            <th className="time">Time (Seconds)</th>
          </tr>
        </thead>
        <tbody>
          {currentPlayers.map((player, index) => (
            <tr key={startIndex + index}>
              <td className="rank">{player.rank}</td>
              <td className="name">{player.name}</td>
              <td className="stars">{player.stars}</td>
              <td className="time">{player.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-controls">
        <button onClick={previousPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={startIndex + playersPerPage >= ranking.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RankingTable;