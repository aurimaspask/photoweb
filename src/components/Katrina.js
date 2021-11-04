import React from "react";
import katrina1 from './images/katrina/katrina1.jpg';
import kat2 from './images/katrina/kat2.jpg';
import kat3 from './images/katrina/kat3.jpg';
import kat4 from './images/katrina/kat4.jpg';
import kat5 from './images/katrina/kat5.jpg';
import kat6 from './images/katrina/kat6.jpg';
import kat7 from './images/katrina/kat7.jpg';
import kat8 from './images/katrina/kat8.jpg';
import kat9 from './images/katrina/kat9.jpg';
import kat10 from './images/katrina/kat10.jpg';
import kat11 from './images/katrina/kat11.jpg';

export default function Katrina() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md">
                <figcaption className="page-title">Katrina</figcaption>
                <img src={katrina1} class="img-fluid" alt="katrina-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={kat2} class="img-fluid" alt="katrina-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={kat4} class="img-fluid" alt="katrina-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={kat3} class="img-fluid" alt="katrina-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={kat5} class="img-fluid" alt="katrina-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-6">
                    <img src={kat6} class="img-fluid" alt="katrina-cover"/>
                </div>
                <div class="col-md-6 small-margin">
                    <img src={kat7} class="img-fluid" alt="katrina-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={kat10} class="img-fluid" alt="katrina-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={kat11} class="img-fluid" alt="katrina-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-6">
                    <img src={kat8} class="img-fluid" alt="katrina-cover"/>
                </div>
                <div class="col-md-6 small-margin">
                    <img src={kat9} class="img-fluid" alt="katrina-cover"/>
                </div>
            </div>
            <div class="collaborators">
                <p>
                    Model: Kateřina Hájková (@shineon_k)
                </p>
            </div>
        </div>
    )
}