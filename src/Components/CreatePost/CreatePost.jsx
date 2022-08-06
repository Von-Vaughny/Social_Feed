import React, { useState } from 'react';

const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    function handleEvent(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            date: new Date().toLocaleString(),
            message: message
        };
        console.log(newEntry);
        props.addNewPostEntry(newEntry)
    }

    return (
        <form onSubmit={handleEvent}>
            <label>Name</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Post</label>
            <input type='text' value={message} onChange={(event) => setMessage(event.target.value)}/>
            <button type='submit'>Post</button>
        </form>
    );
}

export default CreatePost;