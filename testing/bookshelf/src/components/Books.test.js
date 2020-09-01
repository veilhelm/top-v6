import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Books } from './Books'

const booksMock = [
  {
    id: 1,
    title: 'title 1',
    description: 'description 1',
    votes: 4
  },
  {
    id: 2,
    title: 'title 2',
    description: 'description 2',
    votes: 10
  },
  {
    id: 3,
    title: 'title 3',
    description: 'description 3',
    votes: 24 
  },
  {
    id: 4,
    title: 'title 4',
    description: 'description 4',
    votes: 5
  },
  {
    id: 5,
    title: 'title 5',
    description: 'description 5',
    votes: 4
  },
]

describe('Books', () => {
  afterEach(cleanup)

  it('should render a list of books', () => {
    const { getAllByTestId } = render(<Books books={booksMock} />)

    expect(getAllByTestId('book')).toHaveLength(booksMock.length)
  })
})
