import React from "react";
import {Table, Button} from 'react-bootstrap'

const Persons = () => {
  return (
   <div>
  <h2>Persons table</h2>
  <Table striped bordered hover>

    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
    </Table>;
    
    </div>
  );
};

export default Persons;
