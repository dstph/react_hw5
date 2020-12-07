import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({userId, idUser, title, body}) => {	
	return(
		<>
			{userId === idUser &&
				<div>
					<h3>{title}</h3>
					<p>{body}</p>
				</div>
			}
		</>
	)
}

Comment.propTypes = {
	userId: PropTypes.number,
	idUser: PropTypes.number,
	title: PropTypes.string,
	body:  PropTypes.string,
}

export default Comment;