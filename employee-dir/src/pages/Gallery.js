import React, { useEffect, useState } from "react";

function Gallery() {
  const [employees, setEmployees] = useState([]);


  return (
    <div>
      <h1 className="text-center">Welcome to The Employee DirectoryQ</h1>
      <h3 className="text-center">Look through our list of employees, or add a new one</h3>

    </div>
  );
}



export default Gallery;