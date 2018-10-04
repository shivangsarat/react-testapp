import React from 'react';
import ReactDOM from 'react-dom';

const name = {
    fname: 'Shivang',
    lname: 'Sarat'
}

function usr (name) {
    return name.fname  + " " + name.lname;
}

const element =  React.createElement (
    'h1',
    {className : 'jsx1'},
    'Hello, {usr(name)}'
);

export default class Jsx2 extends React.Component {
    render () {
        return (element)
    }
}