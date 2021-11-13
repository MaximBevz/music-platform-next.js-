import React from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.scss';
import {useRouter} from "next/router";

const links = [
    {id: 1, text: 'Home', href: '/'},
    {id: 2, text: 'Posts', href: '/posts'},
    {id: 3, text: 'Users', href: '/users'},
]

const Navbar: React.FC = () => {

    const {pathname} = useRouter();

    return (
        <nav>
            <ul className={styles.list}>
                {
                    links.map(({id, text, href}) => (
                        <li className={styles.listItem} key={id}>
                            <Link href={href}>
                                <a className={pathname === href ? styles.listItemLinkActive : styles.listItemLink}>{text}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;