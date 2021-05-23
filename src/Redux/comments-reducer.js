const COMMENT_ADD = "COMMENT-ADD"

const initialState = [
	{id: 1001, text: "Super"},
	{id: 1002, text: "Klass"}
]

export const commentsReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case COMMENT_ADD: {
			const newCommentText = {
				id: 1003,
				text: action.text
			}
			state.push(newCommentText)
			return state
		}
		default:
			return state
	}
}

export const addCommentActionCreator = (text) => ({type: COMMENT_ADD, text: text})
