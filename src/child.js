import React, { useContext, useState } from 'react';
import { TransactionContext } from './transcontext';
import './App.css';

function child() {
    let { transactions, addTransaction } = useContext(TransactionContext)
    let [newDesc, setDesc] = useState("")
    let [newAmount, setAmount] = useState(0)

    const handleAddition = (event) => {
        event.preventDefault();
        addTransaction({
            amount: Number(newAmount),
            description: newDesc
        })
        setDesc(' ')
        setAmount(0)
    }
    const getIncome = () => {
        let income = 0
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income
    }
    const getExpense = () => {
        let expense = 0
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense
    }
    return (
        <div className="App">
            <h2 className="text">Expense Tracker</h2>
            <h3 className="margin">YOUR BALANCE <br /> ${getIncome() + getExpense()} </h3>
            <div className="EXPENSE">
                <h3>INCOME <br /> $ {getIncome()}</h3>
                <h3>EXPENSE <br /> $ {getExpense()}</h3>
            </div>
            <div>
                <h3 className="margin">History</h3>
                <hr />

                <ul className="transaction-list">
                    {transaction.map((transObj, ind) => {
                        return (<li key={ind}>
                            <span>{transObj.description}</span>
                            <span>$ {transObj.amount}</span>
                        </li>
                        )
                    })}
                </ul>
                <h3 className="margin">Add New Transaction</h3>
                <hr />

                <form className="transaction" onSubmit={handleAddition}>
                    <label>
                        <p className="margin">Enter Description <br />
                            <input type="text"
                                value={newDesc}
                                placeholder="Description"
                                onChange={(ev) => setDesc(ev.target.value)}
                                required />
                        </p>
                    </label>
                    <label>
                        <p className="margin">Enter Amount <br />
                            <input type="number"
                                value={newAmount}
                                placeholder="Amount"
                                onChange={(ev) => setAmount(ev.target.value)}
                                required />
                        </p>
                    </label>
                    <br />

                    <input type="submit" value="Add Transaction" className="margin" />
                </form>
            </div>
        </div>
    );
}

export default child;