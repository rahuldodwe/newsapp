import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c ='Comp01'
  render() {
    return (
      <div>
        Hello my first class based component: {this.c}
      </div>
    )
  }
}
