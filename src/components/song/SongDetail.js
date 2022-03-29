import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
    
    const render = props.song === null
    ? <div className="text-light"><h1>No hay seleccionada</h1></div> 
    : <div key={props.song.id.toString()} className="p-5" style={{border: '2px solid white', maxWidth: '30rem'}}><h5 className="p-4 text-center">{props.song.title}</h5><h6 className="text-center">{props.song.duration}</h6></div>
    
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