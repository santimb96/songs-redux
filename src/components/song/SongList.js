import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../../actions";

const SongList = (props) => {

    const selected = (song) => {
        props.dispatch(selectSong(song))
    }

    const render = props.songs?.map(song => <div onClick={() => selected(song)} key={song.id.toString()} className="m-2" style={{border: '2px solid black'}}><h5 className="p-5 text-center">{song.title}</h5></div>)
    return (
        <div className="row">
            <div className="col-12">
                {render}
            </div>
        </div>
    )
}
const getState = state => {
    //console.log(state.songs);
    return {songs: state.songs};
};

export default connect(getState)(SongList);