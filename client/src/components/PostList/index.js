import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, body }) => {
    if (!posts.length) {
        return <h2>No post yet! Be the first to do so!</h2>
    }

    return (
        <div class="media">
            <figure class="media-left">
                <p class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png"></img>
                </p>
            </figure>
            <div class="media-content">
                <p>
                    <Link to={`/profile/${post.username}`}>
                    <strong>{post.username}</strong>
                    </Link>
                    <br />
                    <Link to={`/post/${post._id}`}>
                        {post.body}
                    </Link>
                    <br />
                    <small><a>Like</a> . <a>Reply</a> . 3hrs</small>
                </p>
            </div>
        </div>
    )
}

export default PostList;