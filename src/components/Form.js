import React from "react";

function Form() {

    return (
        <form>
            <input type='text' placeholder="Title"></input>
            <input type='text' placeholder="URL"></input>
            <input type='text' placeholder="Description"></input>
            Phase Number.<input type='number' max='5' min='0'></input>
        </form>
    )
}

export default Form;