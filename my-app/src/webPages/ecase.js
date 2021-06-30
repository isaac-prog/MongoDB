import React from 'react'
import axios from 'axios'
import './style.css'

export default class EditCasePage extends React.Component{
    url = "https://3000-gray-worm-b5s136s0.ws-us08.gitpod.io/"

    state= {
        data: [],
        "page":"Case",
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount() {
        let response = await axios.get(this.url + "case/create");
}
    
deleteCase = task_id => {
    let task_index = this.state.Case.findIndex(t => t.id === task_id);
    let modifiedTasks = [
        ...this.state.Case.slice(0, task_index),
        ...this.state.Case.slice(task_index + 1)
    ];
    this.setState({
        case: modifiedTasks
    });
};

    displayCase = t => {
        return (
            <li key={t.id}>
                {t.type}
                <input
                    type="radio"
                    value={t.type === true}
                    onChange={() => {
                        this.checkCase(t.id);
                    }}
                /><button onClick={() => this.deleteCase(t.id)}>
                Delete
      </button>
            </li>
        );
    };

    render() {
        return (
            <React.Fragment>
                <div class="create-edit-field">
                <h2>Create new case</h2>
            <div>
                <label>Case name</label><br/>
                <input
                    type="text"
                    name="newCaseName"
                    value={this.state.newCaseName}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Case type</label><br/>
                <input
                    type="text"
                    name="newCaseType"
                    value={this.state.newCaseType}
                    onChange={this.updateFormField}
                /><br/><br/>
                
                <label>Case Color</label><br/>
                <input
                    type="text"
                    name="newCaseColor"
                    value={this.state.newCaseColor}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Case brand</label><br/>
                <input
                    type="text"
                    name="newCaseBrand"
                    value={this.state.newCaseBrand}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Case image (URL ONLY)</label><br/>
                <input
                    type="text"
                    name="newCaseImage"
                    value={this.state.newCaseImage}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Case description</label><br/>
                <textarea class="description-textbox"
                    type="text"
                    name="newCaseDescription"
                    value={this.state.newCaseDescription}
                    onChange={this.updateFormField}
                /><br/><br/>

                <button onClick={this.deleteCase}>Add</button>
                </div><br/>

                </div>
            </React.Fragment>
        )
    }
}

