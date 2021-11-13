import React, {ReactNode} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/layout.module.scss';

const Layout: React.FC<ReactNode> = ({children}) => {
    return (
        <>
            <Header/>
                <div className={styles.container}>
                    {children}
                </div>
            <Footer/>
        </>
    );
};

export default Layout;