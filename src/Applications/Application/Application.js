import s from './Application.module.css'
import React from 'react'

const Application = (props) => {
	const newComment = React.createRef()
	
	const addComment = () => {
		const action = {
			type:"COMMENT-ADD",
		}
		props.dispatch(action)
	}
	
	const allComment = props.state.map((el) => <p>{el.text}</p>)
	
	const changeComment = () => {
		const action = {
			type:"CHANGE-NEW-COMMENT",
			text: newComment.current.value
		}
		props.dispatch(action)
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