import React from 'react'
import axios from 'axios'

export default class CreateCasePage extends React.Component{
    url = "https://3000-gray-worm-b5s136s0.ws-us09.gitpod.io/"

    state= {
        tasks:[],
        newTaskName: "",
        taskBeingEdited: 0,
        modifiedTaskName: ""
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount() {
        let response = await axios.get(this.url + "tasks/create");
}
    
    addTask = async (e) => {
        let newTask = {
            'description': this.state.newTaskName,
            'done': false
        }
        console.log(newTask)
        let response = await axios.post(this.url + "tasks/create", newTask);
        let currentValues = this.state.tasks;
        let modifiedValues = [...currentValues, newTask];
        this.setState({
            'tasks': modifiedValues,
            'newTaskName': ''
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <h2>Create new Task</h2>
            <div>
                <label>Task Description</label>
                <input
                    type="text"
                    name="newTaskName"
                    value={this.state.newTaskName}
                    onChange={this.updateFormField}
                />
                <button onClick={this.addTask}>Add</button>
            </div>
            </React.Fragment>
        )
    }
}

