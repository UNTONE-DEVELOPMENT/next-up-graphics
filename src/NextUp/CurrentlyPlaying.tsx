import React, { useState, useEffect } from 'react';
import { useCurrentFrame } from 'remotion';
import data from './data';
import './currentlyplaying.css';

function calculatePercentageCompletion(itemTime, nextItemTime, frame) {
    // Convert times to frames
    const itemFrames = itemTime;
    const nextItemFrames = nextItemTime;

    // Current frame position
    const currentFrame = frame - itemFrames;

    // Total frames between items
    const totalFrames = nextItemFrames - itemFrames;

    // Calculate percentage completion
    const percentage = (currentFrame / totalFrames) * 100;

    return percentage;
}

const Timeline = () => {
    const frame = useCurrentFrame();

    // State to manage active item and transition
    const [activeIndex, setActiveIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        // Determine active index and next index based on current frame
        let index = 0;
        for (let i = 0; i < data.length - 1; i++) {
            if (data[i].time <= frame && frame < data[i + 1].time) {
                setActiveIndex(i);
                setNextIndex(i + 1);
                break;
            }
            index++;
        }

        // Handle transition when nearing end of current item
        if (frame >= data[nextIndex].time - 30 && !transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setActiveIndex(nextIndex);
                setNextIndex(nextIndex + 1);
                setTransitioning(false);
            }, 100); // Adjust the timeout duration as needed for your transition
        }
    }, [frame, transitioning, nextIndex]);

    const item = data[activeIndex];
    const nextItem = data[nextIndex];

    // Calculate percentage completion
    const percentage = calculatePercentageCompletion(item.time, nextItem.time, frame);

    console.log('Current Frame:', frame);
    console.log('Active Index:', activeIndex);

    return (
        <div className="currentlyplaying">
            <div className={`base item ${transitioning ? 'transitioning' : ''}`}>
                <img src={`https://music-assets.untone.uk/release/${item.key}/cover.png`} alt="Album Cover"/>
                <div>
                    <img src={`https://music-assets.untone.uk/release/${item.key}/cover.png`}
                         alt="Album Cover"/>
                    <h3>{item.artist}</h3>
                    <h1>{item.title}</h1>
                    <div className="progress">
                        <div style={{width: percentage + '%'}}></div>
                    </div>
                </div>
            </div>
            <div className={`base next-item ${transitioning ? 'transitioning' : ''}`}>
            <img src={`https://music-assets.untone.uk/release/${nextItem.key}/cover.png`} alt="Next Album Cover"/>
                <div>
                    <img src={`https://music-assets.untone.uk/release/${nextItem.key}/cover.png`}
                         alt="Next Album Cover"/>
                    <h3>{nextItem.artist}</h3>
                    <h1>{nextItem.title}</h1>
                    <div className="progress">
                        <div style={{width: '0%'}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
