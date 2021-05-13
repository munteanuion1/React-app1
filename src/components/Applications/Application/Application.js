import s from './Application.module.css'
import React from 'react'
import {addCommentActionCreator, updateNewCommentActionCreator} from "../../../Redux/Store";

const Application = (props) => {
	const newComment = React.createRef()
	
	const addComment = () => {
		props.dispatch(addCommentActionCreator())
	}
	
	const allComment = props.state.map((el) => <p>{el.text}</p>)
	
	const changeComment = () => {
		const text = newComment.current.value
		const action = updateNewCommentActionCreator(text)
		props.dispatch(action) // crtl + alt + shift + j
	}
	
	return (
		<div>
			<textarea onChange={changeComment} ref={newComment} value={props.state.newComment}/>
			<button onClick={addComment}>Comment</button>
			{allComment}
		</div>
	)
}

export default Application