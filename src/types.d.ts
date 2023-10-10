export interface Task {
  id: string
  description: string
}

export type TaskId = Pick<Todo, 'id'>
export type TaskDescription = Pick<Todo, 'description'>
