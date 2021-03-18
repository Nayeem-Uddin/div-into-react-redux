import logo from './logo.svg';
import './App.css';
import Counter from '../src/Components/Counter';
import Users from './Components/Users';

 
function App() {
  return (
    <div className="App">
        <h1>React-redux demo</h1>
        <Counter></Counter>
        <h3>synchronus vs asynchronus(though our request here will be this)</h3>
        <Users></Users>
    </div>
  );
}

export default App;
