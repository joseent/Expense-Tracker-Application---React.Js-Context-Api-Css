import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


// money formatter function
function moneyFormatter(num) {
    let money = num.toFixed(2).split(".")
    return(
        `$ ${money[0].split("").reverse().reduce(function (acc,num,i, orig){
            return num === "-" ? acc : num + (i &&!(i % 3) ? "," : "" ) + acc
        })} . ${money[1]}`
    )
}


export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? "-" : "+";


    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}
            <span>
               {sign} {moneyFormatter(transaction.amount)}
            </span>
            <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}
