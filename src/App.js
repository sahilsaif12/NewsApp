import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
// require('dotenv').config()

export default class App extends Component {

  apiKey = process.env.REACT_APP_API_KEY 
  constructor() {
    super()
    this.state = {
      mode: "dark",
      progress: 0,
      Keyword:null
    }
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
    minHeight: "100vh"
  }
  navBgDark = {
    backgroundColor: '#152D35',
    minHeight: "100vh"

  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  
  searchKeyword=(event)=>{
    this.setState({Keyword:event.target.value})
  }

  render() {
    return (
      <>
        <div style={this.state.mode === "dark" ? this.navBgDark : this.navBg}>
          <Router>
            <Navbar click={this.toggleMode} mode={this.state.mode} />
            <LoadingBar
              color='#CE1F6A'
              progress={this.state.progress}
              height={4}
            />
            <div className="container mt-3">
                    <form className="d-flex justify-content-center">
                        <input className="form-control me-2 search-field" onChange={this.searchKeyword} style={this.props.mode === 'dark' ? { background: "#D4ECDD", width: "40%" } : { backgroundColor: "#fff", width: "40%" }} type="text" placeholder="Search any keyword related news..." aria-label="Search" />
                        <Link className="btn btn-outline-success"  to="/q">Search</Link>
                    </form>
                </div>
            <Switch>
            
              <Route exact path="/q"><News apiKey={this.apiKey} setProgress={this.setProgress} keyword={this.state.Keyword} mode={this.state.mode} country="in" category={null} lang="en" key='searchKeyword' /></Route>
              <Route exact path="/"><News apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.mode} country="in" category='breaking-news' lang="en" key='breaking-news' /></Route>
              <Route exact path="/world"><News apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.mode} country="in" category='world' lang="en" key='world' /></Route>
              <Route exact path="/nation"><News apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.mode} country="in" category='nation' lang="en" key='nation' /></Route>
              <Route exact path="/business"><News apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.mode} country="in" category='business' lang="en" key='business' /></Route>
              <Route exact path="/entertainment"><News apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.mode} country="in" category='entertainment' lang="en" key='entertainment' /></Route>
              <Route exact path="/health"><News apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.mode} country="in" category='health' lang="en" key="health" /></Route>
              <Route exact path="/science"><News apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.mode} cou ntry="in" category='science' lang="en" key="science" /></Route>
              <Route exact path="/sports"><News apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.mode} country="in" category='sports' lang="en" key="sports" /></Route>
              <Route exact path="/technology"><News apiKey={this.apiKey} setProgress={this.setProgress} Keyword={null} mode={this.state.mode} country="in" category='technology' lang="en" key="technology" /></Route>
            </Switch>
          </Router>
        </div>

      </>
    )
  }
}

