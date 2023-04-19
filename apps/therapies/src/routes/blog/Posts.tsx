import { useEffect } from 'react';
import styled from 'styled-components';

const PostsContainer = styled.div`
    display: flex;
    width: 100%;
`;

const Posts = () => {
    useEffect(() => {
        // fetch('http://localhost/wordpress/wp-json/wp/v2/posts/', {
        //     method: 'GET'
        // })
        // .then(res => res.json())
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
    });

    return <PostsContainer>POSTS</PostsContainer>;
};

export default Posts;
