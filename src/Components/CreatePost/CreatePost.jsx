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
            <div className='form-name'>
                <label>Name </label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='form-post'> 
                <label>Post </label>
                <textarea type='text' rows="3" cols="100" value={message} onChange={(event) => setMessage(event.target.value)}/>
                <button type='submit'>Post</button>
            </div> 
        </form>
    );
}

export default CreatePost;