import s from './Application.module.css'
import React from 'react'
import {addCommentActionCreator, updateNewCommentTextActionCreator} from "../../../Redux/comments-reducer";
import Images from "../../../Img/Images/Images"

const Application = (props) => {
	const newComment = React.createRef()
	
	const addComment = () => {
		if (props.state.newCommentText !== '')
			props.dispatch(addCommentActionCreator())
	}
	
	const allComment = props.state.comments.map((el) => <p>{el.text}</p>)
	
	const changeComment = () => {
		const text = newComment.current.value
		const action = updateNewCommentTextActionCreator(text)
		props.dispatch(action) // crtl + alt + shift + j
	}
	
	return (
		<div className={s.container}>
			<div className={s.info}>
				<img className={s.img} src={Images[props.app.image]} alt="not found image"/>
				<p className={s.description}>{props.app.description}</p>
			</div>
			<br/>
			<textarea placeholder="Enter the comment" onChange={changeComment} ref={newComment} value={props.state.newCommentText}/>
			<br/>
			<button onClick={addComment}>Comment</button>
			<h3>Comments:</h3>
			{allComment}
		</div>
	)
}

export default Application