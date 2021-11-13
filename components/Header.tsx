import React from "react";
import Navbar from "./Navbar";
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Link href={'/'}><a>
                <Image
                    className={styles.headerLogo}
                    src='/vercel.svg'
                    width={80}
                    height={80}
                    alt='logo'
                />
            </a>
            </Link>
            <Navbar/>
        </header>
    )
}

export default Header;
