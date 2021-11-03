import React from "react"
import {Link} from "react-router-dom"

const Main = props => {
    return <>
        <h1>This is a stock app homepage</h1>
        <Link to="/stocks">
            Check some stocks
        </Link>
    </>
}

export default Main