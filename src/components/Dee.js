import React from "react";
import dee1 from './images/dee/dee1.jpg';
import dee2 from './images/dee/dee2.jpg';
import dee3 from './images/dee/dee3.jpg';
import dee4 from './images/dee/dee4.jpg';


export default function Dee() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md">
                    <figcaption className="page-title">Dee</figcaption>
                    <img src={dee1} class="img-fluid" alt="dee-cover"/>
                </div>
            </div>   
            <div class="row mt-4">
                <div class="col-md">
                    <img src={dee2} class="img-fluid" alt="dee-cover"/>
                </div>
            </div>  
            <div class="row mt-4">
                <div class="col-md">
                    <img src={dee3} class="img-fluid" alt="dee-cover"/>
                </div>
            </div>  
            <div class="row mt-4">
                <div class="col-md">
                    <img src={dee4} class="img-fluid" alt="dee-cover"/>
                </div>
            </div>  
            <div class="collaborators">
                <p>
                    Model: Diana N Mosumari (@camino_dee_diva)
                </p>
            </div>
        </div>
    )
}    