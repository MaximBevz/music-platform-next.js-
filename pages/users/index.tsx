import React from 'react';
import Head from "next/head";
import Link from 'next/link';
import {userType} from "../../types";
import {GetStaticProps} from "next";

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch(`${process.env.JSON_URL}/users`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {users: data}
    }
}

type UsersProps = {
    users: Array<userType>
}

const Users: React.FC<UsersProps> = ({users}) => {

    return (
        <>
            <Head>
                <title>Users</title>
            </Head>
            <h1>User list:</h1>
            <ul>
                {
                    users?.map(user => (
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}><a><h2>{user.name}</h2></a></Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Users;
