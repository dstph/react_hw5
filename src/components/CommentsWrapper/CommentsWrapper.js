import React,  { useState, useEffect } from 'react';
import Comment from '../Comment/Comment';
import PropTypes from 'prop-types';

const CommentsWrapper = ({location}) => {
	const [comments, setComments] = useState([]);
	useEffect( () => {
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then( response => response.json() )
		.then( data => setComments(data) )
		.catch( (error) => console.log(error) )
	}, [] )
	const comentator = Object.assign({}, location.query.obj.path);
	return(
		<>
			<h1>Comments by {comentator.name.username} : </h1>
				{comments &&
				comments.map((props, index) => (
					<Comment {...props} key={props.id} idUser={comentator.nameid.id} />
				))}

		</>
	)
}

CommentsWrapper.propTypes = {
	location: PropTypes.object,
}

export default CommentsWrapper;