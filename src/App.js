import './App.css';
import DefaultHoc from './HOC/default.HOC';
import MovieHOC from './HOC/Movie.HOC';
import HomePage from './pages/Homepage';
import Movie from './pages/Movie.page';
import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;
function App() {
  return (
   <>
    <DefaultHoc path = "/" exact component={HomePage}/>
    <MovieHOC path = "/movie/:id" exact component={Movie}/>
   </>
  );
}

export default App;
