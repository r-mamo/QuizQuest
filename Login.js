import React from 'react';
import { signInWithGoogle } from '../firebase';

function Login() {
  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      // Redirect to main app or update state
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div>
      <h2>Welcome to Quiz Quest</h2>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
}

export default Login;
