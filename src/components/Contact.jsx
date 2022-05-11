import React from "react";
import "../styles/Home.css";
export default function Contact () {
    return (
        <section id="contact" style={{"backgroundColor" : "transparent"}}>
            <div className="footer">
                <a href="https://wa.me/919940419257" target={"_blank"}><i className="social-icon fab fa-whatsapp fa-4x"></i></a>
                <a href="https://www.instagram.com/quintessence_2022" target={"_blank"}><i className="social-icon fab fa-instagram fa-4x"></i></a>
                <a href="mailto:quintessenceece@gmail.com" target={"_blank"}><i className="social-icon fas fa-envelope fa-4x"></i></a>
                <p>Made with ❤️ by </p>
                <p>Jabilo Jose, Lakshmi Priya, Mahesh, Prabath</p>
                <p>© 2022 Quintessence</p>
            </div>
        </section>
    );
}