import s from './App.module.css';
import SideBar from './components/SideBar/SideBar';
import Home from "./components/Home/Home";
import Header from './components/Header/Header';
import Applications from "./components/Applications/Applications";
import React from "react";
import {Route} from "react-router-dom";
import ApplicationContainer from "./components/Applications/Application/ApplicationContainer";

const App = (props) => {
	const state = props.store.getState()
	let fun = (el) => {
		let app = el
		return <Route
			path={'/application/' + el.id}
			component={() => <ApplicationContainer app={app} store={props.store}/>}/>
	}
	const appElements = state.applications.map(el => fun(el));
	const gameElements = state.games.map(el => fun(el));
	return (
		<div className={s.wrapper}>
			<Header/>
			<SideBar/>
			<div className={s.content}>
				<Route exact path='/' component={() => <Home state={state}/>}/>
				<Route path='/applications' render={() => <Applications state={state.applications}/>}/>
				<Route path='/games' render={() => <Applications state={state.games}/>}/>
				{appElements}
				{gameElements}
			</div>
		</div>
	);
}

export default App;



