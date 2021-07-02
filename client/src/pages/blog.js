import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME_BASIC, QUERY_POSTS } from '../utils/queries';

import Social from '../components/Social';
import Auth from '../utils/auth';


const Blog = () => {

    const { loading, data } = useQuery(QUERY_POSTS);

    const posts = data?.posts || {};
    console.log(posts);


    return (
        <>
            {loading ? (
                <div>Loading..One Sec!</div>
            ) : (
                <Social posts={posts}/>
            )}
        </>
    )
}

export default Blog;