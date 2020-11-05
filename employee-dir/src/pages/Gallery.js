import React, { Component } from "react";
import Table from "../components/Table"
import EmployeeForm from "../components/EmployeeForm"

class Gallery extends Component {
  constructor(props) {
    super(props) 
    this.state = { 
      id: "",
      name: "",
      age: "",
      email: ""
    }
    this.setTableInput = this.setTableInput.bind(this);
  }

  setTableInput(inputs) {
    this.setState({id: inputs.id})
    this.setState({name: inputs.name})
    this.setState({age: inputs.age})
    this.setState({email: inputs.email})
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Welcome to The Employee Directory</h1>
        <h3 className="text-center">Look through our list of employees, or add a new one</h3>
        <EmployeeForm setTableInput={this.setTableInput}/>
        <Table />
      </div>
    );
  }
}



export default Gallery;