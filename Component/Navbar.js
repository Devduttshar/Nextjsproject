import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href="/Home">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/Product">Product</Link>
                    </li>
                    <li>
                        <Link href="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
