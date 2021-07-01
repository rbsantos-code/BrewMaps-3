import "./style.css"
import pictureprofile from "../../public/images/Ian.png"

export default function Profilecard(props) {
    return (
        <div className="card-wrapper">
            <div className={props.profile.id} style={{ backgroundImage: `url(${props.profile.image})` }} >
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

                        <a className="info-content" href="https://riosborne6.github.io/Portfolio/">Ian's Professional Portfolio</a>
                        <a className="info-content" href="mailto:riosborne6@gmail.com">Send Email</a>
                    </div>
                </div>
            </div>
        </div>

    )
}