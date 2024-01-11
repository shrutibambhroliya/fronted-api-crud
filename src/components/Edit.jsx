import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import './Edit.css'
const Edit = () => {


    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [loader, setLoader] = useState(false);

    console.log("id::", id);
    const editData = async () => {
        setLoader(true)
        await fetch(` http://localhost:2021/api/get-edit-data/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then((data) => {
                console.log("editData::", data);
                setName(data.Name);
                setEmail(data.Email);
                setPassword(data.Password);
                setUserName(data.UserName);


            })
            .catch(err => console.log(err));
    };

    setTimeout(() => {
        setLoader(false)
    }, 500)

    useEffect(() => {
        editData()
    }, [id]);


    const updateData = async () => {

        const data = { Name: name, Email: email, Password: password, UserName: username }
        await fetch(`http://localhost:2021/api/update-data/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data })
        }).then(res => res.json())
            .then((data) => {
                console.log("updateData::", data);

                // editData()
            })
            .catch(err => console.log(err));

    };

    return (
        <div>
            {
                loader && <div className='loader-1'>
                    <div className="part-1">
                        <Loader />
                    </div>
                </div>
            }
            <center>
                <div className="form-1">
                    <label htmlFor="text">Name
                        <input type="text"
                            value={ name }
                            onChange={ (e) => setName(e.target.value) } />

                    </label>
                    <br />
                    <br />
                    <label htmlFor="text">Email
                        <input type="text"
                            value={ email }
                            onChange={ (e) => setEmail(e.target.value) } />

                    </label>
                    <br />
                    <br />
                    <label htmlFor="text">Password
                        <input type="number"
                            value={ password }
                            onChange={ (e) => setPassword(e.target.value) } />

                    </label>
                    <br />
                    <br />
                    <label htmlFor="text">UserName
                        <input type="text"
                            value={ username }
                            onChange={ (e) => setUserName(e.target.value) } />
                    </label>
                    <br />
                    <br />
                    <div>
                        <button onClick={ updateData } className='btnes'>update</button>

                    </div>
                </div>
            </center>
        </div>
    )
}

export default Edit