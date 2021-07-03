import React from 'react'
import axios from 'axios'
import './../webPages/style.css'

export default class EditCpuPage extends React.Component{
    url = "https://tgc-project2.herokuapp.com/"

    state= {
        data: [],
        editedCpuName: "",
        editedCpuType: "",
        editedCpuColor: "",
        editedCpuDescription: "",
        editedCpuBrand: "",
        editedCpuImage: "",
        taskBeingEdited: 0,
        modifiedTaskName: ""
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount() {
        let response = await axios.get(this.url + "cpu/" + this.props.id + "/edit");
        this.setState({
          data:response.data,
          editedCpuName: response.data.name,
          editedCpuType: response.data.type,
          editedCpuColor: response.data.color,
          editedCpuDescription:  response.data.description,
          editedCpuBrand: response.data.brand,
          editedCpuImage: response.data.image,
        })
        this.updateTask(this.props.id);
        this.setState({
        taskBeingEdited: 0
        })
}

updateTask = async (task_id) => {
  let newdata = {
    _id: task_id,
    name: this.state.editedCpuName,
    type: this.state.editedCpuType,
    color: this.state.editedCpuColor,
    description: this.state.editedCpuDescription,
    brand: this.state.editedCpuBrand,
    image: this.state.editedCpuImage
  }
  let response = await axios.post(this.url + "cpu/" + this.props.id + "/edit", newdata);
}
  
    
    render() {
        return (
            <React.Fragment>
                <div class="create-edit-field">
                <h2>Create edited cpu</h2>
            <div>
                <label>Cpu name</label><br/>
                <input
                    type="text"
                    name="editedCpuName"
                    value={this.state.editedCpuName}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Cpu type</label><br/>
                <input
                    type="text"
                    name="editedCpuType"
                    value={this.state.editedCpuType}
                    onChange={this.updateFormField}
                /><br/><br/>
                
                <label>Cpu Color</label><br/>
                <input
                    type="text"
                    name="editedCpuColor"
                    value={this.state.editedCpuColor}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Cpu brand</label><br/>
                <input
                    type="text"
                    name="editedCpuBrand"
                    value={this.state.editedCpuBrand}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Cpu image (URL ONLY)</label><br/>
                <input
                    type="text"
                    name="editedCpuImage"
                    value={this.state.editedCpuImage}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Cpu description</label><br/>
                <textarea class="description-textbox"
                    type="text"
                    name="editedCpuDescription"
                    value={this.state.editedCpuDescription}
                    onChange={this.updateFormField}/>
                    <br/><br/>

                <button onClick={() => this.updateTask(this.props.id)}>Update Changes</button>
                </div><br/>
                </div>
                
            </React.Fragment>
        )
    }
}

