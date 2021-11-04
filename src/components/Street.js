import React from "react";
import egle1 from './images/vilnius-streets/egle1-2.jpg';
import egle2 from './images/vilnius-streets/egle2-2.jpg';
import egle10 from './images/vilnius-streets/egle10-2.jpg';
import egle7 from './images/vilnius-streets/egle7-2.jpg';
import egle8 from './images/vilnius-streets/egle8.jpg';
import egle11 from './images/vilnius-streets/egle11.jpg';
import egle9 from './images/vilnius-streets/egle9.jpg';
import egle13 from './images/vilnius-streets/egle13-2.jpg';
import egle3 from './images/vilnius-streets/egle3-2.jpg';
import egle4 from './images/vilnius-streets/egle4-2.jpg';
import egle5 from './images/vilnius-streets/egle5.jpg';
import egle6 from './images/vilnius-streets/egle6.jpg';
import rasa1 from './images/vilnius-streets/rasa1.jpg';
import rasa2 from './images/vilnius-streets/rasa2.jpg';
import rasa3 from './images/vilnius-streets/rasa3-2.jpg';
import rasa4 from './images/vilnius-streets/rasa4-2.jpg';

export default function Street() {
    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md">
                    <figcaption className="page-title">Vinlius street style</figcaption>
                    <img src={egle1} class="img-fluid" alt="street-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md">
                    <img src={egle2} class="img-fluid" alt="street-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md">
                    <img src={egle10} class="img-fluid" alt="street-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md">
                    <img src={egle8} class="img-fluid" alt="street-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md">
                    <img src={egle7} class="img-fluid" alt="street-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md-6">
                    <img src={egle11} class="img-fluid" alt="street-cover"/>
                </div>
                <div class="col-md-6 small-margin">
                    <img src={egle9} class="img-fluid" alt="street-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md">
                    <img src={egle13} class="img-fluid" alt="street-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md">
                    <img src={egle4} class="img-fluid" alt="street-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md">
                    <img src={egle3} class="img-fluid" alt="street-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md-6">
                    <img src={egle5} class="img-fluid" alt="street-cover"/>
                </div>
                <div class="col-md-6 small-margin">
                    <img src={egle6} class="img-fluid" alt="street-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md">
                    <img src={rasa3} class="img-fluid" alt="street-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md">
                    <img src={rasa4} class="img-fluid" alt="street-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md-6">
                    <img src={rasa1} class="img-fluid" alt="street-cover"/>
                </div>
                <div class="col-md-6 small-margin">
                    <img src={rasa2} class="img-fluid" alt="street-cover"/>
                </div>
            </div>
            <div class="collaborators">
                <p>
                    Models: Eglė Vizbaraitė (@eg.le.v), Rasa Laučiūtė (@r.lowciute) 
                </p>
                <p>
                    MUA: Valerija Andre (@valerija_mua)    
                </p>
            </div>
        </div>

    )
}