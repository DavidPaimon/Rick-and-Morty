import style from "./SearchBar.module.css";
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
         onSearch(id);
         setId('');
         event.preventDefault();
      }
   }

   return (
      <div className={style.container}>
         <input className={style.search} type='search' onChange={handleChange} onKeyDown={handleKeyDown} value={id} />
         <button onClick={() =>{onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
