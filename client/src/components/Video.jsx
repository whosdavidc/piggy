import React from 'react'

const Video = (props) => {
    return (
        <div className="video-container">
            <video className="video video-js" data-setup="{}" controls>
                <source src={props.name} type="video/mp4"/>
            </video>
            <script src="https://vjs.zencdn.net/7.8.3/video.js"></script>

        </div>
    )
} 

export default Video
