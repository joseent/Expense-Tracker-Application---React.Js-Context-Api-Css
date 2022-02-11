import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

// money formatter function
function moneyFormatter(num) {
    let money = num.toFixed(2).split(".")
    return(
        `$ ${money[0].split("").reverse().reduce(function (acc,num,i, orig){
            return num === "-" ? acc : num + (i &&!(i % 3) ? "," : "" ) + acc
        })} . ${money[1]}`
    )
}


export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map((transaction) => transaction.amount)
    const total = amounts.reduce((acc,item) => (acc += item), 0)

    return (
        <div>
            <h4>Balance</h4>
            <h1>{moneyFormatter(total)}</h1>
        </div>
    )
}
