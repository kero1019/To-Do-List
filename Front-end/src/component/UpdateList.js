import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

export default function UpdateList() {
    const [receivedData, setReceivedData] = React.useState({body:"", title:""})
    const navigate = useNavigate()
    const { listID } = useParams();

    // Function to handle Changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setReceivedData((prevData) => {
            return { ...prevData, [name]: value }
        })
    }

    // Function to getData
    const getData = async ()=>{
        try{
            const res = await axios.get(`http://localhost:5000/api/lists/${listID}`);
            setReceivedData(res.data.data);
        } catch(error){
            console.log("error is ==> ", error);
        }
    }

    const handleUpdates = async (e) => {
        e.preventDefault();
        try {
            const  res = await axios.patch(`http://localhost:5000/api/lists/${listID}`, receivedData);
            console.log("Note Updated");
            getData();
            navigate('/');
        } catch(error){
            console.log("Error ==> ", error.message)
        }
    }

    React.useEffect(()=>{
        getData();
    },[])

    return (
        <div>
            <h1>Update your Note</h1>
            <div className="">
                <form action="">
                    <div className="">
                        <label htmlFor="title">Title</label>
                        <input type="text" id='title' name="title" value={receivedData.title} onChange={handleChange} />
                    </div>
                    <div className="">
                        <label htmlFor="body">your node</label>
                        <textarea type="text" id='body' name='body' value={receivedData.body} onChange={handleChange} />
                    </div>
                    <div className="">
                        <button>Cancel</button>
                        <button onClick={handleUpdates}>Done</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
