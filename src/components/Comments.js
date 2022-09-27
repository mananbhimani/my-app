import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Comments() {
    const [Mydata, Setdata] = useState([]);
    var userid = localStorage.getItem('id')
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((res) => {
                Setdata(res.data)
                res.data.map((data) => {
                    if (userid == data?.postId) {
                        var p1 = document.getElementById('ul');
                        var p = document.createElement('li');
                        p.innerText = data?.body;
                        p1.appendChild(p);
                    }
                })
            })
    },[userid]);
    return (
        <div className='container'>
            <ul id='ul'>
                <h1>Comments</h1>
            </ul>
        </div>
    )
}
