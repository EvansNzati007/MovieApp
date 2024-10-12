import { useState , useEffect} from 'react'
import SearchIcon from './assets/search.svg'
import './App.css'
import MovieCard from './MovieCard'



const API_URL = `http://www.omdbapi.com/?apikey=b77e3307`;




function App() {

const [movies , setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [loading, setLoading] = useState(false);

const searchMovies = async (title) => {
  setLoading(true);
  try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
  } catch (error) {
      console.error(error);
  } finally {
      setLoading(false);
  }
};

useEffect(() =>{
 searchMovies('spiderman');

} ,[]);

  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input type="text" 
                placeholder="Entrer le nom d'un film..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value)}}

          />
          <img src={SearchIcon}
               alt="search bar" 
               onClick={() => {searchMovies(searchTerm)}}
          />
        </div>

        {
  loading ? (
    <div><h1>Chargement...</h1></div>
  ) : (
    movies.length > 0 ? (
      <div className="container">
        {movies.map((movie) => <MovieCard movie={movie} />)}
      </div>
    ) : (
      <div className='empty'>
        <h2>Aucun Film trouvé!</h2>
      </div>
    )
  )
}

        
      </div>
    </>
  )
}

export default App
