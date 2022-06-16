import {useState, useEffect} from "react"
import TodosItem from './components/TodosItem/index';
import "./App.css"


const App = () => {
  const [todosList, setTodosList] = useState([])
  /**
   * if an arrow function has only one arguement no need for funtional paranthesis and only one return statement no need for curly bracis
   */
 // is it best to use promise instead of async await // q to charan
 /**
  * fetch(url).then((res)=>{
  * setTodosList(res.json)
  * })
  * .catch((err)=>{
  * throw new error(message:"error in getting data")})
  */
  useEffect(() => {
  
  const url = " https://jsonplaceholder.typicode.com/todos";
  
  const fetchData = async () => {
      const response = await fetch(url);
      const dataArr = await response.json();
      setTodosList(dataArr);
    };
  fetchData();
}, []);



  
  return (
    <div className='body-format'>
    {
    todosList.map(todosObject => <TodosItem todosObject = {todosObject} />)
    }
    </div>
  );
}

export default App;
