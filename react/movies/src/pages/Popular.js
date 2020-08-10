import React from 'react';
import Movies from '../components/Movies';
import axios from 'axios';
// import { popular } from './mock';

class Popular extends React.Component {
  state = {
    popular: [],
    loading: true,
    error: false,
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular?api_key=71bb6f7fa8a4064847f8b8cd68582164&language=en-US&page=1'
    })
      .then(({ data }) => this.setState({ popular: data.results }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   axios({
  //     method: 'GET',
  //     url: `https://api.themoviedb.org/3/search/company?api_key=71bb6f7fa8a4064847f8b8cd68582164&page=1&query=${this.state.search}`
  //   })
  //     .then(({ data }) => this.setState({ movie: data.results }))
  // }

  render() {
    const { popular, loading, error } = this.state;

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Ups! Something went wrong</p>;
    return (
     <div className="popular">
      {/* <form onSubmit={this.handleSubmit}>
        <input type="search" />
      </form> */}
      <h1>Popular</h1>
      <Movies movies={popular} />
     </div>
    );
  }
}

export default Popular;
