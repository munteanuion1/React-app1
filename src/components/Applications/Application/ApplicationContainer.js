import React from 'react'
import {addCommentActionCreator} from "../../../Redux/comments-reducer";
import Application from "./Application";

const ApplicationContainer = (props) => {
	const state = props.store.getState()
	
	const addComment = (text) => {
			props.store.dispatch(addCommentActionCreator(text))// crtl + alt + shift + j
	}
	
	return (<Application addComment={addComment} comments={state.comments} app={props.app}/>)
}

export default ApplicationContainer