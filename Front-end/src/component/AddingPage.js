import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddingPage() {
    const [data, setData] = React.useState({ title: "", body: "" })
    const navigate = useNavigate();

    // Function to handle Changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => {
            return { ...prevData, [name]: value }
        })
    }

    // function to handle submit
    function handleSubmit(e) {
        e.preventDefault();
        postData();
    }

    // Function to get data 
    const postData = async ()=>{
        try{
            const res = await axios.post('http://localhost:5000/api/lists', data)
            console.log("response is ",res.data );
            setData(res.data);
            navigate("/");
        } catch(error){
            console.log("Error is ==> ", error.message);
        }
    }

    return (
        <div>
            <h1>Adding new Note to do </h1>
            <div className="">
                <form action="">
                    <div className="">
                        <label htmlFor="title">Title</label>
                        <input type="text" id='title' name="title" value={data.title} onChange={handleChange} />
                    </div>
                    <div className="">
                        <label htmlFor="body">your node</label>
                        <input type="text" id='body' name='body' value={data.body} onChange={handleChange} />
                    </div>
                    <div className="">
                        <button>Cancel</button>
                        <button onClick={handleSubmit}>Done</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
