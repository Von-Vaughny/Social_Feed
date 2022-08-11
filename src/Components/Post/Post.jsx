import React, { useState } from 'react';
import { FaThumbsDown, FaThumbsUp} from 'react-icons/fa';
import './Post.css';


const Post = (props) => {

    const [likeStatus, setLikeStatus] = useState(false);
    const [dislikeStatus, setDislikeStatus] = useState(false);

    function toggleLikeStatus() {
        setLikeStatus(!likeStatus)
        if (!likeStatus && dislikeStatus) {
            setDislikeStatus(!dislikeStatus)
        }
    }

    function toggleDislikeStatus() {
        setDislikeStatus(!dislikeStatus)
        if (!dislikeStatus && likeStatus) {
            setLikeStatus(!likeStatus)
        }
    }

    return (
        <td>
            <div className="post">
                <div id="name" className="header"><h4>{props.post.name}</h4></div>
                <div id="date" className="header"> ({props.post.date})</div>
                <div className="width"><p>{props.post.message}</p></div>
                <div className="right">
                    <button className={[likeStatus ? 'likeActive': 'likeInactive']} onClick={toggleLikeStatus}><FaThumbsUp/></button>
                    <button className={[dislikeStatus ? 'dislikeActive': 'dislikeInactive']} onClick={toggleDislikeStatus}><FaThumbsDown/></button>
                </div>
                
            </div>
        </td>
    );
};

export default Post;