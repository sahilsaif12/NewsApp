import React from 'react'
import './ErrorPage.css'

export default function ErrorPage(props) {
    return (
        <body>
            <h1 aria-label="404 Error">4<span></span>{props.status}</h1>
            <h2>Api limit for today (100/per day) exhaused</h2>
        </body>
    )
}
