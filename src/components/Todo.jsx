import AddTaskForm from "@/components/AddTaskForm.jsx";
import SearchTaskForm from "@/components/SearchTaskForm.jsx";
import TodoInfo from "@/components/TodoInfo.jsx";
import TodoList from "@/components/TodoList.jsx";
import {jquery} from "globals";

const Todo = () => {
  const tasks = [
    { id: 'task-1', title: 'buy milk', isDone: false},
    { id: 'task-2', title: 'Rest', isDone: true},
    { id: 'task-3', title: 'Set home', isDone: true},
  ]

  const deleteAllTasks = () => {
    console.log('Delete all Tasks!')
  }

  const deleteTask = (taskId) => {
    console.log(`Delete task with id: ${taskId}`)
  }

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Task ${taskId} ${isDone ? 'complete' : 'not complete'}`)
  }

  const filterTasks = (query) => {
    console.log(`Search: ${query}`)
  }

  const addTask = () => {
    console.log('Task added!')
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
      />
      <SearchTaskForm
        onSearchInput={filterTasks}
      />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonsClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}

export default Todo