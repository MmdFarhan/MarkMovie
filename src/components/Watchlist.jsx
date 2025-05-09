import React, {
  useEffect,
  useState,
} from 'react';

import genreid from '../genre data/genre.js';

function Watchlist({watchList,handleRemoveWatchList}){

    const[search,setSearch]=useState('');
    const[genreList,setGenreList]=useState(['All Genres'])
    const[currgenre,setCurrGenre]=useState(['All Genres'])

    function handleSearch(e){
        let ans = e.target.value;
        setSearch(ans);
    }

    useEffect(()=>{
        let temp = watchList.map((obj)=>{
            return genreid[obj.genre_ids[0]];
        })
        setGenreList(['All Genres',...temp])
    },[watchList]);

    const handlefilter=(genre)=>{
        setCurrGenre(genre);
    }
     
    return(
        <>
        <div className='flex justify-center flex-wrap m-4'>
        {genreList.map((genre)=>{
            return(
        <div onClick={()=>{handlefilter(genre)}} className={currgenre==genre?'bg-blue-400 flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white font-bold m-4':'bg-gray-400/50 flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white font-bold m-4'}>
            {genre}
        </div>)
        })}
        </div>

        
        <div className='flex justify-center my-4'>
            <input onChange={handleSearch} className='h-[3rem] w-[18rem] bg-gray bg-gray-200 outline-none px-4' placeholder='Search Movies' type="text" />
        </div>
        <div className='overflow-hidden rounded-lg border border-gray m-8'>
            <table className='w-full text-gray-500 text-center'>
                <thead className='border-b-2'>
                    <tr>
                        <th>Name</th>
                        <th>Ratings</th>
                        <th>Popularity</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody >
                {watchList.filter((movieObj)=>{
                    if(currgenre=='All Genres') return true;
                    else return genreid[movieObj.genre_ids[0]]==currgenre;

                }).filter((obj)=>{
                    return obj.title.toLowerCase().includes(search.toLocaleLowerCase())
                }).map((obj)=>{
                    return (
                        <tr key={obj.id} className='border-b-2'>
                        <td className='flex items-center px-6 py-4'><img className='h-[8rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${obj.poster_path}`}/>
                        <div className='mx-10'>{obj.title}</div>
                        </td>
                        <td>
                            {obj.vote_average}
                        </td>
                        <td>
                            {obj.popularity}
                        </td>
                        <td>
                            {genreid[obj.genre_ids[0]]}
                        </td>
                        <td onClick={()=>{handleRemoveWatchList(obj)}} className='text-red-800'>
                            Delete
                        </td>
                    </tr>
                    )
                })}
                    
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Watchlist;