import React from 'react'
import Video from "./Video.jsx"
import anciano from "./videos/anciano.mp4"
import mujer from "./videos/womanbetweenfour.mp4"
import ifyourepacific from "./videos/ifyourepacific.mp4"
import patada from "./videos/patada.mp4"
import girlKnocked from "./videos/girl.mp4"
import police from "./videos/tucuman1.mp4"

const VistaVideos = (props) => {


    return (
        <div className="main-videos">
            <div className="Videos">
                <div className="col-1">
                    <Video name={anciano}/>
                    <Video name={mujer}/>
                    <Video name={ifyourepacific}/>
                </div>
                
                <div className="col-2">
                    <Video name={patada}/>
                    <Video name={girlKnocked}/>
                    <Video name={police}/>
                </div>
            </div>
        </div>
    )
}

export default VistaVideos