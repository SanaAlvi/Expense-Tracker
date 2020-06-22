import React, { useContext, useState } from 'react';
import { TransactionContext } from './transcontext';
import './App.css';

function Child() {
    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please enter correct value");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            description: newDesc
        });
        setDesc(' ')
        setAmount(' ')
    }

    const getIncome = () => {
        let income = 0
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }
    const getExpense = () => {
        let expense = 0
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return Math.abs(expense);
    }

    return (
        <div className="App">
            <h2 className="text">Expense Tracker</h2>
            <h3 className="margin">YOUR BALANCE <br /> ${getIncome() - getExpense()} </h3>
            <div className="EXPENSE">
                <h3>INCOME <br /> <span>${getIncome()}</span></h3>
                <h3>EXPENSE <br /> <span>${getExpense()}</span> </h3>
            </div>
            <div>
                <h3 className="margin">History</h3>
                <hr />
                <ul className="transaction-list">
                    {transactions.map((transObj, ind) => {
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
                        <p className="margin">Enter Amount <span className="small">(negative for expense)</span><br />
                            <input type="number"
                                value={newAmount}
                                placeholder="Amount"
                                onChange={(ev) => setAmount(ev.target.value)}
                                required />
                        </p>
                    </label>

                    <input type="submit" value="Add Transaction" className="margin" />
                </form>
            </div>
        </div>
    );
}

export default Child;