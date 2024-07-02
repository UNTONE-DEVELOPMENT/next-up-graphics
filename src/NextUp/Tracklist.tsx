import React from 'react';
import { useCurrentFrame } from 'remotion';

import data from "./data";

const Item = ({ artist, title, isActive, key }) => {
    if(artist == "end") return;
    return (
        <div style={{
            padding: '20px',
            border: '1px solid black',
            margin: '10px',
            backgroundColor: isActive ? 'yellow' : 'white' // Highlight active item
        }}>
            <h3>{artist}</h3>
            <p>{title}</p>
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
                />
            ))}
        </div>
    );
};

export default Timeline;