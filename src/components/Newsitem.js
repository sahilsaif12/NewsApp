import React, { Component } from 'react'
import './Newsitem.css'
export class Newsitem extends Component {
    render() {
        let {title,desc,url,imgUrl}=this.props
        return (
            <div className="rounded shadow-lg">
                <div className="card px-2" style={{height: "450px"}}>
                    <img src={imgUrl?imgUrl:"https://i.postimg.cc/CMWn80gx/no-image-300x245.jpg"} className="card-img-top" style={{height: "170px"}} alt="..."/>
                    <div className ="card-body d-flex flex-column align-items-center justify-content-between overflow-hidden ">
                    <h5 className ="card-title">{title}</h5>
                    <p className ="card-text">{desc}</p>
                    <a href={url} rel="noreferrer" target="_blank" className ="btn btn-outline-primary">Read more</a>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Newsitem
