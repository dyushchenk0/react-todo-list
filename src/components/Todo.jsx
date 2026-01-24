import { useContext } from "react";
import {TasksContext} from "@/Context/TasksContext.jsx";
import AddTaskForm from "@/components/AddTaskForm.jsx";
import SearchTaskForm from "@/components/SearchTaskForm.jsx";
import TodoInfo from "@/components/TodoInfo.jsx";
import TodoList from "@/components/TodoList.jsx";
import Button from "@/components/Button.jsx";

const Todo = () => {
  const {firstIncompleteTaskRef} = useContext(TasksContext)

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <Button
        onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({behavior: 'smooth'})}
      >
        Show first incomplete task
      </Button>
      <TodoList />
    </div>
  )
}

export default Todo