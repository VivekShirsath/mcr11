import { useData } from "../context/DataContext"
import { NavLink } from "react-router-dom";

export const Star = () => {
    const {star,dispatch} = useData();

    if(star?.length == 0) return <h3>No WatchListed Movies</h3>
   
    
    return(
        <div  className="flex gap-3 flex-wrap p-3 justify-around">
            {
                star?.map(({title,summary,imageURL,id,year,rating,genre}) => {
                    return(
                        <div key={id}
                        className="w-96 p-3 bg-slate-300 flex items-center flex-col
        justify-center text-center">
                        <NavLink to={"/specific/" + id}>
                        <img src={imageURL}  className="w-56 mr-auto ml-auto"/>
                        <h2>{title}</h2> 
                        <h2>{year}</h2>
                        <h2>{rating}</h2>
                        <h2>{genre}</h2>
                        <p>{summary}</p>
                        </NavLink>
                        <button onClick={() => dispatch(
                            {type:"REMOVE_STAR",payload:id}
                        )}>Remove from Starred</button>  
                    </div>
                    )
                })
            }
          
        </div>
    )
}