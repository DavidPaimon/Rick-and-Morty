import style from "./Card.module.css";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addFav, removeFav} from "../redux/action"
import { useEffect, useState } from "react";

function Card({ id, name, status, species, gender, origin, image, onClose, location, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav({id, name, species, gender, image, location, status, origin});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id){
            setIsFav(true);
      }
   });
}, [myFavorites, id]);

   return (
      <div className={style.card}>

      {
         isFav ? (
            <button onClick={handleFavorite}>🌟</button> //boton de favorites
         ) : (
            <button onClick={handleFavorite}>⚝</button> //boton de favorites
         )
      }

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
               <h2>Location: {location}</h2>
            </div>

            <div className={style.btn}>
               <button onClick={() => onClose(id)}>✘</button>
               if () {
                  
               }
            </div>
         </div>
         
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (char) => {dispatch(addFav(char))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);