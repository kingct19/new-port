import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className='header'>
          <nav className='nav_container'>
            <a className='nav_logo'>King<b className='logo_dot'>.</b></a>
            <div className='link_container'>
                <ul className='nav_list'>
                    
                    <li className='nav_item'>
                        <a href='#' className='nav_link'>Services</a>
                    </li>
                    <li className='nav_item'>
                        <a href='#' className='nav_link'>Contact</a>
                    </li>
                </ul>
            </div>

          </nav>
        </header>
    );
};

export default Header;