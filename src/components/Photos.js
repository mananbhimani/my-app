import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Photos() {
    const [Mydata, Setdata] = useState([]);

    var userid = localStorage.getItem('id')
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                Setdata(res.data)
                //    / res.data.map((data) => {
                //     if (userid == data?.albumId) {
                //         // console.log(data?.albumId);
                //         var div = document.getElementById('card')
                //         console.log(div)
                //         var img = document.createElement('img');
                //         img.src = data?.thumbnailUrl;
                //         // console.log(data?.thumbnailUrl);
                //         img.classNameName = "card-img-top";
                //         img.alt = "...";
                //         // console.log(img)
                //         div.appendChild(img);

                //         var divbody = document.getElementById('cardbody');
                //         var text = document.createElement('p')
                //         text.classNameName = "card-text";
                //         text.innerText = data?.title;
                //         // console.log(text)
                //         divbody.appendChild(text)
                //     }
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
                    if (userid == data?.albumId) {
                        return (
                            <div className="row row-cols-1 row-cols-md-2 g-4" >
                                <div className="col">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={data?.url} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">{data?.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>

        </>
    )
}
