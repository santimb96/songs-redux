import { combineReducers } from "redux";

//guardamos una lista de canciones
const songsReducer = () => {
  return [
    { id: 0, title: "Message in the Bottle", duration: "3:56" },
    { id: 1, title: "Beat it", duration: "3:00" },
    { id: 2, title: "Respira", duration: "4:54" },
    { id: 3, title: "In the Army Now", duration: "1:34" },
  ];
};

//hacemos el switch donde se valorarán las opciones que hay y la que entra

const selectedSongReducer = (state = null, action) => {
  switch (action.type) {
    case "SONG_SELECTED":
      return action.payload;
    default:
      return state;
  }
};

//para manejar mejor los reducers los combinamos en un objeto en donde las apilamos

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
