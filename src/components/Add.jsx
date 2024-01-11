import React, { useState } from 'react';
import './Add.css';
import 'boxicons/css/boxicons.min.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Add = () => {

    // const aaa = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");



    const AddData = async () => {
        const data = { name, email, password, username };

        await fetch("http://localhost:2021/api/create-data", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data })
        })
            // .then(res => res.json())
            .then((all) => {
                console.log(all);

                if (all.ok) {

                    setName('');
                    setEmail('');
                    setPassword('');
                    setUserName('');

                    toast.success("Data Added Successfully!", {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000,
                    });
                }
                else {
                    toast.error("Failed to add data!", {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000,
                    });
                }
            })
    }
    return (
        <div>

            <div>
                <Link to={ '/' }> <i style={ { color: "white", fontSize: "35px" } } class='bx bx-left-arrow-alt'></i></Link>
            </div>



            <center>
                <div className="form">
                    <label htmlFor="text">Name
                        <br />
                        <input type="text"
                            value={ name }
                            onChange={ (e) => setName(e.target.value) } /></label>
                    <br />
                    <br />
                    <label htmlFor="text">Email
                        <br />
                        <input type="text"
                            value={ email }
                            onChange={ (e) => setEmail(e.target.value) } /></label>
                    <br />
                    <br />
                    <label htmlFor="text">Password
                        <br />
                        <input type="number"
                            value={ password }
                            onChange={ (e) => setPassword(e.target.value) }
                        />
                    </label>
                    <br />
                    <br />
                    <label htmlFor="text">UserName
                        <br />
                        <input type="text"
                            value={ username }
                            onChange={ (e) => setUserName(e.target.value) }
                        /></label>
                    <br />
                    <br />
                    <button className="btns"
                        onClick={ AddData }
                    >Add</button>
                </div>
            </center>
        </div>
    )
}

export default Add
