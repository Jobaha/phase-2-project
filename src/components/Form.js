import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function Form( {addNewItem} ) {

    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [phase, setPhase] = useState('')


    function handleSubmit(e) {
        e.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/flatsource`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify( {
            id: uuidv4(),
            phase: parseInt(phase),
            title: title,
            link: url,
            description: description
            }),
        })
        .then(res => res.json())
        .then(newItem => addNewItem(newItem));
    }


    return (
        <div className="form-add">
            <h2>Create new Resources here!</h2>
            <form className="full-form" onSubmit={handleSubmit}>
                <input type='text' placeholder="Title..." width='' value={title} onChange={e => setTitle(e.target.value)}></input><br></br>
                <input type='text' placeholder="URL..." value={url} size='50' onChange={e => setUrl(e.target.value)}></input><br></br>
                <input type='text' placeholder="Description..." size='50' value={description} onChange={e => setDescription(e.target.value)}></input><br></br>
                Phase Number: <input type='number' max='5' min='1' maxLength='1' value={phase} onChange={e => setPhase(e.target.value)}></input><br></br>
                <button type="submit">Add Resource</button>
            </form>
        </div>
    )
}

export default Form;