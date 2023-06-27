import React, { useState } from 'react';
import './Header.scss';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TiThMenu } from 'react-icons/ti';

const Header = () => {
    const [active, setActive] = useState('navBar');

    const showNav = () => {
        setActive('navBar activeNavbar')
    };
    const closeNav = () => {
        setActive('navBar')
    }
    return (
        <section className='navBarSection'>
            <header className="header flex">


                <div className='logoDiv'>
                    <a className='logo1'>
                        <img src='https://csigroup.in/Imeges/logo.png' alt='logo' className='icon1' />
                        <p>Creation<b className='soul'>Soul</b> Institute</p>
                    </a>
                </div>
                <div className={active}>
                    <ul className='navLists flex'>
                        <li className='navItem'>
                            <a href='' className='navLink'>Home</a >
                        </li>
                        <li className='navItem'>
                            <a href='' className='navLink'>Packeges</a >
                        </li>
                        <li className='navItem'>
                            <a href='' className='navLink'>About</a >
                        </li>
                        <li className='navItem'>
                            <a href='' className='navLink'>Contact</a >
                        </li>
                        <li className='navItem'>
                            <a href='' className='navLink'>Shop</a >
                        </li>
                        <li className='navItem'>
                            <a href='' className='navLink'>News</a >
                        </li>
                        <li className='navItem'>
                            <a href='' className='navLink'>Pages</a >
                        </li>
                        <button className='btn'>
                            <a href='' >ADMISSION NOW</a>
                        </button>
                    </ul>
                    <div onClick={closeNav} className='closeNavbar'>
                        <AiFillCloseCircle className='icon' />

                    </div>

                </div>


                <div onClick={showNav} className='toddleNavbar'>
                    <TiThMenu className="icon" />
                </div>
            </header>
        </section>
    )
}

export default Header;
