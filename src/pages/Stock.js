import {useState, useEffect} from "react"

const Stock = props => {
    const apiKey = "8d2d0e850282c8badeccfd692fa4da14"
    const symbol = props.match.params.symbol
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`

    console.log(symbol)

    const [stock, setStock] = useState("null")

    const getStock = async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setStock(data)
        console.log(stock)
    }

    useEffect(() => {
        getStock()
    }, [])

    return (
        <div>
            <h1>
                {stock[0]?.name ?? "..."}/{stock[0].symbol ?? "..."}
            </h1>
            <h2>
                ${stock[0]?.price ?? "___"}
            </h2>
        </div>
    )
}

export default Stock