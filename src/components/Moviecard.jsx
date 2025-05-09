function MovieCard({movie,poster_path,name,watchList,handleWatchList,handleRemoveWatchList}) {
  function doesContain(movie){
    for(let i=0;i<watchList.length;i++){
      if(watchList[i].id==movie.id) return true
      else false;
    }
  }
  
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 hover:cursor-pointer duration-300 flex flex-col justify-between items-end "
      style={{
        backgroundImage:
          `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movie) ? <div onClick={()=>{handleRemoveWatchList(movie)}} className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/50">&#10060;</div> :
      <div onClick={()=>{handleWatchList(movie)}} className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/50">
        &#128525;
      </div>
      }
    <div className='text-white text-xl w-full text-center p-2 bg-gray-900/60'>
        {name}
    </div>
    </div>
    
  );
}

export default MovieCard;
