import React from 'react';
import {  Link } from "react-router-dom";
import brazzi1 from './images/brazzi1.jpg';
import egle1 from './images/egle1.jpg';
import jasmine1 from './images/jasmine1.jpg';
import monika10 from './images/monika/monika10-2.jpg';
import anna6 from './images/anna/anna6.jpg';
import katrina1 from './images/katrina/katrina1.jpg';
import filmcover from './images/film/medium-logo.jpg';
import pcover from './images/lore/p-cover.jpg';
import dee1 from './images/dee/dee1.jpg';

console.log(brazzi1);

export default function Work() {
    return (
        <div class="container">
            <div class="row mt-1">
                <div class="col-md-8">
                    <Link to="/brazzi">
                    <img src={brazzi1} class="img-fluid" alt="brazzi-cover" />
                    <figcaption className="main-page-title">Horizontmag issue 6 vol.18</figcaption> 
                    </Link>
                </div>
                <div class="col-md-4 px-1">
                    <div class="mb-0">
                        <Link to="/street">    
                        <img src={egle1} class="img-fluid" alt="egle1-cover" />
                        <figcaption className="main-page-title">Vilnius street style</figcaption>
                        </Link>
                    </div>  
                    <div class="mt-n1 mt-n2"> 
                        <Link to="/jasmine">  
                        <img src={jasmine1} class="img-fluid" alt="jasmine1-cover" />
                        <figcaption className="main-page-title">JASMINE</figcaption>
                        </Link>
                    </div>    
                </div>        
            </div>
            <div class="row mt-1">
                <div class="col-md-8 order-3">
                    <Link to="/anna">    
                    <img src={anna6} class="img-fluid" alt="anna-cover"/>
                    <figcaption className="main-page-title">Anna</figcaption> 
                    </Link>
                </div>    
                <div class="col-md-4 px-1">
                    <div class="mb-0"> 
                        <Link to="/monika">   
                        <img src={monika10} class="img-fluid" alt="monika-cover" />
                        <figcaption className="main-page-title">Monika</figcaption>
                        </Link>
                    </div>  
                    <div class="mt-n1 pt-0"> 
                        <Link to="/katrina">    
                        <img src={katrina1} class="img-fluid" alt="katrina-cover" />
                        <figcaption className="main-page-title">Katrina</figcaption>
                        </Link>
                    </div>
                </div>        
            </div>
            <div class="row mt-1">
                <div class="col-md-8">
                    <Link to="/film">
                    <img src={filmcover} class="img-fluid" alt="film-cover" />
                    <figcaption className="main-page-title">Film 35mm/120mm</figcaption> 
                    </Link>
                </div>
                <div class="col-md-4 px-1">
                    <div class="mb-0">
                        <Link to="/palanga">    
                        <img src={pcover} class="img-fluid" alt="palanga-cover" />
                        <figcaption className="main-page-title">Palanga stories</figcaption>
                        </Link>
                    </div>  
                    <div class="mt-n1"> 
                        <Link to="/dee">  
                        <img src={dee1} class="img-fluid" alt="dee-cover" />
                        <figcaption className="main-page-title">Dee</figcaption>
                        </Link>
                    </div>    
                </div>        
            </div>
        </div>
    )
} 