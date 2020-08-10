import React from 'react';
import Movies from '../components/Movies';
import axios from 'axios';
// import { upcoming } from './mock';

class Upcoming extends React.Component {
  state = {
    upcoming: [],
    loading: true,
    error: false,
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=71bb6f7fa8a4064847f8b8cd68582164&language=en-US&page=1'
    })
      .then(({ data }) => this.setState({ upcoming: data.results }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { upcoming, loading, error } = this.state;

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Ups! Something went wrong</p>;
    return (
     <div className="upcoming">
      <h1>Upcoming</h1>
      <Movies movies={upcoming} />
     </div>
    );
  }
}

export default Upcoming;
