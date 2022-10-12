import React from 'react';
import ReactDOM from 'react-dom';

export default class Jsx2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (this.props.name)
    }
}