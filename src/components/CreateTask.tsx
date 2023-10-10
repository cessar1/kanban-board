import { useState } from 'react'
import { type TaskDescription } from '../types'

interface Props {
  saveTask: ({ description }: TaskDescription) => void
}

function CreateTask ({ saveTask }: Props) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    saveTask({ description: inputValue })
    setInputValue('')
  }

  return (
        <form onSubmit={handleSubmit} className='task-form'>
            <input
                className='new-todo'
                value={inputValue}
                onChange={(event) => { setInputValue(event.target.value) }}
                placeholder='Arreglar los estilos del boton de inicio...'
                autoFocus
            />
        </form>
  )
}
export default CreateTask
