import React from 'react';
import NavBar from '../components/Navbar.jsx';
import Footer from '../components/footer.jsx';
import YouTube from '../components/YouTube.jsx';
import auth from "../services/authService.js";



function textShow() {
    var x = document.getElementById("paragraph2");
    console.log(x.style.display);
    if (x.style.display === "none")
    {
        x.style.display = "inline-block";
    } 
    else 
    {
        x.style.display = "none";
    }
}

export default class Auth extends React.Component{
    render()  {
        console.log(auth.isAuth())
        
        return(
            
            <ul class="w3-container">
            <NavBar/>

                

                <div  class="w3-panel w3-leftbar w3-sand w3-xxlarge w3-serif">



                    <img id="yoga1" src="https://i.gifer.com/6ROv.gif" alt="yoga" width="700" height="500"/>

                    <img id="yoga2" src="https://image.freepik.com/free-photo/woman-yoga-relax-nature_42483-17.jpg" alt="yoga" width="700" height="500"/>

                    <br/>
                    <br/>

                    <div><button class="button button1" onClick={textShow}>Philosophy and Types of Yoga</button></div>
                    <br/>
                    
                    <p id="paragraph2" ref="paragraph22" >Yoga is a spiritual science of self-realisation. It comes from India and goes back over five thousand of years. The Indian sage Pantajali, in his Yoga sutras defines yoga as the control of the activities of the mind. Yoga methods encompass the entire field of our existence, from the physical, emotional and mental to the spiritual. Its methods include ethical disciplines, physical postures, breath control, as well as meditation.There are many styles of yoga.
                        Amongst the most popular are:
                        Ashtanga Yoga - a fast flowing, aerobic yoga workout,
                        Iyengar Yoga - strong, precise style of yoga for the fitness conscious,
                        Viniyoga - a gentler style with emphasis on healing,
                        Satyananda yoga - a gentle style of traditional Hatha Yoga, suitable for all age and shape,
                        Bikram Yoga - a dynamic style of yoga, practised in a heated room,
                        Kundalini yoga - focuses on the release of internal energy, using postures, breathing and meditation.
                        Be inspired to explore yoga and convert it in a part of your lifestyle!
                    </p>


                </div>

            < Footer />

            </ul>
        )
    }
}