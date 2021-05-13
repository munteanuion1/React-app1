import s from './SideBar.module.css';
import {NavLink} from "react-router-dom";

const SideBar = () => {
	return (
		<div className={s.sidebar}>
			<NavLink className={s.sideLink} to='/'>
				<div className={`${s.sideBtn} ${s.sideBtn1}`}>Home</div>
			</NavLink>
			<NavLink className={s.sideLink} to='/applications'>
				<div className={s.sideBtn}>Applications</div>
			</NavLink>
			<NavLink className={s.sideLink} to='/games'>
			<div className={s.sideBtn}>Games</div>
			</NavLink>
			<NavLink className={s.sideLink} to='/movies'>
			<div className={s.sideBtn}>Movies</div>
			</NavLink>
			<NavLink className={s.sideLink} to='/books'>
			<div className={s.sideBtn}>Books</div>
			</NavLink>
		</div>
	);
}

export default SideBar;