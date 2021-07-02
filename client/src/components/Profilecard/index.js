import "./style.css"


export default function Profilecard() {
    return (
        <div className="card-wrapper">
            <div className="card-1 card-object card-object-hf" >
                <div className="face front">
                    <div className="title-wrapper">
                        <div className="title">Ian</div>
                        <div className="subtitle">The Expert Coder</div>
                    </div>
                </div>
                <div className="face back">
                    <div className="img-wrapper">
                        <div className="avatar"></div>
                    </div>
                    <div className="info-wrapper">
                        <div className="info-title">Ian</div>

                        <ul className="info-content">
                            <li className="info-content-item">Ian likes golf, SF sports, and pastrami sandwiches. He is an expert coder.</li>


                        </ul>

                        <a className="info-content" href="https://riosborne6.github.io/Portfolio/">Ian's Professional Portfolio</a>
                        <a className="info-content" href="mailto:riosborne6@gmail.com">Send Email</a>
                    </div>
                </div>
            </div>
        </div>

    )
}