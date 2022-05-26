import React from 'react';
import './ExpenseList.css'
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    const { expenseList } = props;
    return (
        <div className="expenses">
            {
                expenseList.map((expense) =>
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )
            }
        </div>
    );
};

export default ExpenseList;