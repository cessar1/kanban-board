import { type TaskDescription } from '../types'
import CreateTask from './CreateTask'

interface HeaderProps {
  onAddTask: ({ description }: TaskDescription) => void

}
function Header ({ onAddTask }: HeaderProps) {
  return (
        <header className="header">
            <h1>Tablero Kanban</h1>
            <CreateTask saveTask={onAddTask} />
        </header>
  )
}
export default Header
