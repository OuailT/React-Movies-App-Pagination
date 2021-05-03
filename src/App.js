import './App.css';
import React,{useState, useEffect} from 'react';
import MoviesData from './components/Data/MoviesData';
import MoviesCards from './components/MoviesCards/MoviesCards';
import CategoriesFilter from './components/CategoriesFilter/CategoriesFilter';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

//destructuring all the categories from the data
const allCategories = [ ...new Set(MoviesData.map((movie)=> movie.category))];

const url = "https://gist.githubusercontent.com/Tayarthouail/6b6aee25b3b9e7167db064140a6c4256/raw/3990148a890e94d44d59c324ec3d5c3afd9070e1/MoviesList.json";

function App() {
  const [categories, setCategories] = useState(allCategories);
  const [moviesList, setMoviesList] = useState(MoviesData.slice(0, 4));
  const [pageNumber, setPageNumber] = useState(0);


  //Function to remove a single movie card
  const removeMovie = (id) => {
    const newMovie = moviesList.filter((movie)=> movie.id !== id )
    setMoviesList(newMovie)
  }

  //filter movies based on their categories
  const filterMovie = (category) => {
    console.log(category);
    const filterMovie = MoviesData.filter((movie)=> movie.category === category.value);
    setMoviesList(filterMovie);
  }



  //Pagination
  const moviePerPage = 4;
  const pageCount = Math.ceil(MoviesData.length / moviePerPage);

  const changePage = ({ selected }) => {
    console.log(selected);
    setPageNumber(selected);
  };

  useEffect(() => {
    setMoviesList(MoviesData.slice(pageNumber * 4, (pageNumber + 1) * 4));
  }, [pageNumber]);

  return (
    <main>
      <div className="title">
            <h2>Welcome to the box office</h2>
            <div className="underline"></div>
        </div>
      <CategoriesFilter categories={categories} filterMovie={filterMovie}/>
      <MoviesCards moviesList ={moviesList} removeMovie={removeMovie}  />

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </main>
    
  )
}

export default App;
