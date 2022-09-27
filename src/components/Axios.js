import React, { useState,createContext } from 'react'
import axios from 'axios'
import Login from './Login';

export const UserContext = createContext()

export default function Axios() {


    const [Mydata, Setdata] = useState([]);
    
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            Setdata(res.data)
        })
    return (
        <>
            <div>Axios</div>
            <UserContext.Provider value={Mydata?.email}>
                        <Login ></Login>
                    </UserContext.Provider>

            {Mydata.map((data) => {
                return <div className='container'>
                    {/* <p>id {data?.id}, name: {data?.name}, email: {data?.email} , phone:{data?.phone} </p> */}
                    
                </div>
            })}
        </>
    )
}
