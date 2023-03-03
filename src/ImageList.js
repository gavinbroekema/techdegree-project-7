import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


import Nav from "./Nav";
import Image from "./Image";

import apiKey from './config';


const ImageList = () => {
  const [images, setImages] = useState([]);
  // const [query, setQuery] = useState('flowers')
  const [loading, setLoading] = useState(true);
  const {query} = useParams()

  useEffect(() => {
    setLoading(true);
    // let activeFetch = true;
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`;
    fetch(url)
    .then(res => res.json())
    .then(result => {
      setImages(result);
      setLoading(false);
      console.log(result)
    })
    .catch(err => console.log('Error parsing data', err))
    // return () => {activeFetch = false}
  }, [query])

  let imageOut;
  if(loading) {
    imageOut = <p>Loading...</p>
  } else if (!loading) {
    const imageData = images.photos.photo;
    imageOut = imageData.map(image => <Image src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_w.jpg`} key={image.id} alt={image.title} />)
  } else {
    imageOut = ( 
      <li class="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
      </li>
    )
  }
  return (
    <section>
      <Nav />
      <div class="photo-container">
        <h2>Results</h2>
        <ul>
        {imageOut}
        </ul>
      </div>
    </section>
  );
};

export default ImageList;
