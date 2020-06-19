import React, { createContext, useReducer } from 'react'
import TransactionReducer from './transReducer'

const initailtransaction = [
    {amount: 500, description:"cash"},
    {amount: -40, description:"Book"},
    {amount: -200, description:"camera"}
]

export const TransactionContext = createContext(initailtransaction)

export const TransactionProvider = ({children})=> {
    let [state,dispatch] = useReducer(TransactionReducer, initailtransaction)
    
    function addTransaction(transObj){
        dispatch({
            type:"ADD TRANSACTION",
            payload: {
                amount: transObj.amount,
                description:transObj.description
            },
        })
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction:addTransaction
        }}>
           {children}
        </TransactionContext.Provider>
    )
} 
