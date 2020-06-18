import React, { useContext } from 'react';
import { TransactionContext } from './transcontext';
import './App.css';

function child() {
    let {transactions} = useContext (TransactionContext)

  return (
    <div className="App">
        <h2 className="text">Expense Tracker</h2>
        <h3 className="margin">YOUR BALANCE <br /> $260.00 </h3>
        <div className="EXPENSE">
            <h3>INCOME <br /> $500.00</h3>
            <h3>EXPENSE <br /> $240.00</h3>
        </div>
        <div>
            <h3 className="margin">History</h3>
            <hr />

            <ul className="transaction-list">
                {transaction.map((transObj,ind)=>{
                    return (<li key={ind}> 
                        <span>{transObj.description}</span>
                        <span>{transObj.amount}</span>
                    </li>
        )   
                })}
              </ul>
            <h3 className="margin">Add New Transaction</h3>
            <hr />

            <form className="transaction">
                <label>
                    <p className="margin">Enter Description</p>
                    <input type="text" className="margin" required/>
                </label>
                <label>
                    <p className="margin">Enter Amount</p>
                    <input type="number" className="margin" required/>
                </label>
                <br />

                <input type="submit" value="Add Transaction" className="margin" />
            </form>
        </div>
    </div>
  );
}

export default child;