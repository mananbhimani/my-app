import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';



export default function Post() {

  const [Mydata, Setdata] = useState([]);
  var userid = localStorage.getItem('id')
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        Setdata(res.data)
        // res.data.map((data) => {
        //   if (userid == data?.userId) {
        //     var p1 = document.getElementById('ul');
        //     var p = document.createElement('li');
        //     p.innerText = data?.title;
        //     p1.appendChild(p);
        //   }
        // })
      })

  }, [userid])

  const styyy = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"

  }

  return (
    <>
      <div style={styyy}>
        {Mydata && Mydata.length > 0 && Mydata.map((data) => {
          if (userid == data?.userId) {
            return (
              <div className="row row-cols-1 row-cols-md-3 g-4" >
                <div className="col">
                  <div class="card" style={{ width: '18rem' }}>
                    <div class="card-body">
                      <h3 class="card-title">{data?.title}</h3>
                      <p class="card-text">{data?.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
      {/* <div className='container'>
        <ul id='ul'>
          <h1>Title</h1>
        </ul>
      </div> */}
    </>
  )
}
