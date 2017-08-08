import React, { Component } from 'react'
import TMInput from './components/TMInput'


class App extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
      <div className>
         <TMInput
           id='test'
           hintText='test'
           plateHolder='test'
          />
      </div>
    );
  }
}

export default App;
