import styles from "./SearchBar.module.css";
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
      <div className={styles.container}>
         <input className={styles.search} type='search' placeholder="SearchId" onChange={handleChange} onKeyDown={handleKeyDown} value={id} />
         <button className={styles.agregar} onClick={() =>{onSearch(id); setId('')}}>🔍︎</button>
      </div>
   );
}
