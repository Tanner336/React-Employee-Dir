import React, { Component } from 'react'

class Table extends Component {
  constructor(props) {
    super(props) 
    this.state = { 
      employees: [
        { id: 1, name: 'Jeff', age: 21, email: 'Jeff@email.com' },
        { id: 2, name: 'Emily', age: 19, email: 'Emily@email.com' },
        { id: 3, name: 'Tony', age: 16, email: 'Tony@email.com' },
        { id: 4, name: 'Nick', age: 25, email: 'Nick@email.com' }
      ]
    }
  }
  
  renderTableData() {
    return this.state.employees.map((employees, index) => {
      const { id, name, age, email } = employees
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    let header = Object.keys(this.state.employees[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  render() {
    return (
      <div>
        <h1 id='title'>Employees</h1>
        <table className="text-center" id='employees'>
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table