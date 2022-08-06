const Post = (props) => {
    return (
        <td>
            <div>
                <h4>{props.post.name}</h4>
                <p>{props.post.date}</p>
                <p>{props.post.message}</p>
            </div>
        </td>
    );
};

export default Post;