import { type Task } from '../types'

interface ColumnProps {
  title: string
  onDragOver: (evt: React.DragEvent<HTMLDivElement>) => void
  onDrop: (evt: React.DragEvent<HTMLDivElement>, column: string) => void
  onDragStar: (evt: React.DragEvent<HTMLDivElement>, task: Task, column: string) => void
  tasks: Task[]
  columnName: string
}

function Column ({ title, onDragOver, onDrop, onDragStar, tasks, columnName }: ColumnProps) {
  return <div className="column" onDragOver={onDragOver} onDrop={evt => { onDrop(evt, columnName) }}>
    <h2>{title}</h2>
    {
      tasks.map(task => (
        <div className="task" key={task.id} draggable onDragStart={(evt) => { onDragStar(evt, task, columnName) }} >
          {task.description}
        </div>
      ))
    }
  </div>
}

export default Column
