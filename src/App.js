import logo from './logo.svg';
import './App.css';
import ConditionalRendering from './Lessons/ConditionalRendering'
import Persons from './Lessons/ListMap/Persons';
import ContextApi from './Lessons/ContextApi';

function App() {
  return (
    <div className="App">
      {/* <ConditionalRendering /> */}
      {/* <Persons /> */}
      <ContextApi/>
    </div>
  );
}

export default App;
