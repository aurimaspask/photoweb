import React from "react";
import brazzi1 from './images/brazzi/brazzi1-2.jpg';
import brazzi2 from './images/brazzi/brazzi2.jpg';
import brazzi3 from './images/brazzi/brazzi3.jpg';
import brazzi4 from './images/brazzi/brazzi4-2.jpg';
import brazzi5 from './images/brazzi/brazzi5.jpg';
import brazzi6 from './images/brazzi/brazzi6.jpg';
import brazzi7 from './images/brazzi/brazzi7.jpg';
import brazzi9 from './images/brazzi/brazzi9.jpg';
import brazzi10 from './images/brazzi/brazzi10.jpg';
import brazzi11 from './images/brazzi/brazzi11.jpg';
import brazzi12 from './images/brazzi/brazzi12.jpg';
import brazzi13 from './images/brazzi/brazzi13.jpg';
import brazzi14 from './images/brazzi/brazzi14.jpg';
import brazzi15 from './images/brazzi/brazzi15.jpg';
import brazzi16 from './images/brazzi/brazzi16.jpg';



export default function Brazzi() {
    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md">
                    <figcaption className="page-title">Horizontmag<br />issue 6 vol.18</figcaption>
                    <img src={brazzi1} class="img-fluid" alt="brazzi-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md-6">
                    <img src={brazzi5} class="img-fluid" alt="brazzi-pic"/>   
                </div>
                <div class="col-md-6 small-margin">
                    <img src={brazzi6} class="img-fluid" alt="brazzi-pic"/> 
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md-4">
                    <img src={brazzi2} class="img-fluid" alt="brazzi-pic"/>    
                </div>
                <div class="col-md-4 small-margin">
                    <img src={brazzi3} class="img-fluid" alt="brazzi-pic"/>    
                </div>
                <div class="col-md-4 small-margin">
                    <img src={brazzi4} class="img-fluid mx-auto" alt="brazzi-pic"/>    
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md">
                    <img src={brazzi7} class="img-fluid" alt="brazzi-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md-6">
                    <img src={brazzi9} class="img-fluid" alt="brazzi-pic"/>   
                </div>
                <div class="col-md-6 small-margin">
                    <img src={brazzi10} class="img-fluid" alt="brazzi-pic"/> 
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md">
                    <img src={brazzi11} class="img-fluid" alt="brazzi-cover"/>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md-6">
                    <img src={brazzi12} class="img-fluid" alt="brazzi-pic"/>   
                </div>
                <div class="col-md-6 small-margin">
                    <img src={brazzi13} class="img-fluid" alt="brazzi-pic"/> 
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md-4">
                    <img src={brazzi14} class="img-fluid" alt="brazzi-pic"/>    
                </div>
                <div class="col-md-4 small-margin">
                    <img src={brazzi15} class="img-fluid" alt="brazzi-pic"/>    
                </div>
                <div class="col-md-4 small-margin">
                    <img src={brazzi16} class="img-fluid mx-auto" alt="brazzi-pic"/>    
                </div>
            </div>
            <div class="collaborators">
                <p>
                    Models: Agata Suduiko (@agatasuduiko), Aušrinė Šerpenskaitė (@ausrinne) 
                </p>
                <p>
                    MUA: Toma Šileikytė (@tomasileikyte)    
                </p>
                <p>
                    Stylist: Roberta Čyžiūtė (@robertacyziute)   
                </p>
            </div>
        </div>
        
    )
} 

