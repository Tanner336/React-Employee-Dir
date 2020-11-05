import React from "react";

const EmployeeContext = React.createContext({
  employee: {},
  employees: [],
  handleBtnClick: () => {}
});

export default EmployeeContext;
