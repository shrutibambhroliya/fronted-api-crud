import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
const HomePage = () => {

    const aaa = useNavigate();

    useEffect(() => {
        const username = sessionStorage.getItem('username');
        if (!username) {

            aaa("/LoginPage")
        }
    }, [])

    return (
        <div>
            <div style={ { display: "flex", alignItems: "center", justifyContent: "space-evenly" } } className="forms ">
                <Link to={ '/Add' }>
                    <button
                        style={ {
                            padding: "10px 15px",
                            fontSize: "20px",
                            backgroundColor: "green",
                            color: "white",
                            borderRadius: "10px"
                        } } >Add
                    </button>
                </Link>
                <Link to={ '/List' }>
                    <button
                        style={ {
                            padding: "10px 15px",
                            fontSize: "20px", backgroundColor: "red",
                            color: "white",
                            borderRadius: "10px"
                        } }>
                        List</button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage
