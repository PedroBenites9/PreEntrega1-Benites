import './app.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import NavBar from './components/Navbar/NavBar.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bievenidos!'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'} />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div >
  );
}

export default App;
