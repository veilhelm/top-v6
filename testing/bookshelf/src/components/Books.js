import React from 'react'
import { Book } from './Book'

export class Books extends React.Component {
  render() {
    const { books } = this.props;
    return (
      <div className="books">
        {books && books.length > 0 && books.map(({ id, title, description, votes}) => {
          return ( 
            <Book 
              key={id}
              title={title}
              description={description}
              votes={votes}
            />
          )
        })}
      </div>
    )
  }

}

