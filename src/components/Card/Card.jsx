import style from "./Card.module.css";
import { Link } from 'react-router-dom';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.card}>
         <div className={style.front} >
            <img src={image} alt={name} />
         </div>


         <div className={style.back} >
            <div>
               <Link to={`/detail/${id}`} className={style.link}>
                  <h2 className={style.name}>{name}</h2>
               </Link>
            </div>

            <div className={style.species} >
               <h2>Specie: {species}</h2>
               <h2>Gender: {gender}</h2>
               <h2>Status: {status}</h2>
               <h2>Origin: {origin}</h2>
            </div>

            <div className={style.btn}>
               <button onClick={() => onClose(id)}>X</button>
            </div>
         </div>
      </div>
   );
}
