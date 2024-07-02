import { Composition } from "remotion";
import Tracklist from "./NextUp/Tracklist";
import View from "./NextUp/View";
import Data from "./NextUp/data";

// Each <Composition> is an entry in the sidebar!

var last = Data[Data.length-1];

export const RemotionRoot: React.FC = () => {
  return (
    <>


        <Composition
            id="Tracklist"
            component={Tracklist}
            durationInFrames={15000} // Adjust as per your video length in frames
            fps={30} // Adjust according to your preferred frame rate
            width={1920}
            height={1080}
        />

        <Composition
            id="Primary"
            component={View}
            durationInFrames={last.time-30} // Adjust as per your video length in frames
            fps={30} // Adjust according to your preferred frame rate
            width={1920}
            height={1080}
        />


    </>
  );
};
