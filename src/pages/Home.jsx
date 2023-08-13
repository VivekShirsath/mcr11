import { useData } from "../context/DataContext"
import { MovieCard } from "../components/MovieCard";
import { NavLink } from "react-router-dom";

export const Home = () => {
    const {movieData, genreSelect,
    releaseSelect,
    ratingsSelect,dispatch,search} = useData();

    const genres = [...new Set(movieData.flatMap(movie => movie.genre))];
   
    const years = [];
    for (let year = 1990; year <= 2023; year++) {
    years.push(year);
    }
    const ratings = [1,2,3,4,5,6,7,8,9,10]
    // console.log(genreSelect,releaseSelect,ratingsSelect)

    const filterByGenre = genreSelect=="All" ? movieData :
    movieData?.filter(movie => movie.genre.includes(genreSelect))
    

    const filterByYear = releaseSelect == "All" ? filterByGenre :
    filterByGenre?.filter(movie => 
        movie.year == releaseSelect) 

    const filterByRatings = ratingsSelect == "All" ? filterByYear:
     filterByYear?.filter(movie  => movie.rating == ratingsSelect) 

    const filterBySearch = search == "" ? filterByRatings :
    filterByRatings.filter(movie => {
        const searchTerm = search.toLowerCase();
        return(
            movie.title.toLowerCase().includes(searchTerm) ||
         movie.cast.some(actor => actor.toLowerCase().includes(searchTerm)) ||
        movie.director.toLowerCase().includes(searchTerm)
        )
    })
   
   console.log(filterBySearch)
    return(
        <>
        <div className="flex justify-between p-3 items-center">
           <div>Movies</div>
           <select onChange={(e) => dispatch({type:"CHANGE_GENRE",payload : 
          e.target.value})} className="border border-black">
              <option value="All" selected={genreSelect == "All"}>All genre</option>
              {
                genres?.map((item,index) => <option value={item}
                selected={genreSelect == item} key={index}>{item}</option>)
              }
           </select>
           <select onChange={(e) => dispatch({type:"CHANGE_YEAR",payload:e.target.value})}
           className="border border-black">
              <option value="All" selected={releaseSelect == "All"}>All Release Year</option>
              {
                years?.map((item,index) => <option
                value={item} selected={releaseSelect==item}
                key={index}>{item}</option>)
              }
           </select>
           <select onChange={(e) => dispatch({type:"CHANGE_RATINGS",payload:e.target.value})}
           className="border border-black">
              <option value="All" selected={ratingsSelect == "All"}>All Ratings</option>
              {
                ratings?.map((item,index) => <option value={item}
                selected={ratingsSelect==item} key={index}>{item}</option>)
              }
           </select>
           <NavLink to="/add"><button className="bg-gray-700 text-white p-1
           rounded-md mr-3">Add a Movie</button></NavLink>
        </div>
        <div className="flex gap-3 flex-wrap p-3 justify-between">
        {
            filterBySearch.map((item) => <MovieCard item={item} key={item.id}/>)
        }
        </div>
        </>
    )
}