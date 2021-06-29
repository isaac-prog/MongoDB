import React from 'react'
import axios from 'axios'
import './style.css'

export default class CreateCasePage extends React.Component{
    url = "https://3000-gray-worm-b5s136s0.ws-us08.gitpod.io/"

    state= {
        case:[],
        newCaseName: "",
        newCaseType: "",
        newCaseColor: "",
        newCaseDescription: "",
        newCaseBrand: "",
        newCaseImage: "",
        taskBeingEdited: 0,
        modifiedTaskName: "",
        showPopup: false
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount() {
        let response = await axios.get(this.url + "case/create");
}
    
    addCase = async (e) => {
        let newCase = {
            'name':this.state.newCaseName,
            'type':this.state.newCaseType,
            'color':this.state.newCaseColor,
            'description':this.state.newCaseDescription,
            'brand':this.state.newCaseBrand,
            'image':this.state.newCaseImage
        }
        console.log(newCase)
        let response = await axios.post(this.url + "case/create", newCase);
        let currentValues = this.state.case;
        let modifiedValues = [...currentValues, newCase];
        this.setState({
            'case': modifiedValues,
            'newCaseName': '',
            'newCaseType':'',
            'newCaseColor':'',
            'newCaseDescription':'',
            'newCaseBrand':'',
            'newCaseImage':''
        });

        this.setState({
            showPopup: false
          });
    }

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
                />
            </li>
        );
    };

    renderPopup() {
        if (this.state.showPopup) {
          return (
            <div className="popup-background">
              <div className="popup">
                <button onClick={this.hidePopup}>X</button>
              </div>
            </div>
          );
        } else {
          return null;
        }
      }

    displayPopup = () => {
        this.setState({
          showPopup: true
        });
      };
    
    hidePopup = () => {
        this.setState({
          showPopup: false
        });
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

                <button onClick={this.addCase}>Add</button>
                </div><br/>

                {this.renderPopup()}
                </div>
            </React.Fragment>
        )
    }
}

