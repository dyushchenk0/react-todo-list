import AddTaskForm from "@/components/AddTaskForm.jsx";
import SearchTaskForm from "@/components/SearchTaskForm.jsx";
import TodoInfo from "@/components/TodoInfo.jsx";
import TodoList from "@/components/TodoList.jsx";

const Todo = () => {
  const tasks = [
    { id: 'task-1', title: 'buy milk', isDone: false},
    { id: 'task-2', title: 'Rest', isDone: true},
    { id: 'task-3', title: 'Set home', isDone: true},
  ]
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
      />
      <TodoList tasks={tasks}/>
    </div>
  )
}

export default Todo