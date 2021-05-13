import s from './Applications.module.css';
import Block from '../Block/Block'

const Applications = (props) => {
	return (
		<div>
			<Block name='Applications' state={props.state}/>
		</div>
	);
}

export default Applications;