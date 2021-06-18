import React from 'react'
import './style.css'
import axios from 'axios'


class CPUPage extends React.Component{

  state={
    name: '',
    fruits: [],
}

fruits=[
  {
      'display':'Apple',
      'value':'apple'},
      {
          'display':'Banana',
          'value': 'banana'
      },
      {
          'display': 'Cherries',
          'value': 'cherries'
      }
  ]

  updateFormField = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    })
}

updateCheckBox= (event) =>{
    let currentValues= this.state[event.target.name];
    let modifiedValues;
    if (!currentValues.includes(event.target.value))
    {
        modifiedValues = [...currentValues, event.target.value];
    }
    else{
        modifiedValues = currentValues.filter((element)=>{
            return element !== event.target.value;
        })
    
    }
    this.setState({
        fruits: modifiedValues
    })
}

componentDidMount() {
  axios.get('./fruits.json').then(r=>{this.fruits=r.data});
}

    render(){
        return(
            <React.Fragment> 
<div class="wallPaper">
    <img class="image_center" src={require("./../images/computerCase.jpg").default}/>
</div> 

{/* table */}
<div id="flex-container">
    <div class="result-container">
      <table>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Type</th> 
    <th>Color</th>
    <th>Brand</th>
  </tr>

  <tr>
    <td><img class="result-images" src={require("./../images/caseSample.jpg").default}/></td>
    <td>Tron III</td>
    <td>Mid Tower</td>
    <td>Black</td>
    <td>Armageddon</td>
  </tr>
</table></div>

{/* filter box */}
    <div class="filter-container">
      <h3>Filters</h3>
      <h4>Case type</h4>
      <div class="filter-segments">
      {this.fruits.map((f)=>(
	        <React.Fragment>
		         <input type="checkbox" 
			        key={f.value}
			        name="fruits" 
			        value={f.value}
			        checked={this.state.fruits.includes(f.value)}
			        onChange={this.updateCheckBox}/>
              <span>{f.display}</span><br/>
	        </React.Fragment>
          ))}
        </div>
     </div>

</div>
  
<footer>Footer</footer>


            </React.Fragment>
        )
    }
}

export default CPUPage