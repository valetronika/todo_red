import './App.scss';
import FilterFooter from './components/FilterFooter/FilterFooter';
import Footer from './components/Footer/Footer';
import InputItem from './components/InputItem/InputItem';
import Title from './components/Title/Title';
import TodoList from './components/TodoList/TodoList';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router basename="/todo_red">
      <div className="App">
        <Title/>
        <div className="wrapper">
          <InputItem/>
          {/* <TodoList/> */}
          <FilterFooter/>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
