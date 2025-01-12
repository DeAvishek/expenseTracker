import Logout from './components/Logout';
import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'
import PostExpense from './components/Expenseform'
import Expenses from './components/Expenses';
import Divalert from './components/Divalert';
import Chart from './components/Chart';
function App() {
  return (
    <div className="App ">

       {/* <Signup/> */}
       {/* <Divalert/> */}
       <Signup/>
       <Chart/>
       
        <Login/>
       {/* <Logout/> */}
       <PostExpense/>
       {/* <Expense/> */}
       <Expenses/>
    </div>
  );
}

export default App;
