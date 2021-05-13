import s from './App.module.css';
import SideBar from './SideBar/SideBar';
import Home from "./Home/Home";
import Header from './Header/Header';
import Applications from "./Applications/Applications";
import {Route} from "react-router-dom";
import Application from "./Applications/Application/Application";

const App = (props) => {
	return (
			<div className={s.wrapper}>
				<Header/>
				<SideBar/>
				<div className={s.content}>
					<Route exact path='/' component={() => <Home state={props.state}/>}/>
					<Route path='/applications' render={() => <Applications state={props.state.applications}/>}/>
					<Route path='/application' component={() => <Application state={props.state.comments} dispatch={props.dispatch}/>}/>
				</div>
			</div>
	);
}

export default App;



