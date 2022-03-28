import React from "react";
import SongDetail from "../components/song/SongDetail";
import SongList from "../components/song/SongList";

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 d-flex justify-content-center">
                    <SongList />
                </div>
                <div className="col-6 d-flex justify-content-center bg-dark text-light">
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}

export default Home;