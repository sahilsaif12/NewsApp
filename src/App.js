import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  constructor() {
    super()
    this.state = { mode: "dark" }
  }

  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({ mode: "dark" })
    }
    else {
      this.setState({ mode: "light" })
    }
  }

  navBg = {
    backgroundColor: '#ededed',
    minHeight:"100vh"
  }
  navBgDark = {
    backgroundColor: '#152D35',
    minHeight:"100vh"

  }
  render() {
    return (
      <>
        <div  style={this.state.mode === "dark" ? this.navBgDark : this.navBg}>
          <Router>
            <Navbar click={this.toggleMode} mode={this.state.mode} />
            <Switch>
              <Route exact path="/"><News mode={this.state.mode} country="in" category='general' key='general' /></Route>
              <Route exact path="/business"><News mode={this.state.mode} country="in" category='business' key='business' /></Route>
              <Route exact path="/entertainment"><News mode={this.state.mode} country="in" category='entertainment' key='entertainment' /></Route>
              <Route exact path="/health"><News mode={this.state.mode} country="in" category='health' key="health" /></Route>
              <Route exact path="/science"><News mode={this.state.mode} country="in" category='science' key="science" /></Route>
              <Route exact path="/sports"><News mode={this.state.mode} country="in" category='sports' key="sports" /></Route>
              <Route exact path="/technology"><News mode={this.state.mode} country="in" category='technology' key="technology" /></Route>
            </Switch>
          </Router>
        </div>

      </>
    )
  }
}

// 87aa4da3834a4ea682552d2d82db8db2

// 3fe21346255e0af2e1ce2264747f94cc

