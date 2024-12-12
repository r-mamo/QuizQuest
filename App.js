import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import Login from './components/Login';
import AvatarGenerator from './components/AvatarGenerator';
import ChallengeCreator from './components/ChallengeCreator';
import ChallengeSolver from './components/ChallengeSolver';
import Leaderboard from './components/Leaderboard';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <Login />;
  }

  return (
    <div>
      <h1>Welcome to Quiz Quest, {user.displayName}!</h1>
      <AvatarGenerator userId={user.uid} />
      <ChallengeCreator />
      <ChallengeSolver challengeId="some-challenge-id" />
      <Leaderboard />
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
}

export default App;
