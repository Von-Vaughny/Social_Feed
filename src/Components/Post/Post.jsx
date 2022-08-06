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
            <div>
                {props.index+1}
                <h4>{props.post.name}</h4>
                <p1>{props.post.date}</p1>
                <p>{props.post.message}</p>
                <button className={[likeStatus ? 'likeActive': '']} onClick={toggleLikeStatus}><FaThumbsUp/></button>
                <button className={[dislikeStatus ? 'dislikeActive': '']} onClick={toggleDislikeStatus}><FaThumbsDown/></button>
            </div>
        </td>
    );
};

export default Post;