import React from 'react';
import'./Navbar.css'
const Navbar = ()=>{
    return (
        <>
            <nav className='navbar'>
                <div className='logo'>LOGO</div>
                <div className='navlist'>
                    <ul>
                        <li><a href='#'>Gallery</a></li>
                        <li><a href='#'>Newsletters</a></li>
                        <li><a href='#'>Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;