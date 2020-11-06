import React, { Component } from "react";
import Table from "../components/Table"
import EmployeeForm from "../components/EmployeeForm"

class Gallery extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      employees: [
      { id: 1, name: 'Jeff', age: 21, email: 'Jeff@email.com' },
      { id: 2, name: 'Emily', age: 19, email: 'Emily@email.com' },
      { id: 3, name: 'Tony', age: 16, email: 'Tony@email.com' },
      { id: 4, name: 'Nick', age: 25, email: 'Nick@email.com' }
    ]}

    this.setTableInput = this.setTableInput.bind(this);
    this.sortEmployees = this.sortEmployees.bind(this);
  }

  setTableInput(inputs) {
    this.setState({employees: [...this.state.employees, inputs]})
  }

  sortEmployees(e) {
    e.preventDefault();
    let sortedEmployees = [...this.state.employees]
    sortedEmployees.sort((a, b) => {
      if (a.age > b.age) {
        return -1;
      }
      if (a.age < b.age) {
        return 1;
      }
      return 0;
    }) 
    this.setState({employees: sortedEmployees})
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Welcome to The Employee Directory</h1>
        <h3 className="text-center">Look through our list of employees, or add a new one</h3>
        <button onClick= {this.sortEmployees}>Sort by Age</button>
        <EmployeeForm setTableInput={this.setTableInput}/>
        <Table employees={this.state.employees}/>
      </div>
    );
  }
}



export default Gallery;