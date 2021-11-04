import React from "react";

import camera from './images/film/camera.jpg';
import medium2 from './images/film/medium2.jpg';
import medium1 from './images/film/medium1.jpg';
import medium3 from './images/film/medium3.jpg';
import film1 from './images/film/film1.jpg';
import film2 from './images/film/film2.jpg';
import film3 from './images/film/film3.jpg';
import film4 from './images/film/film4.jpg';
import film10 from './images/film/film10.jpg';
import film9 from './images/film/film9.jpg';
import film7 from './images/film/film7.jpg';
import film8 from './images/film/film8.jpg';
import film5 from './images/film/film5.jpg';
import film20 from './images/film/film20.jpg';
import film13 from './images/film/film13.jpg';
import film14 from './images/film/film14.jpg';
import film16 from './images/film/film16.jpg';
import film15 from './images/film/film15.jpg';
import film18 from './images/film/film18.jpg';
import film22 from './images/film/film22.jpg';
import film23 from './images/film/film23.jpg';
import film24 from './images/film/film24.jpg';
import film25 from './images/film/film25.jpg';
import film26 from './images/film/film26.jpg';
import film27 from './images/film/film27.jpg';
import film28 from './images/film/film28.jpg';
import film29 from './images/film/film29.jpg';



export default function Film() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md">
                <figcaption className="film-title">Film 35mm/120mm</figcaption>
                <img src={camera} class="img-fluid" alt="film-cover"/>
                </div>
            </div>
            <div class="film-description" >
                <hr class="solid"/>
                <h3>
                    Film photography has always been a special part of my life. I love the film texture, color tone and grain. The whole process of capturing moments with film camera is just so different to doing it with digital cameras. Every film frame you capture is precious, it makes you think more in detail of what you want to capture. And then there is this magical feeling of unknown as you never know what exactly is going to come out of your pictures once the film and prints gets processed.   
                </h3>
                <hr class="solid"/>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={medium2} class="img-fluid" alt="film-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={medium1} class="img-fluid" alt="film-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={medium3} class="img-fluid" alt="film-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={film10} class="img-fluid" alt="film-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={film9} class="img-fluid" alt="film-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-6">
                    <img src={film7} class="img-fluid" alt="film-cover"/>
                </div>
                <div class="col-md-6 small-margin">
                    <img src={film8} class="img-fluid" alt="film-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={film1} class="img-fluid" alt="film-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-6">
                    <img src={film5} class="img-fluid" alt="film-cover"/>
                </div>
                <div class="col-md-6 small-margin">
                    <img src={film20} class="img-fluid" alt="film-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-6">
                    <img src={film13} class="img-fluid" alt="film-cover"/>
                </div>
                <div class="col-md-6 small-margin">
                    <img src={film14} class="img-fluid" alt="film-cover"/>
                </div>
            </div> 
            <div class="row mt-4">
                <div class="col-md">
                <img src={film3} class="img-fluid" alt="film-cover"/>
                </div>
            </div>   
            <div class="row mt-4">
                <div class="col-md-6">
                    <img src={film4} class="img-fluid" alt="film-cover"/>
                </div>
                <div class="col-md-6 small-margin">
                    <img src={film2} class="img-fluid" alt="film-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={film16} class="img-fluid" alt="film-cover"/>
                </div>
            </div>   
            <div class="row mt-4">
                <div class="col-md-6">
                    <img src={film15} class="img-fluid" alt="film-cover"/>
                </div>
                <div class="col-md-6 small-margin">
                    <img src={film18} class="img-fluid" alt="film-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                <img src={film23} class="img-fluid" alt="film-cover"/>
                </div>
            </div>   
            <div class="row mt-4">
                <div class="col-md">
                <img src={film24} class="img-fluid" alt="film-cover"/>
                </div>
            </div>   
            <div class="row mt-4">
                <div class="col-md-6">
                    <img src={film22} class="img-fluid" alt="film-cover"/>
                </div>
                <div class="col-md-6 small-margin">
                    <img src={film25} class="img-fluid" alt="film-cover"/>
                </div>
            </div> 
            <div class="row mt-4">
                <div class="col-md">
                <img src={film26} class="img-fluid" alt="film-cover"/>
                </div>
            </div>  
            <div class="row mt-4">
                <div class="col-md">
                <img src={film27} class="img-fluid" alt="film-cover"/>
                </div>
            </div>
            <div class="row mt-4 mb-4">
                <div class="col-md-6">
                    <img src={film28} class="img-fluid" alt="film-cover"/>
                </div>
                <div class="col-md-6 small-margin">
                    <img src={film29} class="img-fluid" alt="film-cover"/>
                </div>
            </div>    
        </div>
    )
}    