import React, { useState } from 'react';
import './Form.css'
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const Form = ({addFunc, isShown}) => {
	const [ newCard, setCard ] = useState({
		name: '',
		username: '', 
		email: '',
		phone: ''
	});
	const handler = (e) => {
		setCard((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value
		}));
	}
	const showHidenClassName = isShown ? "add_form display-block" : "add_form display-none";
	return(
		<div className={showHidenClassName}>
			<form className="add_form_content">
				<label htmlFor="name">Name</label>
				<input id='name' name='name' value={newCard.name} onChange={handler} />
				<label htmlFor="username">Username</label>
				<input id='username' name='username' value={newCard.username} onChange={handler} />
				<label htmlFor="email">Email</label>
				<input id='email' name='email' value={newCard.email} onChange={handler} />
				<label htmlFor="phone">Phone</label>
				<input id='phone' name='phone' value={newCard.phone} onChange={handler} />
				<Button className='submit_btn' buttonText='Submit' clickFunc={(e)=>addFunc(e,newCard)} />
			</form>
	</div>
	)
}

Form.propTypes = {
	addFunc: PropTypes.func,
	isShown: PropTypes.bool,
}

export default Form;