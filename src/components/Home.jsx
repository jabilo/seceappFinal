import React,{useState} from "react";
import { useEffect } from "react";
import "../styles/Home.css";
import quintessence from '../assets/videos/Quintessence.mp4';
import mobile from '../assets/videos/mobile.mp4';
import clgLogo from '../assets/images/clgLogo.png';
import { Link } from "react-router-dom";
import YrsLogo from "../assets/images/25 years logo.png";

export default function Home() {

useEffect(()=>{
   timer();
})
      const [open,setOpen] = useState(false);
      const [currTimer, setTimer] = useState("")
      let finaltext = "";
      function timer(){
         var countDownDate = new Date("May 21, 2022 10:00:00").getTime();

//       // Update the count down every 1 second
         var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
      //   document.getElementById("demo").innerHTML =
      // finaltext = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      setTimer(days + "d " + hours + "h " + minutes + "m " + seconds + "s ")

        // If the count down is over, write some text
        if (distance < 0) {
          clearInterval(x);
         //  document.getElementById("demo").innerHTML = "EXPIRED";
         // finaltext = "EXPIRED";
         setTimer("Expired")
        }
      }, 1000);
      }

return (
<div className="">
   <section id="navbar">
      <div id="home">
      <nav
            className="navbar navbar-transparent navbar-expand-lg navbar-dark "
            id="nav1"            
            >            
            <a className="navbar-brand" href="https://srmeaswari.ac.in/" target={"_blank"}>
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
                  <li className="nav-item" style={{margin:"auto" }}>
                     <a className="nav-link" href="#contact">Contact</a>
                  </li>
               </ul>
            </div>           
        </nav>
      </div>
   </section>
   <section id="main_page">
      <div className="video">
         <video
         controls="hidden"
         width="100%"
         height="100%"
         autoPlay
         muted="muted"
         loop
         className="desktop_video"
         style={{pointerEvents: "none"}}
         >
         <source src={quintessence} type="video/mp4"/>
         </video>
         <video
         playsInline
         width="100%"
         height="100%"
         autoPlay
         loop
         muted
         className="mobile_video"
         >
         <source src={mobile} type="video/mp4"/>
         </video>
         <div class="timer-box">
          <p id="demo" class="timer">{currTimer}</p>
        </div>
      </div>
   </section>
   <section id="about">
      <div className="about">
         <h1>About</h1>
         <p>
            Quintessence, a national technical symposium hosted by the department
            of Electronics and Communication Engineering, showcases engineering
            brilliance. The symposium combines a wide range of technical and
            non-technical events, all of which are aimed to flummox our
            participants' thoughts and illuminate their knowledge while
            maintaining a positive atmosphere. With the use of a competitive
            platform, Quintessence aims to procure the top skills from them.
         </p>
      </div>
   </section>
   <section id="contact">
      <div className="footer">
         <a href="https://wa.me/919940419257" target={"_blank"}><i className="social-icon fab fa-whatsapp fa-4x"></i></a>
         <a href="https://www.instagram.com/quintessence_2022" target={"_blank"}><i className="social-icon fab fa-instagram fa-4x"></i></a>
         <a href="mailto:quintessenceece@gmail.com" target={"_blank"}><i className="social-icon fas fa-envelope fa-4x"></i></a>
         <p>Made with ❤️ by </p>
         <p>Jabilo Jose, Lakshmi Priya, Mahesh, Prabath</p>
         <p>© 2022 Quintessence</p>
      </div>
   </section>
</div>
);
}

 