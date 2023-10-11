import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { fireEvent, render, screen, cleanup } from '@testing-library/react'

import CreateTask from './CreateTask'
const createTaskProps = {
  saveTask: vi.fn()
}
describe('<CreateTask/>', () => {
  beforeEach(() => {
    render(<CreateTask {...createTaskProps}/>)
  })

  afterEach(() => {
    cleanup()
  })

  test('should render the CreateTask componen correctly', () => {
    expect(screen.getByPlaceholderText(/Arreglar los estilos del boton de inicio.../i)).toBeDefined()
  })

  test('should call the saveTask function when the form is submitted', () => {
    const form = screen.getByRole('textbox')
    fireEvent.submit(form)
    expect(createTaskProps.saveTask).toHaveBeenCalledTimes(1)
  })

  test('should clear the input field after the form is submitted', () => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const input = screen.getByPlaceholderText(/Arreglar los estilos del boton de inicio.../i) as HTMLInputElement
    const form = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: 'Arreglar Bugs' } })
    fireEvent.submit(form)

    expect(input.value).toBe('')
  })
})
