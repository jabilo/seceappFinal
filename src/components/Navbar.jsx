import React,{useState} from "react";
import "../styles/Home.css";
import clgLogo from '../assets/images/clgLogo.png';
import { Link } from "react-router-dom";
import YrsLogo from "../assets/images/25 years logo.png";

export default function Navbar (props) {

   const [open,setOpen] = useState(false);
    return (
        <nav
            className="navbar navbar-transparent navbar-expand-lg navbar-dark "
            id="nav1"
            
            >
            
            <a className="navbar-brand" href="https://srmeaswari.ac.in/">
            <img
               src={clgLogo}
               width=""
               height="50"
               alt=""
               />
            </a>
            <img src={YrsLogo} alt="" width=""
               height="50" style={{"paddingRight" : "2%"}}
            />
            
            <button
               className="navbar-toggler"
               type="button"
               // data-toggle="collapse"
               onClick={()=>setOpen(!open)}
               data-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
               >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div
               className="collapse navbar-collapse flex-grow-0 "
               id="navbarSupportedContent"
               style={{ display: open ? "block" : "none" }}
               >
               <ul className="navbar-nav ml-auto">
               <li className="nav-item active" style={{margin:"auto" }} >
                  <Link to = {{
                        pathname: '/',
                        }} className="nav-link" role="button" data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        Home
                  </Link>
                  </li>
                  <li className="nav-item" style={{margin:"auto" }}>
                     <Link to = {{
                        pathname: '/events',
                        }} className="nav-link" role="button" data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        Events
                     </Link>
                  </li>
                  {/* props.event = true when in 'Events' page and false when in 'Event' page */}
                  {!props.event && <li className="nav-item" style={{margin:"auto" }}>
                     <a className="nav-link" href="#contact">Contact</a>
                  </li>}
               </ul>
            </div>           
        </nav>
    );
}