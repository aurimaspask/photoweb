import React from "react";
import anna1 from './images/anna/anna1.jpg';
import anna2 from './images/anna/anna2.jpg';
import anna3 from './images/anna/anna3.jpg';
import anna4 from './images/anna/anna4.jpg';
import anna5 from './images/anna/anna5.jpg';
import anna6 from './images/anna/anna6.jpg';
import anna7 from './images/anna/anna7.jpg';
import anna8 from './images/anna/anna8.jpg';
import anna9 from './images/anna/anna9.jpg';
import anna10 from './images/anna/anna10.jpg';
import anna11 from './images/anna/anna11.jpg';

export default function Anna() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md">
                <figcaption className="page-title">Anna</figcaption>
                <img src={anna6} class="img-fluid" alt="anna-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={anna5} class="img-fluid" alt="anna-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={anna9} class="img-fluid" alt="anna-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-6">
                    <img src={anna8} class="img-fluid" alt="anna-cover"/>
                </div>
                <div class="col-md-6 small-margin">
                    <img src={anna7} class="img-fluid" alt="anna-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={anna2} class="img-fluid" alt="anna-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={anna4} class="img-fluid" alt="anna-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-6">
                    <img src={anna1} class="img-fluid" alt="anna-cover"/>
                </div>
                <div class="col-md-6 small-margin">
                    <img src={anna3} class="img-fluid" alt="anna-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={anna11} class="img-fluid" alt="anna-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={anna10} class="img-fluid" alt="anna-cover"/>
                </div>
            </div>
            <div class="collaborators">
                <p>
                    Model: Anna Křížová (@annacross6)
                </p>
            </div>
        </div>
    )
}