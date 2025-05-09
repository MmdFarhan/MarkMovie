import './App.css';

import {
  useEffect,
  useState,
} from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Banner from './components/Banner';
import Movies from './components/Movies';
import NavBar from './components/NavBar';
import Watchlist from './components/Watchlist';

function App() {
  const[watchList,setWatchList] = useState([]);


  function handleWatchList(movie){
    let newlist = [...watchList,movie];
    localStorage.setItem('movie',JSON.stringify(newlist));
    setWatchList(newlist);
    console.log(newlist);
  }

  function handleRemoveWatchList(movie){
    let filteredlist = watchList.filter((i)=>{
      return i.id!=movie.id;
    })
    setWatchList(filteredlist);
  }

  useEffect(()=>{
    let moviefromlocal = localStorage.getItem('movie')
    if(!moviefromlocal) { return }
    setWatchList(JSON.parse(moviefromlocal))
  },[])


  return (
    <>

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<><Banner/><Movies watchList={watchList} handleWatchList={handleWatchList} handleRemoveWatchList={handleRemoveWatchList}/></>}/>
        <Route path='/watchlist' element={<Watchlist  handleRemoveWatchList={handleRemoveWatchList} watchList={watchList}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
