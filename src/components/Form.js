import React, {useState} from "react";

function Form( {addNewItem} ) {

    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [phase, setPhase] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()

        const obj = {
            phase: phase,
            title: title,
            link: url,
            description: description
        }
        console.log(obj)

        fetch(`${process.env.REACT_APP_API_URL}/flatsource`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(console.log)
        // .then(newItem => addNewItem(newItem))

        setTitle('')
        setUrl('')
        setDescription('')
        setPhase(0)
    }

    return (
        <div className="form-add">
            <h2>Create new Resources here!</h2>
            <form className="full-form" onSubmit={handleSubmit}>
                <input type='text' placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}></input>
                <br></br>
                <input type='text' placeholder="URL" value={url} onChange={e => setUrl(e.target.value)}></input>
                <br></br>
                <input type='text' placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}></input>
                <br></br>
                Phase Number <input type='number' max='5' min='0' value={phase} onChange={e => setPhase(e.target.value)}></input>
                <br></br>
                <button type="submit">Add Resource</button>
            </form>
        </div>
    )
}

export default Form;