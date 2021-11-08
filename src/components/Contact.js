import React from "react";
import cover from './images/contact-cover.jpg';

export default function Contact() {
    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md">
                    <img src={cover} class="img-fluid" alt="contact-cover"/>
                </div>
            </div>
            <div class="contact-info" >
                <hr class="solid"/>
                <p>
                For all bookings and enquiries please contact me here:   
                <br />
                <a href="mailto:aurimaspask1@gmail.com">
                aurimaspask1@gmail.com</a>
                <br /> 
                <a target="_blank" rel="noreferrer" href="http://instagram.com/aurimaspaskphoto">
                Instagram</a> 
                <br />
                +37067397848  
                </p>
                <hr class="solid"/>
            </div>
        </div>
    )
}