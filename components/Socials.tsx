import React from 'react';
import Head from "next/head";
import styles from '../styles/socials.module.scss';
import {socialItemType} from "../types";

type SocialsProps = {
    socials: Array<socialItemType>
}

const Socials: React.FC<SocialsProps> = ({socials}) => {
    return (
        <>
            <Head>
                <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet" />
            </Head>
            <div className={styles.wrapper}>
                <h1>Social links:</h1>
                <ul className={styles.linksList}>
                    {
                        socials?.map(item => (
                            <li key={item.id}>
                                <a href={item.path} target="_blank">
                                    <i className={`fab fa-${item.icon} ${styles.icon}`} aria-hidden="true" />
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
};

export default Socials;