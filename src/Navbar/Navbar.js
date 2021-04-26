import s from './Navbar.module.css';

const Navbar = () => {
	return (
		<div className={s.navbar}>
			<div className={`${s.navBtn} ${s.navBtn1}`}>Home</div>
			<div className={s.navBtn}>Applications</div>
			<div className={s.navBtn}>Games</div>
			<div className={s.navBtn}>Movies</div>
			<div className={s.navBtn}>Books</div>
		</div>
	);
}

export default Navbar;