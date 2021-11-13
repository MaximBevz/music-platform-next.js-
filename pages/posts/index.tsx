import React from 'react';
import Head from "next/head";
import Link from 'next/link'
import {postType} from "../../types";
import {GetStaticProps} from "next";

type PostsProps = {
    posts: Array<postType>
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch(`${process.env.JSON_URL}/posts`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {posts: data}
    }
}

const Posts: React.FC<PostsProps> = ({posts}) => {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}><Link href={`/posts/${post.id}`}><a>{post.id}) {post.title}</a></Link></li>
                    ))
                }
            </ul>
        </>
    )
}

export default Posts;
