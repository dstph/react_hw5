import React from 'react';
import './User.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const User = ({
	id,
	name, 
	username, 
	email,
	address='-',
	address:{street, suite, city, zipcode,
	geo:{ lat, lng }='-'}='-',
	phone,
	website,
	company='-',
	company:{name:companyName, catchPhrase, bs}='-'
	}) => {
	const path = { name: {username}, nameid: {id}}
	return(
		<>
				<span>name : { name ? name : '-' }</span>
				<span>username : { username ? username : '-' }</span>
				<span>email : { email ? email : '-' }</span>
				<span>phone : { phone ? phone : '-' }</span>
				{address !== '-' &&
					<>
						<span>Adress : </span>
						<span>street : { street }</span>
						<span>suite : { suite }</span>
						<span>city : { city }</span>
						<span>zipcode: { zipcode }</span>
						<span>geo : </span>
						<span>lat : { lat }</span>
						<span>lng : { lng }</span>
					</>
				}
				<span>website : { website ? website : '-' }</span>
				{company !== '-' &&	
					<>
						<span>Company : </span>
						<span>name : { companyName }</span>
						<span>catch phtase : { catchPhrase }</span>
						<span>bs : { bs }</span>
					</>
				}	
				<Link to={{pathname: `/user/${id}`,  query: { obj: {path} } }} > see me </Link>
		</>
	)
}

User.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string, 
	username: PropTypes.string, 
	email: PropTypes.string,
	address: PropTypes.object,
	street: PropTypes.string, 
	suite: PropTypes.string, 
	city: PropTypes.string, 
	zipcode: PropTypes.number,
	geo: PropTypes.object,
	lat: PropTypes.number,
	lng: PropTypes.number,
	phone: PropTypes.number,
	website: PropTypes.string,
	company: PropTypes.object,
	companyName: PropTypes.string,
	catchPhrase: PropTypes.string,
	bs: PropTypes.string,
}

export default User;

