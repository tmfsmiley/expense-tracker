import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => {

  const clickHandler = () => {
    console.log('Clicked!!!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate
        date={props.date}
      >
      </ExpenseDate>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* If you put clickHandler() then it would be evaluated when this return statement is
      evaluated and you don't want that. You want it evaluated when clicked */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
