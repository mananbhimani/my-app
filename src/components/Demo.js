import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Demo() {
    return (
        <>
            <div className='container'>
                <Link className='btn btn-dark mx-1 my-3' to="Post">Post </Link>
                <Link className='btn btn-dark mx-1 my-3' to="Comments">Comments</Link>
                <Link className='btn btn-dark mx-1 my-3' to="Photos">photos</Link>
                <Link className='btn btn-dark mx-1 my-3' to="LogOut">Log Out</Link>
            </div>
            <Outlet />
        </>
    )
}
