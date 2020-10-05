import React from 'react';
import ReactDOM from 'react-dom';

export default class Jsx0 extends React.Component{
	render(){
		const name = 'Shivang';
		const element = <h1>Hello, {name}</h1>;
		return(element);
	}
}