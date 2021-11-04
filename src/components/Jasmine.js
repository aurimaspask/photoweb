import React from "react";
import jasmine1 from './images/jasmine/jasmine1.jpg';
import jasmine2 from './images/jasmine/jasmine2.jpg';
import jasmine3 from './images/jasmine/jasmine3.jpg';
import jasmine4 from './images/jasmine/jasmine4.jpg';
import jasmine5 from './images/jasmine/jasmine5.jpg';

export default function Jasmine() {
    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md">
                    <figcaption className="page-title">Jasmine</figcaption>
                    <img src={jasmine1} class="img-fluid" alt="jasmine-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md">
                    <img src={jasmine2} class="img-fluid" alt="jasmine-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md">
                    <img src={jasmine3} class="img-fluid" alt="jasmine-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-6">
                    <img src={jasmine4} class="img-fluid" alt="jasmine-cover"/>
                </div>
                <div class="col-md-6">
                    <img src={jasmine5} class="img-fluid" alt="jasmine-cover"/>
                </div>
                <div class="collaborators">
                <p>
                    Model: Jasmine Lars (@jasmine_lars)
                </p>
                <p>
                    MUA & Hairstyle: Molly Haywood (@hairbymollyhaywood)    
                </p>
            </div>
            </div>
        </div>
    ) 
}