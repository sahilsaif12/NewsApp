import React from 'react'
import { Link ,useLocation} from "react-router-dom";


export default function Navbar(props) {

    let modeIcon = props.mode === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="4" />
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
    </svg>

    const navBg = {
        backgroundColor: '#e3f2fd'
    }
    const navBgDark = {
        backgroundColor: '#112031'
    }
    let location=useLocation()
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} `} style={props.mode === 'light' ? navBg : navBgDark}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News Fever</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly w-75"  >
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">Top articles</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/world'?"active":""}`} aria-current="page" to="/world">World</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/nation'?"active":""}`} aria-current="page" to="/nation">Nation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/business'?"active":""}`} to="/business">Business </Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/entertainment'?"active":""}`} to="/entertainment">Entertainment </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/health'?"active":""}`} to="/health">Health  </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/science'?"active":""}`} to="/science">Science   </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/sports'?"active":""}`} to="/sports">Sports   </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/technology'?"active":""}`} to="/technology">Technology   </Link>
                            </li>
                        </ul>
                        <div >
                            <a href="https://twitter.com/Sahilsaif2002" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={props.mode === 'light' ? "#00bfd8" :"#ffffff" }  fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
</svg>
                            </a>
                            <a href="https://www.linkedin.com/in/sk-saifuddin-8593411b4/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke={props.mode === 'light' ? "#0E76A8" :"#ffffff" } fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="8" y1="11" x2="8" y2="16" />
  <line x1="8" y1="8" x2="8" y2="8.01" />
  <line x1="12" y1="16" x2="12" y2="11" />
  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
</svg></a>
                        </div>
                    </div>
                    <button onClick={props.click} className={`toggle-button ${props.mode === 'light' ? 'darkMode' : 'lightMode'}`} style={{ position: "absolute", top: "0", right: "100px" }}>{modeIcon}</button>
                </div>
            </nav>
        </>
    )
}

