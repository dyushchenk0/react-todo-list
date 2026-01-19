import AddTaskForm from "@/components/AddTaskForm.jsx";
import SearchTaskForm from "@/components/SearchTaskForm.jsx";
import TodoInfo from "@/components/TodoInfo.jsx";
import TodoList from "@/components/TodoList.jsx";

const Todo = () => {
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <TodoList />
    </div>
  )
}

export default Todo