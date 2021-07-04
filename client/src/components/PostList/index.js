import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
    if (!posts.length) {
        return <h2>No post yet! Be the first to do so!</h2>
    }

    return (
        <>
           <article className="column">
           {posts && 
                posts.map(posts => (
                <article className="media">
                    <figure class="media-left">
                        <p class="image is-64x64">
                            <img src="https://bulma.io/images/placeholders/128x128.png"></img>
                        </p>
                    </figure>
                    <div class="media-content">
                        <div className="content">
                            <p>
                                <Link to={`/profile/${posts.username}`}>
                                <strong>@{posts.username}</strong>
                                </Link>
                                <br />
                                <Link to={`/post/${posts._id}`}>
                                    {posts.body}
                                </Link>
                                <br />
                                <small><a>Like</a> . <a>Reply</a> . 3hrs</small>
                            </p>
                        </div>
                    </div>
                </article>
            ))}
           </article>
        </>
    )
}

export default PostList;