import { useParams } from "react-router-dom"
import { useData } from "../context/DataContext"

export const Specific = () => {
    const {movieData,watchList,star,dispatch} = useData();
    const {id} = useParams();
   
     const filterData = movieData.find(movie => movie.id == id);
     console.log(filterData)
     const {title,summary,imageURL,year,rating,genre,director,writer,cast} = filterData;

     const isMovieStarred = star?.find((item) => item.id == id);
   const isMovieinWatchList = watchList?.find((item) => item.id == id);

   const handleStar = (e) => {
    e.stopPropagation();
    dispatch({type:"ADD_STAR",payload:filterData})
   }

   const handleWatch = (e) => {
    e.stopPropagation();
     dispatch({type:"ADD_WATCH",payload:filterData})
   }
    return(
        <div>
            <div>
                <img src={imageURL} className="w-48"/>
            </div>
            <div>
               <h2>{title}</h2>
               <h3>{summary}</h3>
               <p>Year : {year}</p>
               <p>Rating : {rating}</p>
               <p>Genre : { genre}</p>
               <p>Director : {director}</p>
               <p>Writer : {writer}</p>
               <p>Cast : {cast}</p>
               {
                isMovieStarred ?
                <button>Starred</button>
                :
                <button className="p-3 bg-slate-700 rounded-md"
                onClick={handleStar}>Star</button>
            }
            {
                isMovieinWatchList ?
                <button>Added To WatchList</button>
                :
                <button onClick = {handleWatch}>WatchList</button>
            }
            </div>
        </div>
    )
    }