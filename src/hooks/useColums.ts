import { useState } from 'react'
import { type Task } from '../types'

type Columns = Record<string, Task[]>

function useColumn () {
  const [columns, setColumns] = useState<Columns>({
    todo: [],
    inProgress: [],
    done: []
  })

  const handleDragStart = (evt: React.DragEvent<HTMLDivElement>, task: Task, column: string) => {
    const taskJSON = JSON.stringify(task)
    evt.dataTransfer.setData('task', taskJSON)
    evt.dataTransfer.setData('fromColumn', column)
  }

  const handleDragOver = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault()
  }

  const handleDrop = (evt: React.DragEvent<HTMLDivElement>, column: string) => {
    evt.preventDefault()
    const task = evt.dataTransfer.getData('task')
    const fromColumn = evt.dataTransfer.getData('fromColumn')
    const taskObject = JSON.parse(task)

    if (fromColumn !== column) {
      const newColumns = { ...columns }
      const taskIndex = newColumns[fromColumn].indexOf(taskObject)
      newColumns[fromColumn].splice(taskIndex, 1)
      newColumns[column].push(taskObject)
      setColumns(newColumns)
    }
  }

  return { columns, setColumns, handleDragStart, handleDragOver, handleDrop }
}

export default useColumn
