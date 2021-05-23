import s from './Application.module.css'
import React from 'react'
import Images from "../../../Img/Images/Images"

const Application = (props) => {
	const newComment = React.createRef()
	
	const onAddComment = () => {
		const text = newComment.current.value
		if (text !== '')
			props.addComment(text)// crtl + alt + shift + j
	}
	
	const allComment = props.comments.map((el) => <p>{el.text}</p>)
	
	return (
		<div className={s.container}>
			<div className={s.info}>
				<img className={s.img} src={Images[props.app.image]} alt="not found image"/>
				<p className={s.description}>{props.app.description}</p>
			</div>
			<br/>
			<textarea placeholder="Enter the comment" ref={newComment}/>
			<br/>
			<button onClick={onAddComment}>Comment</button>
			<h3>Comments:</h3>
			{allComment}
		</div>
	)
}

export default Application