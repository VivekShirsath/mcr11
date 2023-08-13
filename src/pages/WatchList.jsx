import { useData } from "../context/DataContext"
import { NavLink } from "react-router-dom";

export const WatchList = () => {
    const {watchList,dispatch} = useData();

    if(watchList?.length == 0) return <h3>No WatchListed Movies</h3>
    console.log(watchList)
    
    return(
        <div className="flex gap-3 flex-wrap p-3 justify-around">
            {
                watchList?.map(({title,summary,imageURL,id,year,rating,genre}) => {
                    return(
                        <div key={id}
                        className="w-96 p-3 bg-slate-300 flex items-center flex-col
        justify-center text-center">
                        <NavLink to={"/specific/" + id}>
                        <img src={imageURL} 
                        className="w-56 mr-auto ml-auto"/>
                        <h2>{title}</h2> 
                        <h2>{year}</h2>
                        <h2>{rating}</h2>
                        <h2>{genre}</h2>
                        <p>{summary}</p>
                        </NavLink>
                        <button onClick={() => dispatch(
                            {type:"REMOVE_WATCH",payload:id}
                        )} className="bg-gray-700 text-white p-2
                        rounded-md">Remove from WatchList</button>  
                    </div>
                    )
                })
            }
          
        </div>
    )
}