import s from './Application.module.css'
import React from 'react'
import {addCommentActionCreator, updateNewCommentTextActionCreator} from "../../../Redux/comments-reducer";
import Images from "../../../Img/Images/Images"

const Application = (props) => {
	const newComment = React.createRef()
	
	const addComment = () => {
		const text = newComment.current.value
		if (text !== '')
			props.dispatch(addCommentActionCreator(text))// crtl + alt + shift + j
	}
	
	const allComment = props.state.map((el) => <p>{el.text}</p>)
	
	return (
		<div className={s.container}>
			<div className={s.info}>
				<img className={s.img} src={Images[props.app.image]} alt="not found image"/>
				<p className={s.description}>{props.app.description}</p>
			</div>
			<br/>
			<textarea placeholder="Enter the comment" ref={newComment}/>
			<br/>
			<button onClick={addComment}>Comment</button>
			<h3>Comments:</h3>
			{allComment}
		</div>
	)
}

export default Application