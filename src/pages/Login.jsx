import React, { useState } from 'react';
import "../styles/Login.css";

const Login = () => {
  const [userInfos, setUserInfos] = useState({
    email: '',
    password: '',
    lastname: '',
    firstname: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLogged(true);
    }, 2000);
  };

  const handleChange = e => {
    setUserInfos({ ...userInfos, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = e => {
    e.preventDefault();
    setIsEditing(false);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isLogged && !isEditing) {
    return (
      <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        <div className='bg-white rounded-lg shadow-lg p-10'>
          <h1 className='text-2xl mb-6'>Your Profile :</h1>
          <p className='mb-2'>Email : {userInfos.email}</p>
          <p className='mb-2'>Last Name : {userInfos.lastname}</p>
          <p className='mb-6'>First Name : {userInfos.firstname}</p>
          <div className='flex justify-between'>
            <button onClick={handleEdit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
            <button onClick={() => setIsLogged(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  } else if (isLogged && isEditing) {
    return (
      <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        <div className='bg-white rounded-lg shadow-lg p-10'>
          <form onSubmit={handleSave}>
            <input
              type="email"
              name="email"
              value={userInfos.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 mb-4 px-4 py-2 rounded w-full"
            />
            <input
              type="text"
              name="lastname"
              value={userInfos.lastname}
              onChange={handleChange}
              placeholder="Last Name"
              className="bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 mb-4 px-4 py-2 rounded w-full"
            />
            <input
              type="text"
              name="firstname"
              value={userInfos.firstname}
              onChange={handleChange}
              placeholder="First Name"
              className="bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 mb-6 px-4 py-2 rounded w-full"
            />
            <div className='flex justify-between'>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save
                </button>
                <button onClick={() => setIsLogged(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Logout
                </button>
            </div>
            </form>
        </div>
        </div>
    );
    } else {
    return (
      <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        <div className='bg-white rounded-lg shadow-lg p-10'>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={userInfos.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 mb-4 px-4 py-2 rounded w-full"
            />
            <input
              type="password"
              name="password"
              value={userInfos.password}
              onChange={handleChange}
              placeholder="Password"
              className="bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 mb-4 px-4 py-2 rounded w-full"
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    );
    }
};
export default Login;