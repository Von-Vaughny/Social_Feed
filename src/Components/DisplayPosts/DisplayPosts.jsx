import Post from '../Post/Post'

const DisplayPosts = (props) => {
    return (
        <table>
            <tbody>
                {props.parentPosts.map((post) => {
                    return (
                        <tr key={post.date}>
                            <Post post = {post}/>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default DisplayPosts;