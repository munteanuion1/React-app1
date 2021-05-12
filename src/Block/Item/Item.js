import s from './Item.module.css';
import img from '../../Img/google-play-logo.png'
import {NavLink} from "react-router-dom";


const Item = (props) => {
//	const x = import(`../../Img/${props.image}`)

	return (
		<NavLink className={s.Link} to='/application'>
			<div className={s.Item}>
				<div>
					<img className={s.img} src={img} alt="not found image"/>
					<p className={s.title}>{props.name}</p>
				</div>
			</div>
		</NavLink>
	);
}

export default Item;
