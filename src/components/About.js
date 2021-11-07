import React from 'react';
import me from './images/me1.jpg';

export default function About() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-4 p-3">
                    <img src={me} class="img-fluid" alt="about-cover" />
                </div>  
                <div class="col bio-des" >
                    <p>
                        I'm a free-lance photographer from Lithuania. 
                        Photography has been my passion for a long time now as I've been doing it for over 7 years. 
                        I've studied photography in Bath/UK college, where a gained valuable experience shooting film, using darkroom and photography studio. 
                        To me photography is one of the best art forms that can reflect emotions, thoughts and mood. 
                        You can convey so much and tell stories with just one image. I'm a big fan of movies and shooting on film. 
                        I always try to achieve a cinematic look in my work, even when shooting digitally, by emulating characteristics of film emulsion.  
                    </p>
                </div>  
            </div>
        </div>
    )
}