import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom'

import apiKey from './config';
import ImageList from './ImageList';
import Nav from './Nav';



const tag = ''

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('cats')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let activeFetch = true;
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=762409951bbbdaa6ec50945c227e49de&tags=flowers&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(result => {
        setImages(result);
        setLoading(false);
      })
      .catch(err => console.log('Error parsing data', err))
    return () => {activeFetch = false}
  }, [query])
  return (
    <Routes>
      <Route path='/' element={<ImageList data={images} />}></Route>
    </Routes>
  );
}

export default App;
