import React from 'react';
import { render, cleanup, waitForElement, act } from '@testing-library/react';
import moxios from 'moxios'
import App from './App';

const postMock = [
  {
    id: 1,
    title: 'title',
    body: 'body'
  },
  {
    id: 2,
    title: 'title 2',
    body: 'body 2'
  },
  {
    id: 3,
    title: 'title 3',
    body: 'body 3'
  },
]

describe('App', () => {
  beforeEach(moxios.install)

  afterEach(() => {
    moxios.uninstall()
    cleanup()
  })

  it('should request and render a list of posts', async (done) => {
    const { getAllByTestId } = render(<App />)
   
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: postMock,
      })
        .then(() => {
          const items = getAllByTestId('post')
          expect(items).toHaveLength(postMock.length)
          done();
        })
    })
  })
})
