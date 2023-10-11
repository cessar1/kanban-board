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
    evt.dataTransfer.setData('taskId', task.id)
    evt.dataTransfer.setData('fromColumn', column)
  }

  const handleDragOver = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault()
  }

  const handleDrop = (evt: React.DragEvent<HTMLDivElement>, column: string) => {
    evt.preventDefault()
    const taskId = evt.dataTransfer.getData('taskId')
    const fromColumn = evt.dataTransfer.getData('fromColumn')

    if (fromColumn !== column) {
      const newColumns = { ...columns }
      const taskToMove = newColumns[fromColumn].find(task => task.id === taskId)
      if (taskToMove !== null && taskToMove !== undefined) {
        newColumns[fromColumn] = newColumns[fromColumn].filter(task => task.id !== taskId)

        newColumns[column].push(taskToMove)

        setColumns(newColumns)
      }
    }
  }

  return { columns, setColumns, handleDragStart, handleDragOver, handleDrop }
}

export default useColumn
