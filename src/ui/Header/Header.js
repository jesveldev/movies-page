import './Header.css';
import Icon from '../Home/comps/Icon/Icon';
import Logo from '../../imgs/logo/dct_2x.png';
import React, { useState } from 'react';

export default function Header() {
    return (
        <header className='header'>
        	<figure className='logo-container'>
        		<img src= { Logo } title='Website logo' alt='Website logo'/>
        	</figure>
        </header>
    );
}
