import {useState} from "react";
import { v4 as uuid } from "uuid";
import { useData } from "../context/DataContext";
export const AddMovie = () => {
  const [initialdata,setInitialdata] = useState({
    id: uuid(),
  title: '',
  year: "",
  genre: '',
  rating: "",
  director: '',
  writer: '',
  cast: '',
  summary:
    '',
  imageURL:
    '',
})
    const [data,setData] = useState({
        id: uuid(),
      title: '',
      year: "",
      genre: [],
      rating: "",
      director: '',
      writer: '',
      cast: '',
      summary:
        '',
      imageURL:
        '',
    })

    const {dispatch,movieData} = useData();
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData({
          ...data,
          [name]: value,
        });
      };
      const handleClick = (e) => {
        e.preventDefault();
        dispatch({type:"ADD_MOVIES",payload:data})
        setData(initialdata)
      }
     
    return(
        <div className="flex justify-center">
            <form className="flex flex-col gap-3 bg-slate-300 p-3 w-2/4 justify-center
            mt-4">
              <h3 className="text-center">Add Movies</h3>
               <input type="text" name="title" value={data.title}
               onChange={handleInputChange} className="border border-black"
               placeholder="Please Enter Title"/>
               <input type="number" name="year" value={data.year}
               onChange={handleInputChange}  className="border border-black"
               placeholder="Please Enter year"/>
               <input type="text" name="genre" value={data.genre}
               onChange={handleInputChange}  className="border border-black"
               placeholder="Please Enter genre"/>
               <input type="number" name="rating" value={data.rating}
               onChange={handleInputChange}  className="border border-black"
               placeholder="Please Enter rating"/>
               <input type="text" name="director" value={data.director}
               onChange={handleInputChange}  className="border border-black"
               placeholder="Please Enter director"/>
               <input type="text" name="writer" value={data.writer}
               onChange={handleInputChange}  className="border border-black"
               placeholder="Please Enter writer"/>
               <input type="text" name="cast" value={data.cast}
               onChange={handleInputChange}  className="border border-black"
               placeholder="Please Enter cast"/>
               <input type="text" name="summary" value={data.summary}
               onChange={handleInputChange}  className="border border-black"
               placeholder="Please Enter summary"/>
               <input type="text" name="imageURL" value={data.imageURL}
               onChange={handleInputChange}  className="border border-black"
               placeholder="Please Enter imageURL"/>
               <button onClick={handleClick}
               className="bg-gray-700 text-white p-2
               rounded-md w-fit text-center">Add Movie</button>
            </form>
        </div>
    )
}