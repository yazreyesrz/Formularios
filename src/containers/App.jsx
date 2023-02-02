import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Autobuses from '../pages/Autobuses';
import Register from '../pages/Register';
import FlexBox from '../components/molecules/FlexBox';
import RickAndMorty from '../pages/RickAndMorty';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/autobuses" element={<Autobuses/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/flexbox' element={<FlexBox/>}/>
                <Route path='/rickandmorty' element={<RickAndMorty/>}/>
            </Routes>
        </BrowserRouter>
      );
}

export default App;