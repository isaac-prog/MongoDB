import React from "react";
import axios from "axios";

export default class Listing extends React.Component {
 url = "https://3000-violet-piranha-v4r6764u.ws-us08.gitpod.io/";

 state = {
   data: []
 };

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

async componentDidMount() {
  let response = await axios.get(this.url + "case");
  this.setState({
    data: response.data
  });
}

 render() {
   return (
     <React.Fragment>
       <div class="wallPaper">
          <img class="image_center" src={require("./../images/computerCase.jpg").default}/>
       </div>

       {/* table */}
<div id="flex-container">
    <div class="result-container">

    {this.state.data.map(c => {
         return (
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
            <td>{c.name}</td>
            <td>{c.type}</td>
            <td>{c.color}</td>
            <td>{c.brand}</td>
          </tr>
        </table>
         )
       })}
       </div>
</div>
     </React.Fragment>
   );
 }
}