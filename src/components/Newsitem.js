import React from 'react'


export default function Newsitem(props) {

        let { title, desc, url, image, source, mode } = props
        let textColor = mode === 'light' ? 'dark' : 'light'
        const navBg = {
            backgroundColor: '#EEEEEE',
            minHeight: "450px"
        }
        const navBgDark = {
            backgroundColor: '#345B63',
            minHeight: "450px"
            
        }
        return (
            <div className="rounded shadow-lg" >
                <div className={`card px-2 text-${textColor}`} style={mode === "light" ? navBg : navBgDark}>
                    <span className="position-absolute  badge rounded-pill " style={{ right: "0%",top:"-10px", zIndex: "1", backgroundColor: "#CE1F6A" }}>{source}</span>
                    <img src={image ? image : "https://i.postimg.cc/CMWn80gx/no-image-300x245.jpg"} className="card-img-top" style={{ height: "170px" }} alt="..." />
                    <div className="card-body d-flex flex-column align-items-center justify-content-between  ">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{desc}</p>
                        <p className="card-text"><small className="author" style={mode==="light"?{color:"#777"}:{color:"#b8adad"}}> {Math.round((new Date().getTime() - new Date(props.date).getTime()) / 1000 / 3600)} hours ago</small></p>
                        <a href={url} rel="noreferrer" target="_blank" className={`btn btn-outline-${mode==="light"?"primary":"light"}`}>Read more</a>
                    </div>
                </div>
            </div>
        )
    }

