import React from 'react';
import { Link } from 'react-router-dom';


const CommentList = ({ comments }) => {
    return (
        <>
            {comments &&
                comments.map(comment => (
                    <article class="media" key={comment._id}>
                        <figure class="media-left">
                            <p class="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/128x128.png"></img>
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>@{comment.username}</strong> 
                                    <br />
                                    {comment.commentBody}
                                    <Link to={`/profile/${comment.username}`}></Link>
                                    <br />
                                    <small><a>Like</a> . <a>Reply</a> {comment.createdAt}</small>
                                </p>
                            </div>
                        </div>
                    </article>
                ))}

        </>
    )
}

export default CommentList;