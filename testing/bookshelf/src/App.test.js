import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

describe('App', () => {
  afterEach(cleanup)

  it('should create a new book correctly', () => {
    const book = {
      title: 'Title 1',
      description: 'Description 1',
    }

    const { getByText, getByLabelText, getAllByTestId } = render(<App />)
    
    const titleInput = getByLabelText('Title')
    fireEvent.change(titleInput, {
      target: {
        value: book.title,
      }
    })

    const descriptionInput = getByLabelText('Description')
    fireEvent.change(descriptionInput, {
      target: {
        value: book.description,
      }
    })

    const button = getByText(/create book/i)
    fireEvent.click(button)

    const books = getAllByTestId('book')
    
    expect(books).toHaveLength(1)
    expect(getByText(/title 1/i)).toBeInTheDocument()
    expect(getByText(book.description)).toBeInTheDocument()
    expect(getByText('votes: 0')).toBeInTheDocument()
  })
})
