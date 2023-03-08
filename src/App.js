import React from 'react';
import Navigation from './Components/Navigation';
import Wrapper from './Components/Wrapper';
import './App.css';

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
                
      }
    }

  render() {
      return (
          <div>
            <Navigation />
            <Wrapper />
            
          </div>
      )
  }
}

export default App;