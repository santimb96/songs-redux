import React from "react";
import { connect } from "react-redux";

const SongList = () => {
    return (
        <div>Song list!</div>
    )
}
const mapStateToProps = state => {
    console.log(state);
    return state;
};

export default connect(mapStateToProps)(SongList);