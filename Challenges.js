import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';

function ChallengeCreator() {
  const [challenge, setChallenge] = useState({
    title: '',
    questions: [],
  });

  const createChallenge = async () => {
    try {
      await addDoc(collection(db, 'challenges'), {
        ...challenge,
        creatorId: auth.currentUser.uid,
        createdAt: new Date(),
      });
    } catch (error) {
      console.error('Error creating challenge:', error);
    }
  };

  // Implement form for challenge creation

  return (
    <div>
      <h2>Create a Challenge</h2>
      {/* Add form elements here */}
      <button onClick={createChallenge}>Create Challenge</button>
    </div>
  );
}

export default ChallengeCreator;
