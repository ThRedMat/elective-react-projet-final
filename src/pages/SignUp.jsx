import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, push, set } from 'firebase/database';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

import { FaEnvelope, FaLock } from 'react-icons/fa';
import { RiUser3Fill } from 'react-icons/ri';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // create user with email and password
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        // save user data to Firebase Realtime Database
        const db = getDatabase();
        const usersRef = ref(db, 'users');
        const newUserRef = push(usersRef);
        set(newUserRef, {
          username: username,
          email: email,
          uid: user.uid
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white rounded shadow p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-8 text-center">S'inscrire</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              <span className="flex items-center">
                <FaEnvelope className="mr-2" /> Email:
              </span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              <span className="flex items-center">
                <FaLock className="mr-2" /> Mot de passe:
              </span>
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link to="/">
                          <button

              type="submit" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              S'enregistrer
            </button>
            </Link>
            <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Vous avez d??j?? un compte?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
