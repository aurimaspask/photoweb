import React from "react";
import karolina1 from './images/karolina/karolina1.jpg';
import karolina2 from './images/karolina/karolina2.jpg';
import karolina3 from './images/karolina/karolina3.jpg';
import lore1 from './images/lore/lore1.jpg';
import lore2 from './images/lore/lore2.jpg';
import lore3 from './images/lore/lore3.jpg';
import lore4 from './images/lore/lore4.jpg';


export default function Palanga() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md">
                    <figcaption className="page-title">Palanga Stories</figcaption>
                    <img src={karolina1} class="img-fluid" alt="palanga-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                    <img src={karolina2} class="img-fluid" alt="palanga-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                    <img src={karolina3} class="img-fluid" alt="palanga-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                    <img src={lore1} class="img-fluid" alt="palanga-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                    <img src={lore2} class="img-fluid" alt="palanga-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                    <img src={lore3} class="img-fluid" alt="palanga-cover"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md">
                    <img src={lore4} class="img-fluid" alt="palanga-cover"/>
                </div>
            </div>
            <div class="collaborators">
                <p>
                    Models: Karolina Bogdevič (@mcornecaroline), Lorena Paškevičiūtė
                </p>
            </div>
        </div>
    )
}    