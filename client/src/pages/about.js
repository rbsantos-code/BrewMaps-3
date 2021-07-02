import Profilecard from "../components/Profilecard";

const profiles = [
    {
        "name": "Ian",
        "subtitle": "Expert Coder",
        "description": "Ian likes golf, SF sports, and pastrami sandwiches. He is an expert coder.",
        "github": "https://riosborne6.github.io/Portfolio/",
        "email": "mailto:riosborne6@gmail.com",
        "image": "../../public/images/Ian.png",
        "id": "card-1 card-object card-object-hf"
    },
    {
        "name": "Tela",
        "subtitle": "The Educator",
        "description": "",
        "github": "",
        "email": "",
        "image": "../../public/images/Tela.png",
        "id": "card-2 card-object card-object-hf"
    },
    {
        "name": "Rich",
        "subtitle": "Expert Coder",
        "description": "",
        "github": "",
        "email": "",
        "image": "../../public/images/Rich.jpg",
        "id": "card-3 card-object card-object-hf"
    },
    {
        "name": "Felicia",
        "subtitle": "The Professor",
        "description": "",
        "github": "",
        "email": "",
        "image": "../../public/images/Felicia Harris Foster.jpg",
        "id": "card-4 card-object card-object-hf"
    },
    {
        "name": "Jennifer",
        "subtitle": "Expert Coder",
        "description": "",
        "github": "",
        "email": "",
        "image": "../../public/images/Ian.png",
        "id": "card-5 card-object card-object-hf"
    }
]

export default function aboutpage() {
    return (
        <div>
            {profiles.map(profile => (
                <Profilecard profile={profile} />
            ))}
        </div>
    )
}