import React from "react";
import { connect } from "react-redux";

const SongDetail = ({song}) => {
    
    const render = !song
    ? <div className="text-light"><h1>No hay seleccionada</h1></div> 
    : <div key={song.id.toString()} className="p-5" style={{border: '2px solid white', maxWidth: '30rem'}}><h5 className="p-4 text-center">{song.title}</h5><h6 className="text-center">{song.duration}</h6></div>
    
    return (
        <div className="row">
            <div className="col-12  d-flex align-items-center">
                {render}
            </div>
        </div>
    )
}

const getState = state => {
    return { song: state.selectedSong };
}

export default connect(getState)(SongDetail);