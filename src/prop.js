import React from './react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
  
const element = <Welcome name="Sara" />;

class Prop0 extends React.Component {
    render(){
        return element
    }
}