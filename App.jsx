import { useState } from 'react'
import './App.css'
import { Card } from '../src/components/Card/index'

function App() {
  const [taskName, setTaskName] = useState()

  const [tasks, setTasks] = useState([])

  function addTask (){
    const newTask = {
      task: taskName
    }

    setTasks(prevState => [...prevState, newTask])
  }

  return (
    <div>
      <header>
        <h1>ToDo App</h1>
      </header>

      <main>

        <section id='addTask'>
          <h2>Digite sua tarefa:</h2>
          <input id='text' 
          type="text" 
          placeholder='Digite sua tarefa:' 
          onChange={e => setTaskName(e.target.value) }
          />

          <button onClick={addTask}>Adicionar</button>
        </section>

      </main>

      {
      tasks.map(task => <Card 
        task={task.task} 
        />) 
      }

    </div>

  )
}

export default App