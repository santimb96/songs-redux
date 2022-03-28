import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {title: 'Message in the Bottle', duration: '3:56'},
        {title: 'Mujer Bruja', duration: '3:00'},
        {title: 'Respira', duration: '4:54'},
        {title: 'In the Army Now', duration: '1:34'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer 
})
 