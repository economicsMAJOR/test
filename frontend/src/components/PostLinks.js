import React ,{ Component }  from 'react';
import { Link } from 'react-router';
import './PostLinks.css';


class PostLinks extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:9000/api/post');
            const posts = await res.json();
            this.setState({
                posts
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.content}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default PostLinks;



// const PostLinks = () => {
//     return (
//         <div className="post-links">
//             <Link to="/post/1">1</Link>
//             <Link to="/post/2">2</Link>
//             <Link to="/post/3">3</Link>
//             <Link to="/post/4">4</Link> 
//         </div>
//     );
// };

// export default PostLinks;