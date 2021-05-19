const COMMENT_ADD = "COMMENT-ADD"
const CHANGE_NEW_COMMENT_TEXT = "CHANGE-NEW-COMMENT-TEXT"

export const commentsReducer = (state, action) => {
	
	switch (action.type) {
		case COMMENT_ADD: {
			const newCommentText = {
				id: 1003,
				text: state.newCommentText
			}
			state.comments.push(newCommentText)
			state.newCommentText = ''
			return state
		}
		case CHANGE_NEW_COMMENT_TEXT: {
			state.newCommentText = action.text
			return state
		}
		default:
			return state
	}
}

export const addCommentActionCreator = () => ({type: COMMENT_ADD})
export const updateNewCommentTextActionCreator = (text) => ({type: CHANGE_NEW_COMMENT_TEXT, text: text})