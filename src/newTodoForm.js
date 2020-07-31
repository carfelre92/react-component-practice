import React, { Component } from 'react';

class newTodoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contentInput: '',
            priorityInput: '',
        }
    }

    contentInputHandle = (e) => {
        console.log(e.target.value)
        this.setState({
            contentInput: e.target.value,

        })
    }

    priorityInputHandle = (e) => {
        console.log(e.target.value)
        this.setState({
            priorityInput: e.target.value,

        })
    }

    addToDoButton = (e) => {
        e.preventDefault()
        console.log('button clicked')

        let data = {
            content:this.state.contentInput,
            priority:this.state.priorityInput
        }

        this.props.addTodo(data)

        this.setState({
            contentInput: '',
            priorityInput: '',
        })
    }



    render() {
        return (
            <div className="todo new-todo">
                <form className="todo-body">
                    <div className="form-group">
                        <label htmlFor="content-input">Content</label>
                        <input type="text" className="form-control" id="content-input" value={this.state.contentInput} onChange={this.contentInputHandle} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="priority-input">Priority</label>
                        <input type="text" className="form-control" id="priority-input" value={this.state.priorityInput}  onChange={this.priorityInputHandle} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={this.addToDoButton}>Add</button>
                </form>
            </div>
        )
    }
}

export default newTodoForm;