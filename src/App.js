import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { Routes, Route, useParams } from 'react-router-dom'

import apiKey from './config';
import ImageList from './ImageList';
import Nav from './Nav';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('flowers')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    setLoading(true);
    let activeFetch = true;
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`;
    console.log(url)
    fetch(url)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setImages(result);
        setLoading(false);
      })
      .catch(err => console.log('Error parsing data', err))
    return () => {activeFetch = false}
  }, [query])

  // const handleQueryChange = (searchText) => {
  //   setQuery(searchText);
  // }

  console.log(images)
  return (
    <Routes>
      <Route path='/' element={<ImageList loading={loading} data={images} />}></Route>
      {/* <Route path='/:query' element={<ImageList loading={loading} />}></Route> */}
    </Routes>
  );
}

export default App;
