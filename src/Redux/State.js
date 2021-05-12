
let state = {
	applications:[
		{id:1,name:"Netflix",price:0,category:"app",src:"google-play-logo.png"},
		{id:2,name:"Instagram",price:0,category:"app"},
		{id:3,name:"Mail",price:0,category:"app"},
		{id:4,name:"Photoshop",price:0,category:"app"},
		{id:5,name:"Youtube",price:0,category:"app"},
		{id:6,name:"Discord",price:0,category:"app"}
	],
	games:[
		{id:107,name:"Clash of Clans",price:0,category:"game"},
		{id:108,name:"PUBG",price:0,category:"game"},
		{id:109,name:"Wild Rift",price:0,category:"game"},
		{id:110,name:"Brawl",price:0,category:"game"},
		{id:111,name:"Among US",price:0,category:"game"}
	],
	comments:[
		{id:1001,text:"Super"},
		{id:1002,text:"Klass"}
	],
	newComment:[
		{id:200,text:""}
	]
}

export const commentAdd = (text) => {
	const newComment = {
		id:1003,
		text:text
	}
	state.comments.push(newComment)
	renderReactApp(state)
}

export const changeComment = (text) => {
	state.newComment[0] = text
}

let renderReactApp
export let subscribe = (observer) => { // pattern observer , tot ca acest pattern lucreaza addEventListener, onChange, onClick(se aseamana cu publisher-subscriber)
	renderReactApp = observer
}

export default state;