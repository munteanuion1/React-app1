import React from 'react';
import './Header.css';
import logo from '../Img/google-play-logo.png';
import cont from '../Img/profile-icon-png-910 (1).png';

const Header = () => {
	return (
			<div className='Header'>
				<div className="nav-header"><img className="googlePlay-logo" src={logo}/><div className="googlePlay">Google Play</div></div>
				<div className="nav-header cont-nav"><img className="profile-icon" src={cont} />Cont</div>
			</div>
	);
}

export default Header;