import React from 'react';
import TodosList from './TodosList';
import Header from "./Header";
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: uuidv4(),
                    title: "Setup development environment",
                    completed: true
                },
                {
                    id: uuidv4(),
                    title: "Develop website and add content",
                    completed: false
                },
                {
                    id: uuidv4(),
                    title: "Deploy to live server",
                    completed: false
                }
            ]
        }

        this.handleChange = this.handleChange.bind(this);
        this.delTodo = this.delTodo.bind(this);
        this.addTodoItem = this.addTodoItem.bind(this);
    }

    addTodoItem(title) {
        const newTodo = {    
            id: uuidv4(),    
            title: title,    
            completed: false  
        };  
        this.setState({    
            todos: [...this.state.todos, newTodo]  
        });
    }

    delTodo(id) {
        this.setState({    
            todos: [      
                ...this.state.todos.filter(todo => {        
                    return todo.id !== id;      
                })    
            ]  
        });
    }

    handleChange(id) {
        const todos = this.state.todos.slice();
        for (let index = 0; index < todos.length; index++) {
            if(todos[index].id === id){
                todos[index].completed = !todos[index].completed;
                break;
            }
        }
        this.setState({todos: todos});
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <InputTodo addTodoProps={this.addTodoItem}/>
                <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoPros={this.delTodo}/>
            </div>
        )
    }
}
export default TodoContainer