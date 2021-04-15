import DefaulIcon from '../../images/tech_brain.svg'
import LuggoLogo from '../../images/luggo_logo.svg'
import UniboLogo from '../../images/alma-mater.png'


export const Data = [
    {
        internship: true,
        title: "Research Development Intern",
        company: "Deustotech",
        description: "Extracurricular internship in collaboration with Deustotech Lab, a research oriented development lab at the University of Deusto. I was responsible, together with another intern, for the devopment of an iOS game app, using Swift and Objective-C. The game was intended to be used by an association that provides learning aid for children with mental disabilities. The app focused on the Internet Of Things (IOT) concept by linking the playing device with the Sphero gadget.",
        icon: 'https://deustotech.deusto.es/wp-content/themes/deustotech/assets/images/deustotech_logo_full.svg',
        dateFrom: '2015',
        dateTo: '2016',
        tech1: "Swift",
        tech2: "Objective-C"
    },
    {
        internship: true,
        title: "Front-End Developer",
        company: "WeNite",
        description: "Curricular internship in collaboration with WeNite. Resposible for the front-end development, coding the solution with Node.js + HTML + CSS and translating it into iOS and Android app format using Apache Cordova. The goal was to develop the full pilot for their app, a nightlife app for iOS an Android.",
        icon: DefaulIcon,
        dateFrom: 'January 2017',
        dateTo: 'August 2017',
        tech1: "Node.js",
        tech2: "HTML",
        tech3: "CSS",
        tech4: "Apache Cordova"
    },
    {
        internship: false,
        title: "Full-Stack Developer",
        company: "Luggage Care B.V.",
        description: "Part time job in the early stages of the company now known as Luggo, where I originally started as a front-end developer. Later on, I also assumed some of the backend development responsibilities, working as a full-stack developer for the rest of my stay.",
        icon: LuggoLogo,
        dateFrom: 'February 2019',
        dateTo: 'September 2019',
        tech1: "React",
        tech2: "Django",
        tech3: "Python"
    },
    {
        internship: true,
        title: "Research Development Trainee",
        company: "Universita di Bologna",
        description: "Traineeship for the development of my MSc thesis project. I was responsible for the development of the AlMa software, a Machine Learning based Natural Language Processing program. The objective for this program was to provide insights about the state of research topics based on the argumentative sentences and keyword mentions within scientific research papers.",
        icon: UniboLogo,
        dateFrom: 'February 2020',
        dateTo: 'August 2020',
        tech1: "Python",
        tech2: "ML",
        tech3: "NLP"

    },
];
