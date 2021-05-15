import s from './Item.module.css';
import {NavLink} from "react-router-dom";
import Images from "../../../Img/Images/Images"

const Item = (props) => {
	return (
		<NavLink className={s.Link} to={'/application/' + props.itemId}>
			<div className={s.Item}>
				<div>
					<img className={s.img} src={Images[props.image]} alt="not found image"/>
					<p className={s.title}>{props.name}</p>
				</div>
			</div>
		</NavLink>
	)
}

export default Item;
