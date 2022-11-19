import React, { useState } from 'react';
import './VideoSection.css';
import "bootstrap/dist/css/bootstrap.min.css";
import FsLightbox from 'fslightbox-react';
// import Video from '../../videos/video.mp4';




const VideoSection = () => {
    const [toggler, setToggler] = useState(false);

    return (
        <>
            <section className="videoSection">
                <div className="container flex mtop">
                    <>
                        <button href='https://www.videvo.net/video/fire-burns-at-an-oil-refinery/657901/' className="play-button" onClick={() => setToggler(!toggler)} >
                        </button>
                            <FsLightbox
                                toggler={toggler}
                                sources={[
                                    'https://www.videvo.net/video/fire-burns-at-an-oil-refinery/657901/',
                                ]}
                            />
                    </>
                    </div>
            </section>
        </>
    )
}

export default VideoSection