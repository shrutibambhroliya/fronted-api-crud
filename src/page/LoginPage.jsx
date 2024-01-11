import React, { useState } from 'react';
import "./LoginPage.css";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const aaa = useNavigate()
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const loginData = () => {
        sessionStorage.setItem("username", "username");
        console.log("username::::", username);
        aaa('/')
    }
    return (
        <div>
            <center>
                <div className="form ">
                    <label htmlFor="text">
                        UserName
                        <input type="text"
                            value={ username }
                            onChange={ (e) => setUserName(e.target.value) } />
                    </label>
                    <br />
                    <br />
                    <label htmlFor="text">Password
                        <input type="text"
                            value={ password }
                            onChange={ (e) => setPassword(e.target.value) }
                        />
                    </label>
                    <br />
                    <br />
                    <button className='btn-log'
                        onClick={ loginData }>LogIn</button>
                </div>
            </center>
        </div>
    )
}

export default LoginPage
