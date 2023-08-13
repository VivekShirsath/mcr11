import { useData } from "../context/DataContext";
import { NavLink } from 'react-router-dom';

export const MovieCard = ({item}) => {
   const {watchList,star,dispatch} = useData();
   const {title,summary,imageURL,id,year,rating,genre} = item;

   const isMovieStarred = star?.find((item) => item.id == id);
   const isMovieinWatchList = watchList?.find((item) => item.id == id);

   const handleStar = (e) => {
    e.stopPropagation();
    dispatch({type:"ADD_STAR",payload:item})
   }

   const handleWatch = (e) => {
    e.stopPropagation();
     dispatch({type:"ADD_WATCH",payload:item})
   }

    return(
        <div className="w-96 p-3 bg-slate-300 flex items-center flex-col
        justify-center text-center">
            <NavLink to={"/specific/" + id}>
            <img src={imageURL} className="w-56 mr-auto ml-auto"/>
            <h2 className="inline-block text-center">{title}</h2> 
            <h2>{year}</h2>
            <h2>{rating}</h2>
            <h2>{genre}</h2>
            <p>{summary}</p>
            </NavLink>
            <div className="flex justify-around gap-3">
            {
                isMovieStarred ?
                <button className="bg-gray-700 text-white p-2
                rounded-md">Starred</button>
                :
                <button className="bg-gray-700 text-white p-2
                rounded-md"
                onClick={handleStar}>Star</button>
            }
            {
                isMovieinWatchList ?
                <button className="bg-gray-700 text-white p-2
                rounded-md">Added To WatchList</button>
                :
                <button onClick = {handleWatch}
                className="bg-gray-700 text-white p-2
           rounded-md">WatchList</button>
            }
            </div>
        </div>
    )
}