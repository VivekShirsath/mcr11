
export const reducer = (state,action) => {
    switch(action.type){
        case "ADD_STAR":{
            localStorage.setItem("star",JSON.stringify([...state.star,action.payload]))
            return{
                ...state,
                star :[...state.star,action.payload]
            }
        }
        case "ADD_WATCH":{
            localStorage.setItem("watchList",JSON.stringify([...state.watchList,action.payload]))
            return{
                ...state,
                watchList :[...state.watchList,action.payload]
            }
        }
        case "CHANGE_GENRE":{
            localStorage.setItem("genreSelect",JSON.stringify(action.payload));
            return{
                ...state,
                genreSelect : action.payload
            }
        }
        case "CHANGE_YEAR":{
            localStorage.setItem("releaseSelect",JSON.stringify(action.payload))
            return{
                ...state,
                releaseSelect : action.payload
            }
        }
        case "CHANGE_RATINGS":{
            localStorage.setItem("ratingsSelect",JSON.stringify(action.payload))
            return{
                ...state,
                ratingsSelect : action.payload
            }
        }
        case "SEARCH":{
            localStorage.setItem("search",JSON.stringify(action.payload))
            return{
                ...state,
                search : action.payload
            }
        }
        case "ADD_MOVIES":{
            localStorage.setItem("movieData",JSON.stringify([...state.movieData,action.payload]))
            return{
                ...state,
                movieData : [...state.movieData,action.payload]
            }
        }
        case "REMOVE_WATCH":{
            const filterData = state.watchList.filter(movie => movie.id !== 
                action.payload)
                localStorage.setItem("watchList",JSON.stringify(filterData))  
            return{
                ...state,
                watchList : filterData
            }
        }
        case "REMOVE_STAR":{
            const filterData = state.star.filter(movie => movie.id !== 
                action.payload)
                localStorage.setItem("star",JSON.stringify(filterData))
            return{
                ...state,
                star : filterData
            }
        }
        
    }
}