import {React, useEffect, useState} from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon  from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=796b7b22'; //should be in app settings or smthn

const App = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  }
  
  const searchOnChange = async (title) => {
      setSearch(title)
      await new Promise(resolve => setTimeout(resolve, 2000))
      searchMovies(title);
  }

  useEffect(() => {
    searchMovies('spiderman');
  }, [])

  return (
    <div className='app'>

      <h1>MovieLand</h1>

      <div className='search'>
        <input 
          type="text"
          placeholder='Search for movies'
          value={search}
          onChange={(e) => {searchOnChange(e.target.value)}}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => {searchMovies(search)}}
        />
      </div>
      {
        movies?.length > 0 ?
        <div className='container'>
          {
            movies.map((movie) => (<MovieCard movie={movie} />))
          }
        </div>: 
        (
          <div className='empty'>
            <h3>No movies found</h3>
          </div>
        )
      }
      
    </div>
  )
}

export default App