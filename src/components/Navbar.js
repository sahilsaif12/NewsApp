import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Navbar extends Component {


    render() {
        let modeIcon = this.props.mode === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="4" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        </svg>

        const navBg={
            backgroundColor:'#e3f2fd'
        }
        const navBgDark={
            backgroundColor:'#112031'
        }
        return (
            <>
                <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} `} style={this.props.mode==='light'?navBg:navBgDark}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News Fever</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly w-75"  >
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Top articles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/world">World</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/nation">Nation</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/business">Business </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" to="/entertainment">Entertainment </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/health">Health  </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/science">Science   </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/sports">Sports   </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/technology">Technology   </Link>
                                </li>
                            </ul>

                        </div>
                        <button onClick={this.props.click} className={`toggle-button ${this.props.mode === 'light' ? 'darkMode' : 'lightMode'}`} >{modeIcon}</button>
                    </div>
                </nav>
            </>
        )
    }
}
