import React from 'react'
import { Todo } from "./Todo"

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todos list</h3>
      {props.todo && props.todo.length > 0 ? (
        props.todo.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.sno}
              onDelete={props.onDelete}
            />
          )
        })
      ) : (
        <p>No Todos to display</p>
      )}
    </div>
  )
}
