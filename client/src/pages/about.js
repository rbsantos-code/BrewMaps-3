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
        "subtitle": "The Awesome Educator",
        "description": "HIGH SCHOOL SCIENCE TEACHER & CONTENT LEAD. Passionate about digital tools to redefine education.",
        "github": "https://telacaul.github.io/caul-professional-portfolio/",
        "email": "mailto:telacaul@gmail.com",
        "image": "../../public/images/Tela.png",
        "id": "card-2 card-object card-object-hf"
    },
    {
        "name": "Rich",
        "subtitle": "The Brew Master",
        "description": "Enjoy learning and very passionate about technology. Love to eat good food and travel.",
        "github": "https://rbsantos-code.github.io/all-about-me/",
        "email": "mailto:richardbriansantos91@yahoo.com",
        "image": "../../public/images/Rich.jpg",
        "id": "card-3 card-object card-object-hf"
    },
    {
        "name": "Felicia",
        "subtitle": "The Professor",
        "description": "Instructional Designer/Education Consultant.Lifelong learner and passion for developing elearning courses.",
        "github": "https://harrisfd.github.io/portfolio-page/",
        "email": "mailto:fharrisfoster@gmail.com",
        "image": "../../public/images/Felicia Harris Foster.jpg",
        "id": "card-4 card-object card-object-hf"
    },
    {
        "name": "Jennifer",
        "subtitle": "Expert Coder",
        "description": "Junior developer with a background in health sciences, eager to contribute at the intersection of medicine and technology",
        "github": "https://github.com/njthanhtrang",
        "email": "mailto:njthanhtrang@gmail.com",
        "image": "../../public/images/Jennifer.png",
        "id": "card-5 card-object card-object-hf"
    }
]

export default function aboutpage() {
    return (
        <div>
            {profiles.map(profile => (
                <Profilecard profile={profile} key={profile.name} />
            ))}
        </div>
    )
}
