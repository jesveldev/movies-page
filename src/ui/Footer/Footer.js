import styles from './Footer.css';

import Icon from '../Home/comps/Icon/Icon';
import Button from '../Home/comps/Button/Button';
import AppStore from '../../imgs/button/app-store@2x.png';
import GooglePlay from '../../imgs/button/google-play@2x.png';
import Logo from '../../imgs/logo/dct_2x.png';

export default function Footer() {
    return (
    	<footer className='footer'>
    		<Icon src={Logo} iconClass='footer-logo'/>
    		<div className='digital-stores-buttons'>
    			<a href='#'><Button img={AppStore} buttonClass='digital-store-button'/></a>
    			<a href='#'><Button img={GooglePlay} buttonClass='digital-store-button'/></a>
    		</div>
    		<p>©Copyright 2022 Dreadful Tomatoes. All rights reserved.</p>
    	</footer>
    );
}
