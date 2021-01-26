import React, { Component } from "react";
import Table from "../components/Table";
import EmployeeForm from "../components/EmployeeForm";


class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: [
        { id: 1, name: 'Jeff', age: 21, email: 'Jeff@email.com', department: 'IT' },
        { id: 2, name: 'Emily', age: 19, email: 'Emily@email.com', department: 'Human Resources' },
        { id: 3, name: 'Tony', age: 16, email: 'Tony@email.com', department: 'Customer Service' },
        { id: 4, name: 'Nick', age: 25, email: 'Nick@email.com', department: 'Production' }
      ]
    }

    this.setTableInput = this.setTableInput.bind(this);
    this.sortEmployeesAge = this.sortEmployeesAge.bind(this);
    this.sortEmployeesName = this.sortEmployeesName.bind(this);
    this.sortEmployeesID = this.sortEmployeesID.bind(this);
    this.sortEmployeesDept = this.sortEmployeesDept.bind(this);
  }

  setTableInput(inputs) {
    this.setState({ employees: [...this.state.employees, inputs] })
  }

  sortEmployeesAge(e) {
    e.preventDefault();
    let sortedEmployees = [...this.state.employees]
    sortedEmployees.sort((a, b) => {
      if (a.age > b.age) return -1;
      if (a.age < b.age) return 1;
      return 0;
    })
    this.setState({ employees: sortedEmployees })
  };

  sortEmployeesName(e) {
    e.preventDefault();
    let sortName = [...this.state.employees]
      sortName.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      })
      this.setState({ employees: sortName});
  };

  sortEmployeesID(e) {
    e.preventDefault();
    let sortedID = [...this.state.employees]
    sortedID.sort((a, b) => {
      if (a.id > b.id) return 1;
      if (a.id < b.id) return -1;
      return 0;
    })
    this.setState({ employees: sortedID })
  }

  sortEmployeesDept(e) {
    e.preventDefault();
    let sortedDept = [...this.state.employees]
    sortedDept.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      return 0;
  })
    this.setState({ employees: sortedDept })
  }


  render() {
    return (
      <div>
        <h1 className="text-center">Welcome to The Employee Directory</h1>
        <h3 className="text-center">Look through our list of employees, or add a new one</h3>
        <button onClick={this.sortEmployeesAge}>Sort by Age</button>
        <br/>
        <button onClick={this.sortEmployeesName}>Sort by Name</button>
        <br/>
        <button onClick={this.sortEmployeesID}>Sort by ID</button>
        <br/>
        <button onClick={this.sortEmployeesDept}>Sort by Department</button>
        <EmployeeForm setTableInput={this.setTableInput} />
        <Table employees={this.state.employees} />
      </div>
    );
  }
}



export default Gallery;