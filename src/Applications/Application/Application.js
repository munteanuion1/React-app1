import s from './Application.module.css'
import React from 'react'

const Application = (props) => {
	const newComment = React.createRef()
	const addComment = () => {
		const text = newComment.current.value
		props.commentAdd(text)
	}
	
	const allComment = props.state.map((el) => <p>{el.text}</p>)
	
	const changeComment = () => {
		let text = newComment.current.value
		props.changeComment(text)
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