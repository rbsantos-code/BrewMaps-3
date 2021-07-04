import React, { useEffect } from 'react';
import "./style.css"
import pictureprofile from "../../public/images/Ian.png"
import beer from "../../public/images/cheers.png";

function BeerPhoto () {
    return (
        <div>
            <img
            src={beer}
            alt="Cheers"
            />
        </div>
    )
}




export default function Profilecard(props) {

    useEffect(() => {

        var faceButtons = document.querySelectorAll('.face');

        faceButtons.forEach(button => {
            button.addEventListener('click', flipCard);
        })
        function flipCard(event) {
            event.preventDefault();

            var btnFace = event.target,
                card = btnFace.parentElement;

            if (card.classList.contains('flip-in')) {
                closeCards(card);
            } else {
                closeCards(card);
                openCard(card);
            }

            

        }

        function closeCards(card) {
            card
                .classList.remove('flip-in')

            // Force reflow hack
            // var reflow = this.offsetHeight;
            card
                .classList.add('flip-out')



        }

        function openCard(card) {
            card
                .classList.remove('flip-out')

            // Force reflow hack
            // var reflow = this.offsetHeight;

            card.classList.add('flip-in')


        }
        // document.querySelector("a").click(function (e) {
        //   e.stopPropagation();
        // });
    }, [])
    return (
        <div className="card-wrapper">
            <div className={props.profile.id} style={{ backgroundImage: `url({props.profile.image})` }} >
                <div className="face front">
                    <div className="title-wrapper">
                        <div className="title">{props.profile.name}</div>
                        <div className="subtitle">{props.profile.subtitle}</div>
                    </div>
                </div>
                <div className="face back">
                    <div className="img-wrapper">
                        <div className="avatar"></div>
                    </div>
                    <div className="info-wrapper">
                        <div className="info-title">{props.profile.name}</div>

                        <ul className="info-content">
                            <li className="info-content-item">{props.profile.description}</li>


                        </ul>

                        <a className="info-content" href="https://riosborne6.github.io/Portfolio/">Professional Portfolio</a>
                        <a className="info-content" href="mailto:riosborne6@gmail.com">Send Email</a>
                    </div>
                </div>
            </div>
        </div>

    )
}
