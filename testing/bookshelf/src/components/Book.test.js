import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Book } from './Book.js'

describe('Book', () => {
  afterEach(cleanup)

  it('should render a book correctly', () => {
    const book = {
      title: 'a title',
      description: 'a very long description lalalalalala',
      votes: 3,
    };

    const { getByText } = render(
      <Book 
        title={book.title}
        description={book.description}
        votes={book.votes}
      />
    )

    expect(getByText(book.description)).toBeInTheDocument();
    expect(getByText(book.title)).toBeInTheDocument();
    expect(getByText(`votes: ${book.votes}`)).toBeInTheDocument();
  })

  it('should match snapshot', () => {
    const book = {
      title: 'a title',
      description: 'a very long description lalalalalala',
      votes: 3,
    };

    const { container } = render(
      <Book 
        title={book.title}
        description={book.description}
        votes={book.votes}
      />
    )

    expect(container).toMatchSnapshot()
  })
})
