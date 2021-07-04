import React from 'react';
import cheers from '../../public/images/cheers.png';
import PostForm from '../PostForm';
import Auth from '../../utils/auth';

export default function Social() {



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
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png"></img>
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>John Doe</strong> <br /> <small>@johndoe</small> <small>30m</small>
                            <br />
                            I had the best time getting Beer at Drake's in Oakland!
                            <br />
                            <small><a>Like</a> . <a>Reply</a> . 3hrs</small>
                        </p>
                    </div>

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
                </div>
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