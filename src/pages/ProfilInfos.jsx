import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/auth";
import "tailwindcss/tailwind.css";

const ProfileInfos = () => {
const [cookies] = useCookies(["uid"]);
const [displayName, setDisplayName] = useState("");
const [email, setEmail] = useState("");
const [photoURL, setPhotoURL] = useState("");
const [isEditing, setIsEditing] = useState(false);

useEffect(() => {
if (cookies.uid) {
const db = firebase.firestore();
db.collection("user")
.doc(cookies.uid)
.get()
.then((doc) => {
if (doc.exists) {
const data = doc.data();
setDisplayName(data.displayName || "");
setEmail(data.email || "");
setPhotoURL(data.photoURL || "");
} else {
console.log("No such document!");
}
})
.catch((error) => {
console.log("Error getting document:", error);
});
}
}, [cookies.uid]);

const handleSave = () => {
const user = firebase.auth().currentUser;
const db = firebase.firestore();

if (user) {
  user
    .updateProfile({
      displayName: displayName,
      photoURL: photoURL,
    })
    .then(() => {
      setIsEditing(false);
      console.log("Profile updated successfully!");
      db.collection("user")
        .doc(cookies.uid)
        .set({
          displayName: displayName,
          email: email,
          photoURL: photoURL,
          uid: cookies.uid,
        })
        .then(() => {
          console.log("User document created successfully!");
        })
        .catch((error) => {
          console.error("Error creating user document:", error);
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
<button
className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
onClick={handleSave}
>
Save

</button>
</div>
) : (
<div className="bg-white rounded-lg shadow-lg p-4">
<h2 className="text-2xl font-bold mb-4">Profile</h2>
<div className="form-group mb-4">
<label htmlFor="displayName" className="block font-bold mb-2">
Display Name:
</label>
<p className="text-gray-700">{displayName}</p>
</div>
<div className="form-group mb-4">
<label htmlFor="email" className="block font-bold mb-2">
Email:
</label>
<p className="text-gray-700">{email}</p>
</div>
<div className="form-group mb-4">
<label htmlFor="photoURL" className="block font-bold mb-2">
Photo URL:
</label>
<p className="text-gray-700">{photoURL}</p>
{photoURL ? (
<img
src={photoURL}
alt="Profile"
className="w-32 h-32 rounded-full mt-4"
/>
) : null}
</div>
<button
className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
onClick={() => setIsEditing(true)}
>
Edit

</button>
</div>
)}
</div>
);
};

export default ProfileInfos;
