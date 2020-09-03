import React from 'react'

export function Book({ title, description, votes }) {
  return (
    <div className="book" data-testid="book">
      <h2 className="book-title">{title}</h2>
      <span>votes: {votes}</span>
      <p>{description}</p>
    </div>
  )
}
