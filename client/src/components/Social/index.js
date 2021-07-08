import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME_BASIC, QUERY_POSTS } from '../../utils/queries';

import cheers from '../../public/images/cheers.png';
import PostList from '../PostList';
import PostForm from '../PostForm';
import PostDrink from '../../public/images/postDrink.png';
import Auth from '../../utils/auth';

export default function Social() {

    const { loading, data } = useQuery(QUERY_POSTS);

    const posts = data?.posts || {};
    console.log(posts);

    const loggedIn = Auth.loggedIn();

    function scrollDown() {
        window.scroll({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
        })
    }

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
                    <hr />
                    <img src={PostDrink}></img>
                    <hr />
                </div>
                <button className="button is-fullwidth is-primary is-light" onClick={scrollDown}>Click to Post</button>
                <br />
            </div>
            <article class="column">
                {loading ? (
                    <div>Something is brewing!</div>
                ) : (
                    <PostList posts={posts}/>
                )}
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