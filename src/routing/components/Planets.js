import React, {Component} from "react";
import {Table,} from 'react-bootstrap'

const urlPlanets = 'https://www.joergoertel.com/Week-13-CA3/api/info/starwars-planets';

export default class Characters extends Component {
constructor(props) {
  super(props);
  this.state = {planets: []}
    ;
  }
  
  async componentDidMount() {
        const res = await fetch(urlPlanets);
        const data = await res.json();
        const newData = data.map(e => JSON.parse(e));
        console.log(newData);
        this.setState({planets: newData});
        }

render() {
  return (
    <div>
    <h2>Planets table</h2>
    <Table striped bordered hover>
  
      <thead>
        <tr>
          <th>Planet Name</th>
          <th>Climate</th>
        </tr>
      </thead>
      <tbody>
        {this.renderPlanets()}
      </tbody>
      </Table>;
      
      </div>
  );
}

renderPlanets() {
  return this.state.planets.map(e => {
      return (<tr key={e.name}>
      <td>{e.name}</td>
      <td>{e.climate}</td>
      </tr>)
    }); 
  };
}
