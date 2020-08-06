import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  state = {
    title: '',
    body: '',
    post: null,
    error: null,
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      data: {
        title: this.state.title,
        body: this.state.body,
        userId: 1,
      }
    })
      .then(({ data }) => this.setState({ post: data }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { title, body } = this.state;
    // const { name } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={this.handleChange}
            value={title}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            onChange={this.handleChange}
            value={body}
          />
        </fieldset>
        <button>Create post</button>
      </form>
    );
  }
}

export default Form;
