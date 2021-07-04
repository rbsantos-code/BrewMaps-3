import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME_BASIC, QUERY_POSTS } from '../../utils/queries';

import cheers from '../../public/images/cheers.png';
import PostList from '../PostList';
import PostForm from '../PostForm';
import Auth from '../../utils/auth';

export default function Social() {

    const { loading, data } = useQuery(QUERY_POSTS);

    const posts = data?.posts || {};
    console.log(posts);

    const loggedIn = Auth.loggedIn();

    return (
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-full is-centered">
                    <img src={cheers} alt="Logo" className="images image is-128x128 is-inline-block"></img>
                    <h1 class="title text-light">
                        BrewMap Blog
                    </h1>
                    <h2 class="subtitle text-light">
                    Sharing about brews with your crew.
                    </h2>
                </div>
            </div>
            <article class="column">
                {loading ? (
                    <div>Something is brewing!</div>
                ) : (
                    <PostList posts={posts}/>
                )}
                
                
                {/* <div class="media-content">
                   

                    <article class="media">
                        <figure class="media-left">
                            <p class="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/128x128.png"></img>
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Jane Smith</strong> <br /> <small>@janesmith</small> <small>15m</small>
                                    <br />
                                    Ooo I love it there!
                                    <br />
                                    <small><a>Like</a> . <a>Reply</a> . 3hrs</small>
                                </p>
                            </div>
                        </div>
                    </article>
                </div> */}
            </article>
            <hr />
            <div>
                {loggedIn && (
                    <PostForm />
                )}
            </div>

        </div>
    )
}