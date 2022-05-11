import React from "react";
import data from "../data";
import { Link } from 'react-router-dom';
import "../styles/Events.css";
import mainPosterDesktop from "../assets/images/mainPosterDesktop.jpg";
import mainPosterMobile from "../assets/images/mainPosterMobile.jpg";
import Navbar from "./Navbar";
import Contact from "./Contact";
import EventsDesktopVideo from "../assets/videos/EventsDesktopVideo.mp4";
import EventsMobileVideo from "../assets/videos/EventsMobileVideo.mp4";

export default function Events() {

    const technical = data.events.map(contest => (
        contest.type === 'tech' 
        &&  
        <div>
            <Link to = {{ pathname: '/event' }} state = {contest}  className="link" >
                {contest.name} 
            </Link>
        </div>  
    ));

    const nonTech = data.events.map(contest => (
        contest.type === 'non-tech'  
        &&  
        <div>
            <Link to = {{ pathname: '/event' }} state = {contest} className="link">
                {contest.name} 
            </Link>
        </div> 
    ));

    const online = data.events.map(contest => (
        contest.type === 'online' 
        &&  
        <div>
            <Link to = {{ pathname: '/event' }} state = {contest} className="link">
                {contest.name} 
            </Link>
        </div> 
    ));

    return (
        <main>
        
            <Navbar/>
            {/* new background video  added*/}
            <div className="video-wrapper" style={{"overflow" : "hidden", "zIndex" : "-1"}}>
                        <video id="vid" width="100%" height="100%" autoPlay loop muted="muted" class="desktop_video">
                            <source src={EventsDesktopVideo} type="video/mp4"/>
                        </video>
                        <video id="vid" width="100%" height="100%" autoPlay loop muted="muted" class="mobile_video">
                            <source src={EventsMobileVideo} type="video/mp4"/>
                        </video>
                    </div>
            {/* //////////////// */}
            <section id="main-poster">
                <div className="main-poster">
                    <img src={mainPosterDesktop} height="100%" width="80%" alt="" />
                </div>
            </section>
            <section className="event-cards" id="events">
                <div >
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 box-shadow w-100">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Technical Events</h4>
                            </div>
                            <div className="card-body">
                                {technical}
                            </div>
                        </div>
                        <div className="card mb-4 box-shadow w-100">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Online Events</h4>
                            </div>
                            <div className="card-body">    
                                {online}
                            </div>
                        </div>
                        <div className="card mb-4 box-shadow w-100">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Non Technical Events</h4>
                            </div>
                            <div className="card-body">  
                                {nonTech}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            
            <Contact />
        </main>
    );

}