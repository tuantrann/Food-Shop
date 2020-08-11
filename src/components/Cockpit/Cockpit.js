import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      const timer = setTimeout(() => {
        alert('Saved data to cloud');  
      }, 1000);

      return () => {
        clearTimeout(timer);
        console.log('[Cockpit.js] cleanUpWork');
      }
    }, []);    
      useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
    
        return () => {
          console.log('[Cockpit.js] 2nd cleanUpWork');
        }
      });   
    let assign = [];
    let btnClass= [classes.Button];
    if(props.showPerson) {
        btnClass.push(classes.Red);
    }
    if (props.personsLength <= 2) { 
      assign.push(classes.red);
    }
    if(props.personsLength <= 1) {
      assign.push(classes.bold);
    }
    return (
        <div>
            <h1>{props.title}</h1>
            <p className={assign.join(' ')}>This is working!</p>
            <button
            className={btnClass.join(' ')}
            onClick={props.click}>Toggle</button>
        </div>
    );
};

export default React.memo(Cockpit);