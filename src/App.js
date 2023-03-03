
import './App.css';

import { Routes, Route } from 'react-router-dom'


import ImageList from './ImageList';

/* Makes use of routes */
function App() {
  // const handleQueryChange = (searchText) => {
  //   setQuery(searchText);
  // }
  return (
    <Routes>
        <Route path='/' element={<ImageList />}></Route>
        <Route path='/:query' element={<ImageList />}></Route>
    </Routes>
  );
}

export default App;
