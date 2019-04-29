import React, {Component} from "react";
import {Table,} from 'react-bootstrap'

const urlShips = 'https://techjahn.dk/Week-13-CA3/api/info/starwars-ships';

export default class Characters extends Component {
constructor(props) {
  super(props);
  this.state = {ships: []}
    ;
  }
  
  async componentDidMount() {
        const res = await fetch(urlShips);
        const data = await res.json();
        const newData = data.map(e => JSON.parse(e));
        console.log(newData);
        this.setState({ships: newData});
        }

render() {
  return (
    <div>
    <h2>Ships table</h2>
    <Table striped bordered hover>
  
      <thead>
        <tr>
          <th>Ship Name</th>
          <th>Model</th>
          <th>Max Speed</th>
        </tr>
      </thead>
      <tbody>
        {this.renderShips()}
      </tbody>
      </Table>;
      
      </div>
  );
}

renderShips() {
  return this.state.ships.map(e => {
      return (<tr key={e.name}>
      <td>{e.name}</td>
      <td>{e.model}</td>
      <td>{e.max_atmosphering_speed}</td>
      </tr>)
    }); 
  };
}
