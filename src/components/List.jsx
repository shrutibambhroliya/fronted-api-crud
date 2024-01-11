


import React, { useState, useEffect } from 'react';
import "./List.css";
import { Link } from 'react-router-dom';
import Loader from './Loader'

const List = () => {
    const [getAllData, setGetAllData] = useState([]);
    const [loader, setLoader] = useState(false);

    const saveAllData = async () => {
        setLoader(true)

        await fetch("http://localhost:2021/api/get-data", {
            method: "GET",
            headers: { 'Content-Type': 'application/JSON' },
        }).then((res) => res.json())
            .then((data) => {
                console.log("addData::", data);
                setGetAllData(data)

            })
            .catch((err) => console.log(err))

    };
    setTimeout(() => {
        setLoader(false)
    }, 500)

    useEffect(() => {
        saveAllData();
    }, []);


    const deleteData = async (id_d) => {
        setLoader(true)
        await fetch(`http://localhost:2021/api/delete-data/${id_d}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then((data) => {
                console.log("deleteData:::", data);
                saveAllData()

            })
            .catch(err => console.log(err));


    }

    return (
        <div>{
            loader && <div className='loader-1'>
                <div className="part-1">
                    <Loader />
                </div>
            </div>
        }



            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>UserName</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getAllData.map((ele, index) => {
                            return (
                                <tr key={ index }>
                                    <td>{ ele.Name }</td>
                                    <td>{ ele.Email }</td>
                                    <td>{ ele.Password }</td>
                                    <td>{ ele.UserName }</td>
                                    <td>
                                        <button className='btns' onClick={ () => deleteData(ele._id) }>delete</button>
                                        <Link to={ `/edit/${ele._id}` }>
                                            <button className='btns'>edit</button>
                                        </Link>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default List