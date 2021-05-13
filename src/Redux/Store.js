const COMMENT_ADD = "COMMENT-ADD"
const CHANGE_NEW_COMMENT = "CHANGE-NEW-COMMENT"

let store = {
	_state: {
		applications: [
			{id: 1, name: "Netflix", price: 0, category: "app", image:"netflix.webp"},
			{id: 2, name: "Instagram", price: 0, category: "app", image:"instagram.webp"},
			{id: 3, name: "Gmail", price: 0, category: "app", image:"gmail.webp"},
			{id: 4, name: "Photoshop", price: 0, category: "app", image:"photoshop.webp"},
			{id: 5, name: "Youtube", price: 0, category: "app", image:"youtube.webp"},
			{id: 6, name: "Discord", price: 0, category: "app", image:"discord.webp"}
		],
		games: [
			{id: 107, name: "Clash of Clans", price: 0, category: "game", image:"clashofclans.webp"},
			{id: 108, name: "PUBG", price: 0, category: "game", image:"PUBG.webp"},
			{id: 109, name: "Wild Rift", price: 0, category: "game", image:"WildRift.webp"},
			{id: 110, name: "Brawl", price: 0, category: "game", image:"Brawl.webp"},
			{id: 111, name: "Among US", price: 0, category: "game", image:"AmongUS.webp"}
		],
		comments: [
			{id: 1001, text: "Super"},
			{id: 1002, text: "Klass"}
		],
		newComment:""
	},
	_callSubscriber() {
	},
	setNewComment(text){
		this._state.newComment = text
	},
	getState() {
		return this._state
	},
	subscribe(observer) { // pattern observer(se aseamana cu publisher-subscriber)
		this._callSubscriber = observer
	},
	dispatch(action){
		if (action.type === CHANGE_NEW_COMMENT){
			this.setNewComment(action.text)
		} else if (action.type === COMMENT_ADD){
			const newComment = {
				id:1003,
				text: this._state.newComment
			}
			this._state.comments.push(newComment)
			this._state.newComment = ''
			this._callSubscriber(this.state)
		}
	}
}

export const addCommentActionCreator = () => ({ type: COMMENT_ADD })
export const updateNewCommentActionCreator = (text) => ({type: CHANGE_NEW_COMMENT, text: text})    // crtl + alt + v

export default store

