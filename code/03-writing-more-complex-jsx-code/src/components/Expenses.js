import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses }) {

  return (
    <section>
        {expenses.map(item => 
          <ExpenseItem
           key={item.id}
           title={item.title}
           date={item.date}
           amount={item.amount} />
        )}
    </section>
  );
}

export default Expenses;