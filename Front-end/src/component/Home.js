import React from 'react'
import { useState, useEffect } from 'react'
import Note from './Note';
import { Icon } from '@iconify-icon/react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [data, setData] = useState([]);

    // Function to get Data
    function getData(){
        fetch("http://localhost:5000/api/lists").then((result) => result.json()).then((data) => { setData(data.data); })
    }

    // to fetch data
    useEffect(() => {
        getData();
    }, [])

    
    return (
        <div className="container">
            <h1 className='header'>todo list</h1>
            <div className="title-notes-container">
                <p className='main-title'>Your Notes:</p>
                <div className="notes-container">
                    {
                        data.map((note) => {
                            return <Note key={note._id} id={note._id} title={note.title} body={note.body} setData={setData} />
                        })
                    }
                </div>
                <p className='p-icon'>
                    <Link to="/add">
                        <Icon icon="basil:add-outline" className='plus-icon' />
                    </Link>
                </p>
            </div>
        </div>
    )
}
