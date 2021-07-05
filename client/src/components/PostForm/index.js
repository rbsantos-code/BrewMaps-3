import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';


const PostForm = () => {

    const [body, setText] = useState('');  

    const [characterCount, setCharacterCount] = useState(0);

    const [addPost, { error }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
            try {
                const { posts } = cache.readQuery({ query: QUERY_POSTS });
                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: { posts: [addPost, ...posts] }
                });
            } catch (e) {
                console.error(e);
            }

            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, posts: [...me.posts, addPost] } }
            });
        }
    });

    const refreshPage = () => {
        window.location.reload();
    }

    const handleChange = event => {
        if (event.target.value.length <= 200) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };


    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addPost({
                variables: { body }
            });

            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };


    return (
        <div>
            <p className={`${characterCount === 200 || error ? 'text-error' : ''}`}>
                Character Count: {characterCount}/200
                {error && <span> - Something went wrong...</span>}
            </p>
            <section class="media">
                <figure class="media-left">
                    <p class="image-is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png"></img>
                    </p>
                </figure>

                <form class="media-content" onSubmit={handleFormSubmit}>
                    <div class="field">
                        <p class="control">
                            <textarea 
                            class="textarea" 
                            placeholder="Add a comment..." 
                            value={body} 
                            onChange={handleChange}></textarea>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control">
                            <button 
                            class="button" 
                            type="submit" onClick={refreshPage}>Send Post</button>
                        </p>
                    </div>
                </form>
            </section>
        </div>
    )
}


export default PostForm;