import React from 'react';
import {GetStaticPaths, GetStaticProps} from "next";
import {postType} from "../../types";

//Generate all static pages
export const getStaticPaths:GetStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const paths = data.map(({ id }) => ({
        params: {id: id.toString()}
    }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {id} = context.params;
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {post: data}
    }
}

type PostProps = {
    post: postType
}

const Post: React.FC<PostProps> = ({post}) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;