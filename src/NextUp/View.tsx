import React from 'react';
import "./styles.css";
import Tracklist from "./Tracklist";
import CurrentlyPlaying from "./CurrentlyPlaying";

const View = () => {

    return ( <body>
    <CurrentlyPlaying></CurrentlyPlaying>
        <div className="title">
            <strong>Next Up</strong> July 2024
        </div>
        <div className="tracklist">
            <Tracklist></Tracklist>
        </div>
    </body> );
}
export default View