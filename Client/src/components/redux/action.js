import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types';


export const addFav = (character) => {
    return { type: ADD_FAV, payload: character }
};

export const removeFav = (id) => {
    return { type: REMOVE_FAV, payload: id }
}

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
}

export const orderCards = (order) => {
    return { type: ORDER, payload: order }
}



// export const ADD_FAV = 'ADD_FAV';
// export const REMOVE_FAV = 'REMOVE_FAV';
// export const FILTER_CARDS = 'FILTER_CARDS';
// export const ORDER_CARDS = 'ORDER_CARDS';
// export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';
// export const CLEAN_CHARACTER_DETAIL = 'CLEAN_CHARACTER_DETAIL';

// export const addFav = (char) => ({ type: ADD_FAV, payload: char })

// export const removeFav = (id) => ({ type: REMOVE_FAV, payload: id })

// export const filterCards = (gender) => ({ type: FILTER_CARDS, payload: gender })

// export const orderCards = (order) => ({ type: ORDER_CARDS, payload: order })

// export const getCharacterDetail = (id) => {
//     return function (dispatch) {
//         // const URL = "https://be-a-rym.up.railway.app/api/character/";
//         // const API_KEY = "1f7733c3f7cc.673ee192101ab1b561a7";

//         fetch(`http://localhost:3001/rickandmorty/characters/${id}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 dispatch({ type: GET_CHARACTER_DETAIL, payload: data })
//             }
//             );
//     }
// }

// export const cleanCharacterDetail = () => ({ type: CLEAN_CHARACTER_DETAIL })