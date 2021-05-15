import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from "react-router-dom"
import store from './Redux/Store'

export const renderReactApp = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={store.getState()}
			     dispatch={store.dispatch.bind(store)}/>      {/*bind() functia leaga callback functia care o trimitem cu un obiect din care sa caute ce avem nevoie cand folosim this. */}
		</BrowserRouter>,
		document.getElementById('root')
	)
}
store.subscribe(renderReactApp)
renderReactApp(store.getState())


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
