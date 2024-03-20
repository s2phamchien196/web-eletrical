import './App.css';
import { NavbarComponent } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UISeafoodMain } from './Pages/UISeafood';
import { UICategory } from './Pages/UICategory';
import { UIProduct } from './Pages/UIProduct';
import { UICart } from './Pages/UICart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<UISeafoodMain />}></Route>
          <Route path='/category' element={<UICategory />}></Route>
          <Route path='/product' element={<UIProduct />}>
            <Route path=':productId' element={<UIProduct />} />
          </Route>
          <Route path='/cart' element={<UICart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
