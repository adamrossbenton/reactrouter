import React from "react"
import {Link} from "react-router-dom"
import stocks from "../data"

const Stocks = props => {

    console.log(stocks)

    return <>
        <div className="stockList">
            <h1>Stocks</h1>
            {stocks.map((stock) => {
                const {name,symbol} = stock
                return (
                    <Link 
                    to={`/stocks/${symbol}`}>
                        <h3>{name} - {symbol}</h3>
                    </Link>
                )
            })}
        </div>
    </>
}

export default Stocks