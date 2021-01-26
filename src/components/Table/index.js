import React, { Component } from 'react'
import "./style.css"

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: this.props.employees
    }
  }

  renderTableData() {
    return this.props.employees.map((employees, index) => {
      const { id, name, age, email, department } = employees
      return (
        <tr key={id}>
          <td style={{ fontWeight: "bold" }}>{id}</td>
          <td style={{ fontWeight: "bold" }}>{name}</td>
          <td style={{ fontWeight: "bold" }}>{age}</td>
          <td style={{ fontStyle: "italic", fontWeight: "bold" }}>{email}</td>
          <td style={{ fontWeight: "bold" }}>{department}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    let header = Object.keys(this.props.employees[0])
    return header.map((key, index) => {
      return <th key={index} style={{ textDecorationLine: "underline" }}>{key.toUpperCase()}</th>
    })
  }

  render() {
    return (
      <div>
        <h1 id='title'>Employees</h1>
        <table className="table">
          <tbody style={{display:"block", overflowY: "scroll", height:"150px" }}>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table