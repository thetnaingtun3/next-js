import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ title, children }) => {
    const defaultTitle = "Ninja"; // Product name
    return (

        <div className=' content'>
            <Head>
                <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
                {/* Other common head tags */}
            </Head>
            <Navbar />

            {children}
            <Footer />
        </div>
    );
};

export default Layout;