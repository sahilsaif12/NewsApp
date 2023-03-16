import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
// import ErrorPage from './components/ErrorPage'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
// require('dotenv').config()

export default function App(){

  // const apiKey = process.env.REACT_APP_API_KEY 
  const apiKey = "49760c423f4973f0751d27f50b55803b" 
  
  const [mode, setMode] = useState("dark")
  const [progress, setProgress] = useState(0)
  const [Keyword, setKeyword] = useState()
  // const [statusCode, setStatusCode] = useState(200)
  
  const toggleMode = () => {
    if ( mode === 'light') {
       setMode("dark")
       document.documentElement.style.setProperty("--scrollbarBG", '#152D35')
       document.documentElement.style.setProperty("--thumbBG","#345B63")
    }
    else {
       setMode("light")
        document.documentElement.style.setProperty("--scrollbarBG", '#ededed')
       document.documentElement.style.setProperty("--thumbBG","#363636")
    }
  }

  const navBg = {
    backgroundColor: '#ededed',
    minHeight: "100vh"
  }
  const navBgDark = {
    backgroundColor: '#152D35',
    minHeight: "100vh"

  }

  const setProgressFun = (progress) => {
      setProgress(progress)
  }

  // if (statusCode==404 || statusCode==403) {
  //         return <ErrorPage status={String(statusCode).charAt(2)}/>
  //     }
  // { (statusCode===404 || statusCode===403) && <ErrorPage status={String(statusCode).charAt(2)}/>}

    return (
      <>
         <div style={ mode === "dark" ? navBgDark : navBg}>
          <Router>
            <Navbar click={ toggleMode} mode={ mode} />
            <LoadingBar
              color='#CE1F6A'
              progress={ progress}
              height={4}
            />
            <div className="container mt-3">
                    <form className="d-flex justify-content-center">
                        <input className="form-control me-2 search-field" value={Keyword} onChange={(e)=>{setKeyword(e.target.value)}} style={ mode === 'dark' ? { background: "#D4ECDD", width: "40%" } : { backgroundColor: "#fff", width: "40%" }} type="text" placeholder="Search any keyword of news..." aria-label="Search" />
                        <Link className="btn btn-outline-success"  to={"/"+Keyword}>Search</Link>
                    </form>
                </div>
            <Switch>
            
              <Route exact path={"/"+Keyword}><News apiKey={ apiKey} setProgress= { setProgressFun} keyword={ Keyword} mode={ mode} country="in" category={null} lang="en" key='searchKeyword' /></Route>
              <Route exact path="/"><News  apiKey={ apiKey}  setProgress= { setProgressFun} mode={ mode} country="in" category='breaking-news' lang="en" key='breaking-news' /></Route>
              <Route exact path="/world"><News apiKey={ apiKey} setProgress= { setProgressFun} mode={ mode} country="in" category='world' lang="en" key='world' /></Route>
              <Route exact path="/nation"><News apiKey={ apiKey} setProgress= { setProgressFun} mode={ mode} country="in" category='nation' lang="en" key='nation' /></Route>
              <Route exact path="/business"><News apiKey={ apiKey} setProgress= { setProgressFun} mode={ mode} country="in" category='business' lang="en" key='business' /></Route>
              <Route exact path="/entertainment"><News apiKey={ apiKey} setProgress= { setProgressFun} mode={ mode} country="in" category='entertainment' lang="en" key='entertainment' /></Route>
              <Route exact path="/health"><News apiKey={ apiKey} setProgress= { setProgressFun} mode={ mode} country="in" category='health' lang="en" key="health" /></Route>
              <Route exact path="/science"><News apiKey={ apiKey} setProgress= { setProgressFun} mode={ mode} country="in" category='science' lang="en" key="science" /></Route>
              <Route exact path="/sports"><News apiKey={ apiKey} setProgress= { setProgressFun} mode={ mode} country="in" category='sports' lang="en" key="sports" /></Route>
              <Route exact path="/technology"><News apiKey={ apiKey} setProgress= { setProgressFun} Keyword={Keyword} mode={ mode} country="in" category='technology' lang="en" key="technology" /></Route>
            </Switch>
          </Router>
        </div>

      </>
    )
  }



