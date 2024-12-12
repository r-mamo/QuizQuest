import React, { useEffect, useState } from 'react';
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from 'firebase/firestore';
import { db } from '../firebase';

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const q = query(
        collection(db, 'userScores'),
        orderBy('score', 'desc'),
        limit(10)
      );
      const querySnapshot = await getDocs(q);
      setLeaderboardData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    };
    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboardData.map((entry, index) => (
          <li key={entry.id}>
            {index + 1}. {entry.username}: {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
