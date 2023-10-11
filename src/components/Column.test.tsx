import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'

import { fireEvent, render, screen, cleanup } from '@testing-library/react'
import Column, { type ColumnProps } from './Column'

const mockedTasks = [
  { id: '1', description: 'Task 1' },
  { id: '2', description: 'Task 2' }
]

const mockColumnProps: ColumnProps = {
  title: 'To Do',
  onDragOver: vi.fn(),
  onDrop: vi.fn(),
  onDragStart: vi.fn(),
  tasks: mockedTasks,
  columnName: 'todo'
}

describe('Column', () => {
  beforeEach(() => {
    render(<Column {...mockColumnProps} />)
  })

  afterEach(() => {
    cleanup()
  })

  test('should render the Column component correctly', () => {
    expect(screen.getByText('To Do')).toBeDefined()
    expect(screen.getByText(/Task 1/i)).toBeDefined()
    expect(screen.getByText(/Task 2/i)).toBeDefined()
  })

  test('should call the onDragOver funtion when an element is dragged over it', () => {
    const element = screen.getByText(/Task 1/i)
    fireEvent.dragOver(element)

    expect(mockColumnProps.onDragOver).toHaveBeenCalledTimes(1)
  })

  test('should call the onDrop function when an element is dropped on it', () => {
    const element = screen.getByText(/Task 1/i)
    fireEvent.dragOver(element)
    fireEvent.drop(element)

    expect(mockColumnProps.onDrop).toBeCalledTimes(1)
  })

  test('should call the onDragStart function when an element is dragged', () => {
    const element = screen.getByText(/Task 1/i)
    fireEvent.dragStart(element)

    expect(mockColumnProps.onDragStart).toBeCalledTimes(1)
  })
})
