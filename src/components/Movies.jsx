import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

import MovieCard from './Moviecard';
import Pagination from './Pagination';

function Movies({handleWatchList,handleRemoveWatchList,watchList}){
    const[movies,setMovies] = useState([])
    const[pageNo,setPageNo] = useState(1);
    function handleprev(){
        if(pageNo==1) {setPageNo(pageNo)}
        else{
        setPageNo(pageNo-1);}
    }
    function handleNext(){
        setPageNo(pageNo+1);
    }
    
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c128a8c98d29d517e3e70a9a2895e6b8&languagpagee=en-US&page=${pageNo}`).then((res)=>{
            console.log(res.data.results);
            setMovies(res.data.results);

        })
    },[pageNo])
    return(
        <div className='p-5'>
            <div className='text-2xl m-5 font-bold text-center '>Trending Movies</div>
            <div className='flex flex-row flex-wrap justify-around justify-between items-end gap-8'>
                {movies.map((movie)=>{
                    return <MovieCard movie={movie} key={movie.id} handleWatchList={handleWatchList} handleRemoveWatchList={handleRemoveWatchList} watchList={watchList} poster_path={movie.poster_path} name={movie.original_title}/>
                })}
            </div>
            <Pagination pageNo={pageNo} handleprev={handleprev} handleNext={handleNext}/>
        </div>
    )
}

export default Movies;

//https://api.themoviedb.org/3/movie/popular?api_key=c128a8c98d29d517e3e70a9a2895e6b8&language=en-US&page=1