import Post from '../Post/Post'

const DisplayPosts = (props) => {
    return (
        <table>
            <tbody>
                {props.posts.map((post) => {
                    return (
                        <tr>
                            <Post post = {post}/>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default DisplayPosts