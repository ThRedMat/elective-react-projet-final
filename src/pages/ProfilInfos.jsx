import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/auth";
import "tailwindcss/tailwind.css";

const ProfileInfos = ({ currentUser }) => {
const [displayName, setDisplayName] = useState("");
const [email, setEmail] = useState("");
const [photoURL, setPhotoURL] = useState("");
const [isEditing, setIsEditing] = useState(false);
const [uid, setUid] = useState("");

useEffect(() => {
if (currentUser) {
setDisplayName(currentUser.displayName);
setEmail(currentUser.email);
setPhotoURL(currentUser.photoURL);
setUid(currentUser.uid);
}
}, [currentUser]);

const handleSave = () => {
const user = firebase.auth().currentUser;

if (user) {
  user.updateProfile({
    displayName: displayName,
    photoURL: photoURL,
  })
    .then(() => {
      setIsEditing(false);
      console.log("Profile updated successfully!");
      firebase.firestore().collection("utilisateur").doc(uid).update({
        displayName: displayName,
        email: email,
        photoURL: photoURL,
      })
      .then(() => {
        console.log("User document updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating user document:", error);
      });
    })
    .catch((error) => {
      console.error("Error updating profile:", error);
    });
}
};

return (
<div className="max-w-md mx-auto">
{isEditing ? (
<div className="bg-white rounded-lg shadow-lg p-4">
<h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
<div className="form-group mb-4">
<label htmlFor="displayName" className="block font-bold mb-2">
Display Name:
</label>
<input
type="text"
id="displayName"
className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
value={displayName}
onChange={(e) => setDisplayName(e.target.value)}
/>
</div>
<div className="form-group mb-4">
<label htmlFor="email" className="block font-bold mb-2">
Email:
</label>
<input
type="email"
id="email"
className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
</div>
<div className="form-group mb-4">
<label htmlFor="photoURL" className="block font-bold mb-2">
Photo URL:
</label>
<input
type="text"
id="photoURL"
className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
value={photoURL}
onChange={(e) => setPhotoURL(e.target.value)}
/>
</div>
<div className="flex justify-between">
<button
onClick={() => setIsEditing(false)}
className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline flex items-center"
>
<svg
className="fill-current w-4 h-4 mr-2"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
>
<path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
</svg>
<span>Cancel</span>
</button>
<button
onClick={handleSave}
className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
>
<svg
className="fill-current w-4 h-4 mr-2"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
>
<path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />

</svg>
</button>
</div>
</div>
) : (
<div className="bg-white rounded-lg shadow-lg p-4">
<h2 className="text-2xl font-bold mb-4">Profile</h2>
<div className="flex items-center mb-4">
<img
src={photoURL}
alt="avatar"
className="h-12 w-12 rounded-full mr-4"
/>
<div>
<p className="text-gray-700 font-bold">{displayName}</p>
<p className="text-gray-700 text-sm">{email}</p>
</div>
</div>
<button
onClick={() => setIsEditing(true)}
className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
>
<svg
className="fill-current w-4 h-4 mr-2"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
>
<path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
</svg>
</button>
</div>
)}
</div>
);
};

export default ProfileInfos;
