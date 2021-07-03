import React from 'react'
import axios from 'axios'
import './../webPages/style.css'

export default class CreateCpuPage extends React.Component{
    url = "https://tgc-project2.herokuapp.com/"
    state= {
        Cpu:[],
        newCpuName: "",
        newCpuType: "",
        newCpuColor: "",
        newCpuDescription: "",
        newCpuBrand: "",
        newCpuImage: "",
        taskBeingEdited: 0,
        modifiedTaskName: "",
        newDone: false,
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount() {
        let response = await axios.get(this.url + "cpu/create");
}
    
    addCpu = async (e) => {
        let newCpu = {
            'name':this.state.newCpuName,
            'type':this.state.newCpuType,
            'color':this.state.newCpuColor,
            'description':this.state.newCpuDescription,
            'brand':this.state.newCpuBrand,
            'image':this.state.newCpuImage,
            'done': this.state.newDone
        }
        console.log(newCpu)
        let response = await axios.post(this.url + "cpu/create", newCpu);
        let currentValues = this.state.Cpu;
        let modifiedValues = [...currentValues, newCpu];
        this.setState({
            'Cpu': modifiedValues,
            'newCpuName': '',
            'newCpuType':'',
            'newCpuColor':'',
            'newCpuDescription':'',
            'newCpuBrand':'',
            'newCpuImage':'',
            'done': false
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <div class="create-edit-field">
                <h2>Create new Cpu</h2>
            <div>
                <label>Cpu name</label><br/>
                <input
                    type="text"
                    name="newCpuName"
                    value={this.state.newCpuName}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Cpu type</label><br/>
                <input
                    type="text"
                    name="newCpuType"
                    value={this.state.newCpuType}
                    onChange={this.updateFormField}
                /><br/><br/>
                
                <label>Cpu Color</label><br/>
                <input
                    type="text"
                    name="newCpuColor"
                    value={this.state.newCpuColor}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Cpu brand</label><br/>
                <input
                    type="text"
                    name="newCpuBrand"
                    value={this.state.newCpuBrand}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Cpu image (URL ONLY)</label><br/>
                <input
                    type="text"
                    name="newCpuImage"
                    value={this.state.newCpuImage}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Cpu description</label><br/>
                <textarea class="description-textbox"
                    type="text"
                    name="newCpuDescription"
                    value={this.state.newCpuDescription}
                    onChange={this.updateFormField}
                /><br/><br/>

                <button onClick={this.addCpu}>Add</button>
                </div><br/>
                </div>
            </React.Fragment>
        )
    }
}

