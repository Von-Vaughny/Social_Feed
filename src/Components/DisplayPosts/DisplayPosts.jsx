import Post from '../Post/Post'

const DisplayPosts = (props) => {
    return (
        <table>
            <tbody>
                {props.parentPosts.map((post, index) => {
                    return (
                        <tr key={index}>
                            <Post post = {post}/>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default DisplayPosts;