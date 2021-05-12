import React from 'react';
import s from './Header.module.css';
import logo from '../Img/google-play-logo.png';
import profile from '../Img/profile-icon-png-910 (1).png';
import {NavLink} from "react-router-dom";

const Header = () => {
	return (
			<div className={s.header}>
				<div className={s.btn}><img className={s.googlePlayLogo} src={logo}/><a className={s.txtHeader}><NavLink className={s.navLink} to="/">Google Play</NavLink></a></div>
				<div className={`${s.btn} ${s.fR}`}><img className={s.profileIcon} src={profile}/><a className={s.txtHeader}>Profile</a></div>
			</div>
	);
}

export default Header;