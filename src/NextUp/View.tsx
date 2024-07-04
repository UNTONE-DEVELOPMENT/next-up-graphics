import React from 'react';
import "./styles.css";
import Tracklist from "./Tracklist";
import CurrentlyPlaying from "./CurrentlyPlaying";
import {staticFile, Video, Audio} from "remotion";

const View = () => {

    return ( <body>

        <Video src={staticFile("output.webm")} />
        <Audio src={staticFile("audio.wav")} />
    <CurrentlyPlaying></CurrentlyPlaying>
        <div className="slideout"/>
        <div className="title">
            <strong>Next Up</strong> July 2024
        </div>
        <div className="tracklist">
            <Tracklist></Tracklist>
        </div>
    </body> );
}
export default View