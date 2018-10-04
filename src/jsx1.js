import React from 'react';
import ReactDOM from 'react-dom';

function formatname (user) {
	return user.firstname + ' ' + user.lastname;
}

const user = {
	firstname : 'Shivang',
	lastname : 'Sarat',
};
const element = (<h1>Hello, {formatname(user)}</h1>);

export default class Jsx1 extends React.Component {
	render () {
		return element;
	}
}