
import { createContext,useContext,useReducer } from "react";
import { movies } from "../data";
import {reducer} from '../reducer'

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,{
        movieData : JSON.parse(localStorage.getItem("movieData")) ?
        JSON.parse(localStorage.getItem("movieData")) : movies,
        star: JSON.parse(localStorage.getItem("star")) ?
        JSON.parse(localStorage.getItem("star")) : [],
        watchList:JSON.parse(localStorage.getItem("watchList")) ?
        JSON.parse(localStorage.getItem("watchList")) :[],
        genreSelect :
        JSON.parse(localStorage.getItem("genreSelect")) ?
        JSON.parse(localStorage.getItem("genreSelect")) : "All",
        releaseSelect : 
        JSON.parse(localStorage.getItem("releaseSelect")) ?
        JSON.parse(localStorage.getItem("releaseSelect")) :"All",
        ratingsSelect : 
        JSON.parse(localStorage.getItem("ratingsSelect")) ?
        JSON.parse(localStorage.getItem("ratingsSelect")) :"All",
        search : JSON.parse(localStorage.getItem("search")) ?
        JSON.parse(localStorage.getItem("search")) :"",
    })
    return(
        <DataContext.Provider value={{...state,dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)