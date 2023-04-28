import './index.css';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from "./components/Form/Form";
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate  } from 'react-router-dom';

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = '4ad0439dd707.13a127d0fc3113ad4964';

const email = 'davidfelipe.fj@gmail.com';
const password = '1234qwer';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      } else {
         setAccess(false);
       }
   };

   const logout = () => {
      setAccess(false);
      navigate('/');
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate])


   const onSearch = (id) => {

      const existingCharacter = characters.find((character) => character.id === id);
      if (existingCharacter) {
         window.alert('¡Esta carta ya ha sido abierta!');
      } else {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
};

   const onClose = (id) => {
      setCharacters(characters.filter((character) => character.id !== id))
   }

   return (
      
      <div className='App'>
           {
            location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />
         }
         
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose} /> }/>
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>

         <div >
          <img className='nave' src='https://static.wixstatic.com/media/4cfee6_8545703050f546c7b8f54fcad068d917~mv2.gif' alt='not found'/>  
         </div>  
        
      </div>
   );
}

export default App;
