import { useData } from "../context/DataContext"
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    const {dispatch,search} = useData();
    const [query,setQuery] = useState(search);

    const handleClick = (e) =>{
        setQuery(e.target.value)
     dispatch({type:"SEARCH",payload:e.target.value})
    }
    return(
        <div className="flex justify-between bg-gray-700 p-4 text-white
        text-lg items-center">
            <h3>IMDB</h3>
            <input type="text" className="border border-black w-1/4 text-sm
            p-2 text-black"
            value={query}
            onChange={handleClick} 
            placeholder="Search Movies by Title,Cast,Director"/>
            <div className="flex gap-3 ">
               <NavLink to ="/"><div>Movies</div></NavLink> 
               <NavLink to ="/watch"><div>WatchList</div></NavLink>
               <NavLink to ="/star"><div>Starred Movies</div></NavLink>
            </div>
        </div>
    )
}