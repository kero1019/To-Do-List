import React from 'react'
import { Icon } from '@iconify-icon/react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Note({ body, title, id,setData }) {
    const [selected, setSelected] = React.useState(false);

    // Function to handle Delete
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/lists/${id}`);
            getData();
        } catch (error) {
            console.log("Error is ==> ", error.message)
        }
    }

    // Function to handle color
    function handleColor() {
        setSelected(prev => !prev)
    }

    // Function to getData
    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/lists");
            console.log(res.data.data)
            setData(res.data.data)
        } catch (error) {
            console.log("error is ==> ", error);
        }
    }

        return (
            <div className='note'>
                <div className="note-title-icon">
                    <Icon onClick={handleColor} icon="lets-icons:check-fill" style={{ color: selected ? "green" : 'red' }} className='check-icon' />
                    <h3 className="note-title">{title}</h3>
                </div>
                <p className='note-body'>{body}</p>
                <div className="two-buttons">
                    <button onClick={handleDelete}>Delete</button>
                    <Link to={`/note/${id}`}>
                        <button className='update'>Update</button>
                    </Link>
                </div>
            </div>
        )
    }
