import s from './App.module.css';
import SideBar from './components/SideBar/SideBar';
import Home from "./components/Home/Home";
import Header from './components/Header/Header';
import Applications from "./components/Applications/Applications";
import {Route} from "react-router-dom";
import Application from "./components/Applications/Application/Application";

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



