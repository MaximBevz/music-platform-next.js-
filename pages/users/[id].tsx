import React from 'react';
import {userType} from "../../types";
import {GetServerSideProps} from "next";


type UserProps = {
    user: userType
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id} = context.params;
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {user: data}
    }
}

const User: React.FC<UserProps> = ({user}) => {

    const {email, name, address: {street, city, zipcode}} = user;

    return (
        <div>
            Name: <h3>{name}</h3> Email: <span>{email}</span>
            <p>Address: {city} / {street} / {zipcode}</p>
        </div>
    );
};

export default User;