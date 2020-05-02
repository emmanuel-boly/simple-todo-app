import React, { Component } from "react"

class InputTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "boly"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {    
        this.setState({[e.target.name]: e.target.value});  
    }

    handleSubmit(e) { 
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ''
        });
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit} className="form-container">
            <input type="text" placeholder="Add Todo..." value={this.state.title} onChange={this.handleChange} name="title"/>
            <input type="submit" value="Submit" className="input-submit" />
        </form>
        )
    }
}
export default InputTodo

