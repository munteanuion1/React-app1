import s from './Home.module.css';
import Block from '../Block/Block'

const Home = () => {
	return (
		<div>
			<Block name='Applications' item='Application'/>
			<Block name='Games' item='Game'/>
		</div>
	);
}

export default Home;