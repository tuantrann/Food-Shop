import React, { Component } from 'react';
import classes from './App.css';
import Aux from '../components/hoc/Auxiliary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass';
class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state  = {
    persons: [
      { id:'1', name: "Max", age: 28 },
      { id: '2', name: 'Manu', age: 30 },
      { id: '3', name: 'Stephanie', age: 20 }
    ],
    otherState: 'Some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] GetDerivedStateFromProps', props);
    return state;
  }
  
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidMount() { 
    console.log('[App.js] componentDidMount');
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons){
      persons = <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}/>
      ;
      
    }
    
    return (
      <Aux>
        <button 
        onClick={() => {
        this.setState({ showCockpit: false })}}>
        Remove Cockpit</button>
        {
          (this.state.showCockpit) ? 
          <Cockpit 
          title={this.props.appTitle}
          showPerson={this.state.showPersons}
          click={this.togglePersonHandler}
          personsLength={this.state.persons.length} />
           : null
         
        }
         { persons }
      </Aux>
    );
  }
}


export default withClass(App, classes.App);




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