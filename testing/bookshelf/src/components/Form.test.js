import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { Form } from './Form'

describe('Form', () => {
  it('should change field values and submit the form to create a book', () => {
    const createBook = jest.fn();
    const book = {
      title: 'title 1',
      description: 'a long description'
    }

    const { getByLabelText, getByTestId } = render(<Form createBook={createBook} />)

    const titleInput = getByLabelText('Title')
    fireEvent.change(titleInput, {
      target: {
        value: book.title,
      }
    }); 

    const descriptionInput = getByLabelText('Description')
    fireEvent.change(descriptionInput, {
      target: {
        value: book.description,
      }
    })

    const form = getByTestId('form')
    fireEvent.submit(form)

    expect(createBook).toHaveBeenCalled()
    expect(createBook).toHaveBeenCalledWith(book.title, book.description)
  })
})

