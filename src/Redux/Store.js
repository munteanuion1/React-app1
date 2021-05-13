let store = {
	_state: {
		applications: [
			{id: 1, name: "Netflix", price: 0, category: "app", src: "google-play-logo.png"},
			{id: 2, name: "Instagram", price: 0, category: "app"},
			{id: 3, name: "Mail", price: 0, category: "app"},
			{id: 4, name: "Photoshop", price: 0, category: "app"},
			{id: 5, name: "Youtube", price: 0, category: "app"},
			{id: 6, name: "Discord", price: 0, category: "app"}
		],
		games: [
			{id: 107, name: "Clash of Clans", price: 0, category: "game"},
			{id: 108, name: "PUBG", price: 0, category: "game"},
			{id: 109, name: "Wild Rift", price: 0, category: "game"},
			{id: 110, name: "Brawl", price: 0, category: "game"},
			{id: 111, name: "Among US", price: 0, category: "game"}
		],
		comments: [
			{id: 1001, text: "Super"},
			{id: 1002, text: "Klass"}
		],
		newComment:""
	},
	setNewComment(text){
		this._state.newComment = text
	},
	getState() {
		return this._state
	},
	_callSubscriber() {
	},
	commentAdd(text) {
		const newComment = {
			id:1003,
			text:text
		}
		this._state.comments.push(newComment)
		this._callSubscriber(this.state)
	},
	changeComment(text) {
		this.setNewComment(text)
	},
	subscribe(observer) { // pattern observer(se aseamana cu publisher-subscriber)
		this._callSubscriber = observer
	}
}
export default store

