import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {

  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/movies');
        console.log(response.data)
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {movies ? (
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
};


export default App;
