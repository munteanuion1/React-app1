import React from'react';
import s from './Block.module.css';
import Item from './Item/Item';

const Block = (props) => {
	const itemElements = props.state.map(el => <Item name={el.name} image={el.image}/>);
	
	return (
		<div className={s.block}>
			<div className={s.title}><h2>{props.name}</h2></div>
			<div className={s.appBlock}>
				{itemElements}
			</div>
		</div>
	);
}

export default Block;