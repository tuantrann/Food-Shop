import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state  = {
    persons: [
      { id:'1', name: "Max", age: 28 },
      { id: '2', name: 'Manu', age: 30 },
      { id: '3', name: 'Stephanie', age: 20 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  
  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

// const app = props => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: "Max", age: 28 },
//       { name: 'Manu', age: 30 },
//       { name: 'Stephanie', age: 20 }
//     ]
//   });

//   const [otherState, setOtherState] = useState("someOtherValue");


//   const switchNameHandler = () => {
//     //console.log("Was clicked!");
//     // Don't do this this.state.persons[0].name = "Tuan Tran";
//     setPersonState({
//       persons : [
//       { name: "Tuan Tran", age: 21 },
//       { name: 'Manu', age: 30 },
//       { name: 'Stephanie', age: 20 }
//       ],
//       otherState: 'Some other value'
//     })
//   }; 
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '9px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)} />
        })}
      </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working!</p>
        <button
        style={style} 
        onClick={this.togglePersonHandler}>Toggle</button>
        { persons }
     </div>
    );
  }
}


export default App;
