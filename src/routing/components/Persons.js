import React, {Component} from "react";
import {Table,} from 'react-bootstrap'

const urlCharacters = 'https://techjahn.dk/Week-13-CA3/api/info/starwars-characters';

export default class Characters extends Component {
constructor(props) {
  super(props);
  this.state = {characters: []}
    ;
  }
  
  async componentDidMount() {
      //async fetchCharactersFromBackend(){
        const res = await fetch(urlCharacters);
        const data = await res.json();
        const newData = data.map(e => JSON.parse(e));
        console.log(newData);
        this.setState({characters: newData});
        }

render() {
  return (
    <div>
    <h2>Persons table</h2>
    <Table striped bordered hover>
  
      <thead>
        <tr>
          <th>Character Name</th>
        </tr>
      </thead>
      <tbody>
        {this.renderCharacters()}
      </tbody>
      </Table>;
      
      </div>
  );
}

renderCharacters() {
  return this.state.characters.map(e => {
      return (<tr key={e.name}><td>{e.name}</td></tr>)
    }); 
  };
}