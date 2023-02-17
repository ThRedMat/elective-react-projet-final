import React, { useState } from 'react';
import "../styles/Login.css";
import Navbar from '../components/Navbar';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

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
            <div className='profile'>
                <h1>Your Profile :</h1>
                <p>Email : {userInfos.email}</p>
                <p>Last Name : {userInfos.lastname}</p>
                <p>First Name : {userInfos.firstname}</p>
                <div className='boutons'>
                    <button onClick={handleEdit} className="btn1">Edit</button>
                    <button onClick={() => setIsLogged(false)} className="btn2">Logout</button>
                </div>
            </div>

        );
    } else if (isLogged && isEditing) {
        return (
            <div className='edit-profile'>
                <h1>Edit your profile</h1>
                <form onSubmit={handleSave}>
                    <input
                        type="email"
                        name="email"
                        value={userInfos.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        name="lastname"
                        value={userInfos.lastname}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                    <input
                        type="text"
                        name="firstname"
                        value={userInfos.firstname}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                    <div className='btns'>
                        <button onClick={() => setIsEditing(false)} className="bt2">Cancel</button>
                        <button type="submit" className='bt1'>Save</button>
                    </div>
                </form>
            </div>
        );
    }

    return (

        <><div className='home'>
            <Link to="/">
                <AiFillHome className="text-black hover:text-gray-400" />
            </Link>
        </div><div className='Login'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        value={userInfos.email}
                        onChange={handleChange}
                        placeholder="Email" />
                    <input
                        type="password"
                        name="password"
                        value={userInfos.password}
                        onChange={handleChange}
                        placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div></>

    );
};

export default Login;