import s from './Item.module.css';
import img from '../../Img/google-play-logo.png'

const Item = (props) => {
	return(
		<div className={s.Item}>
			<div>
			<img className={s.img} src={img}/>
			<p className={s.title}>{props.name}</p>
			</div>
		</div>
	);
}

export default Item;