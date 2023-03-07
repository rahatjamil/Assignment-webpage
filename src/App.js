import React from 'react';
import './App.css';
import Nav2 from './Components/Nav2';
import Patient from './Components/Patient';
import Details from './Components/Personal_details';
import Documents from './Components/Documents';
import Navigation from './Components/Navigation';
import Medical_records from './Components/Medical_records';

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
                
      }
    }

  render() {
      return (
          <div>
            <Navigation></Navigation>
          </div>
      )
  }
}

export default App;