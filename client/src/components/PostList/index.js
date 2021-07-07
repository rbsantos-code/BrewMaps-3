import React from 'react';
import { Link } from 'react-router-dom';
import CommentList from '../CommentList';
import Cheers from '../../public/images/cheers.png';

const PostList = ({ posts }) => {
    if (!posts.length) {
        return <h2>No post yet! Be the first to do so!</h2>
    }

    return (
        <>
           <article className="column box has-background-info-light">
           {posts && 
                posts.map(posts => (
                <article className="media">
                    <figure class="media-left">
                        <p class="image is-64x64">
                            <img src={Cheers}></img>
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
                                <small><a>Like</a> . <Link to={`/post/${posts._id}`}><a>Reply</a></Link> {posts.createdAt}</small>
                            </p>
                        </div>
                        <CommentList comments={posts.comments}/>
                    </div>
                </article>
            ))}
           </article>
        </>
    )
}

export default PostList;