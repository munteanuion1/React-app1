import s from './Home.module.css';
import Block from '../Block/Block'

const Home = (props) => {
	return (
		<div>
			<Block name='Applications' state={props.state.applications}/>
			<Block name='Games' state={props.state.games}/>
		</div>
	);
}

export default Home;