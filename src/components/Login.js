import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// export var userid;

export default function Login() {
  const [Text, setext] = useState("");
  const [Mydata, Setdata] = useState([]);
  const navigation = useNavigate()
  var userid;

  function handler(e) {
    setext(e.target.value);
  }
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      Setdata(res.data)
    });
  function check() {
    Mydata.map((data) => {
      if (Text === data?.email) {
        userid = data?.id
        console.log(userid)
        localStorage.setItem('id',userid);
        console.log("succesfully ")
        navigation('/Demo');
      }
    })
  }
useEffect(() => {
  if(localStorage.getItem('id')){

    localStorage.removeItem('id')
  }
}, [])

  return (
    <>
      <div className="container mb-3 my-2">
        <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={Text} onChange={handler} />
        <button type="submit" className="btn btn-primary my-3" onClick={check}>Login</button>
        <p id='hi'></p>
      </div>
    </>
  )
}


