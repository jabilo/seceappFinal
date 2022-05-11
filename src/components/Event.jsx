import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Event.css";
import galaxy from "../assets/videos/galaxy.mp4";
import galaxyMobile from "../assets/videos/galaxyMobile.mp4";
import samplePoster from "../assets/images/samplePoster.jpeg";
import MultiTabs from "./MultiTabs";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { ImageList } from "@mui/material";

export default function Event () {

    const location = useLocation();

    const { type,name,description,rules,contact,imgSrc } = location.state;


    return (
        <div>
            <Navbar event={true}/>
            <div className="video-wrapper">
                <video
                    controls
                    width="100%" 
                    height="100%" 
                    autoPlay 
                    loop 
                    muted="muted" 
                    className="desktop_video vid"
                    style={{pointerEvents: "none"}}>
                    <source src={galaxy} type="video/mp4"/>
                </video>
                <video 
                    controls 
                    width="100%" 
                    height="100%" 
                    autoPlay 
                    loop 
                    muted="muted" 
                    className="mobile_video vid"
                    style={{pointerEvents: "none"}}
                    >    <source src={galaxyMobile} type="video/mp4"/>
                </video>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 styl">
                        <img src={imgSrc} height="100%" width="85%" alt="img"/>
                    </div>
                    <div className="col-lg-6 cont">
                        <MultiTabs contest = {location.state}/>
                    </div>
                </div>
            </div>

            <Contact />
        </div>
    );
}

// const Event = () =>{

//     const location = useLocation();

//     return (
//         <div>
//             <Navbar event={false} />
//             <div className="video-wrapper">
//                 <video
//                     controls
//                     width="100%" 
//                     height="100%" 
//                     autoPlay 
//                     loop 
//                     muted="muted" 
//                     className="desktop_video vid"
//                     style={{pointerEvents: "none"}}>
//                     <source src={galaxy} type="video/mp4"/>
//                 </video>
//                 <video 
//                     controls 
//                     width="100%" 
//                     height="100%" 
//                     autoPlay 
//                     loop 
//                     muted="muted" 
//                     className="mobile_video vid"
//                     style={{pointerEvents: "none"}}
//                     >    <source src={galaxyMobile} type="video/mp4"/>
//                 </video>
//             </div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-6 col-sm-12 styl">
//                         <img src={samplePoster} height="100%" width="85%" alt="img"/>
//                     </div>
//                     <div className="col-lg-6 cont">
//                         <MultiTabs contest = {location.state}/>
//                     </div>
//                 </div>
//             </div>

//             <Contact />
//         </div>
//     );
// }

// export default Event;
