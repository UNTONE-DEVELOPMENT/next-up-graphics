import React from 'react';
import { useCurrentFrame } from 'remotion';

import data from "./data";

const Item = ({ artist, title, isActive, key, length }) => {
    if(artist == "end") return;
    return (
        <div className={
            "tracklist-item " + (isActive ? 'active' : 'notactive')
        }>
            <h3>{artist} <strong>{title}</strong></h3>
            <h2>{length}</h2>
        </div>
    );
};

const Timeline = () => {
    const frame = useCurrentFrame();

    // Determine active index based on current frame
    var activeIndex = 0;
    var index = 0;
    for(var item of data) {
        if(item.time < frame) {
            activeIndex = index;
        }
        index++;
    }

    console.log('Current Frame:', frame);
    console.log('Active Index:', activeIndex);

    return (
        <div>
            {data.map((item, index) => (
                <Item
                    key={item.key}
                    artist={item.artist}
                    title={item.title}
                    isActive={index === activeIndex}
                length={item.length}
                />
            ))}
        </div>
    );
};

export default Timeline;