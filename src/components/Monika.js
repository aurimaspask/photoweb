import React from "react";
import monika10 from './images/monika/monika10-2.jpg';
import monika8 from './images/monika/monika8.jpg';
import monika9 from './images/monika/monika9.jpg';
import monika6 from './images/monika/monika6-2.jpg';
import monika7 from './images/monika/monika7-2.jpg';
import monika1 from './images/monika/monika1-2.jpg';
import monika2 from './images/monika/monika2.jpg';
import monika3 from './images/monika/monika3-2.jpg';
import monika4 from './images/monika/monika4-2.jpg';
import monika5 from './images/monika/monika5-2.jpg';
import monika11 from './images/monika/monika11-2.jpg';
import monika12 from './images/monika/monika12-2.jpg';


export default function Monika() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md">
                <figcaption className="page-title">Monika</figcaption>
                <img src={monika10} class="img-fluid" alt="monika-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-6">
                    <img src={monika8} class="img-fluid" alt="monika-cover"/>
                </div>
                <div class="col-md-6 small-margin">
                    <img src={monika9} class="img-fluid" alt="monika-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={monika6} class="img-fluid" alt="monika-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={monika7} class="img-fluid" alt="monika-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={monika1} class="img-fluid" alt="monika-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={monika2} class="img-fluid" alt="monika-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md-4">
                    <img src={monika3} class="img-fluid" alt="monika-cover"/>
                </div>
                <div class="col-md-4 small-margin">
                    <img src={monika4} class="img-fluid" alt="monika-cover"/>
                </div>
                <div class="col-md-4 small-margin">
                    <img src={monika5} class="img-fluid" alt="monika-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={monika11} class="img-fluid" alt="monika-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={monika12} class="img-fluid" alt="monika-cover"/>
                </div>
            </div>
            <div class="collaborators">
                <p>
                    Model: Monika Baltaitė (@mbaltaite)
                </p>
            </div>
        </div>
    )
}