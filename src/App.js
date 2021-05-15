import s from './App.module.css';
import SideBar from './components/SideBar/SideBar';
import Home from "./components/Home/Home";
import Header from './components/Header/Header';
import Applications from "./components/Applications/Applications";
import {Route} from "react-router-dom";
import Application from "./components/Applications/Application/Application";
import React from "react";

const App = (props) => {
	const appElements = props.state.applications.map(el => <Route
		path={'/application/' + el.id}
		component={() => <Application
			state={props.state.comments}
			app={el}
			dispatch={props.dispatch}/>}/>
	);
	const gameElements = props.state.games.map(el => <Route
		path={'/application/' + el.id}
		component={() => <Application
			state={props.state.comments}
			app={el}
			dispatch={props.dispatch}/>}/>
	);
	
	return (
		<div className={s.wrapper}>
			<Header/>
			<SideBar/>
			<div className={s.content}>
				<Route exact path='/' component={() => <Home state={props.state}/>}/>
				<Route path='/applications' render={() => <Applications state={props.state.applications}/>}/>
				<Route path='/games' render={() => <Applications state={props.state.games}/>}/>
				{appElements}
				{gameElements}
			</div>
		</div>
	);
}

export default App;



