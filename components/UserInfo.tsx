import React from 'react';
import Link from 'next/link';
import {userType} from "../types";

type UserProps = {
    user: userType
}

const UserInfo: React.FC<UserProps> = ({user}) => {
    return (
        <li key={user.id}>
            <Link href={`/users/${user.id}`}><a><h2>{user.name}</h2></a></Link>
        </li>
    );
};

export default UserInfo;