import React,  { useState, useEffect } from 'react';
import User from '../User/User';
import './UserWrapper.css'; 
import Button from '../Button/Button';
import Form from '../Form/Form';

const UserWrapper = () => {
	const [ users, setUsers ] = useState([]);
	const [ isShown, showModal ] = useState(false);
	const removeUser = (index) => {
		let newList = [...users];
		newList.splice(index, 1);
		setUsers( newList );
	}
	const	showIt = () => {
		showModal(!isShown);
	}
	const addElement = (e, newUser) => {
		e.preventDefault();
		let newList = [...users];
		newList.push(newUser);
		setUsers( newList );
		showIt();
	}
	useEffect( () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then( response => response.json() )
			.then( data => setUsers(data) )
			.catch( (error) => console.log(error) )
	}, []  )
	return(
		<>
			<div className="container-grid">
			{users  &&
			users.map((props, index) => (
			 	<div className="card">
					<User {...props} key={props.email} />	
					<Button className='delete_btn' buttonText='delete' clickFunc={()=>removeUser(index)} />		
				</div>
			))}
			</div>
			<Button className='add_btn' buttonText='Add' clickFunc={()=>showIt()} />
			<Form addFunc={addElement} isShown={isShown} />
		</>
	)
}

export default UserWrapper;