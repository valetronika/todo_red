import './App.scss';
import FilterFooter from './components/FilterFooter/FilterFooter';
import InputItem from './components/InputItem/InputItem';
import Title from './components/Title/Title';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Title/>
      <div className="wrapper">
        <InputItem/>
        {/* <TodoList/> */}
        <FilterFooter/>
      </div>
    </div>
  );
}

export default App;
