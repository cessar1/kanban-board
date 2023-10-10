// import { useState } from 'react'
import Column from './components/Column.tsx'
import './App.css'
import useColumn from './hooks/useColums.ts'
import Board from './components/Board.tsx'
import Header from './components/Header.tsx'
import { type TaskDescription } from './types'
// import { useState } from 'react'

function App () {
  // const [task, setTask] = useState<Task>()
  const { columns, setColumns, handleDragStart, handleDragOver, handleDrop } = useColumn()

  const handleAddTask = ({ description }: TaskDescription) => {
    if (description.length < 3) return

    const newTask = {
      id: crypto.randomUUID(),
      description
    }
    const newColumns = { ...columns }
    newColumns.todo.push(newTask)

    setColumns(newColumns)
  }

  return (
    <>
      <Header onAddTask ={handleAddTask}/>
      <Board>
        <Column
          title='Sin Realizar'
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragStar={handleDragStart}
          tasks={columns.todo}
          columnName='todo'
        />
        <Column
          title='En Proceso'
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragStar={handleDragStart}
          tasks={columns.inProgress}
          columnName='inProgress'
        />
        <Column
          title='Realizado'
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragStar={handleDragStart}
          tasks={columns.done}
          columnName='done'
        />
      </Board>
    </>
  )
}

export default App
