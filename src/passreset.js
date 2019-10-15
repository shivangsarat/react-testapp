import React from 'react';
import {Card, Form, Icon, Input, Button} from 'antd';

export default class PassReset extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            type: 'input',
            score: 'null',
            password: '',
            cnfpassword: '',
        }
        this.showHide = this.showHide.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleCnfpassword = this.handleCnfpassword.bind(this);
    }
    showHide(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type === 'input' ? 'password' : 'input'
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(event.target[1].nextSibling.nextSibling);
        const small = event.target[1].nextSibling.nextSibling;
        if (!this.state || !this.state.password || !this.state.cnfpassword) {
            small.classList.remove("hide");
            small.classList.add("show");
            small.innerText = "Please fill all the Feilds";
            setTimeout(() => {
                small.classList.remove("show");
                small.classList.add("hide");
            }, 2000);
        }
        if (this.state.password !== this.state.cnfpassword) {
            small.classList.remove("hide");
            small.classList.add("show");
            small.innerText = "Does not Match!";
            setTimeout(() => {
                small.classList.remove("show");
                small.classList.add("hide");
            }, 2000);
        }
    }

    handlePassword = (e) => {
        this.setState({
            password : e.target.value
        });
    }

    handleCnfpassword = (e) => {
        this.setState({
            cnfpassword : e.target.value
        });
    }


    render() {
        return (
            <div>
                <Card title="Reset Password">
                    <Form>
                        <Input addonAfter={<Icon type="eye" />} placeholder='Password' type='password' onBlur={this.handlePassword} />
                        <br />
                        <Input placeholder='Confirm Password' type='password' onBlur={this.handleCnfpassword}/>
                        <br />
                        <Button>Submit</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}