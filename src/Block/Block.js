import s from './Block.module.css';
import Item from './Item/Item';

const Block = (props) => {
	return (
		<div className={s.block}>
			<div className={s.title}><h2>{props.name}</h2></div>
			<div className={s.appBlock}>
				<Item name={props.item}/>
				<Item name={props.item}/>
				<Item name={props.item}/>
				<Item name={props.item}/>
				<Item name={props.item}/>
				<Item name={props.item}/>
			</div>
		</div>
	);
}

export default Block;