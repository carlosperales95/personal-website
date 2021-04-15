import myImage1 from '../../images/artist.svg'
import myImage2 from '../../images/contact_me.svg'
import myImage3 from '../../images/mic_drop.svg'
import myImage4 from '../../images/data_surround.svg'
import myImage5 from '../../images/mountain.svg'
import myImage6 from '../../images/plant.svg'
import myImage7 from '../../images/tech_brain.svg'
import myImage8 from '../../images/discovery.svg'


export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Me',
    headline: 'Made in Spain, based in Amsterdam',
    description: 
    'I come from Bilbao, a city between mountains in northern Spain. When got the opportunity to go on my first Erasmus, I started thinking about moving out of my country. This mentality brought me to Sweden for 6 months, to Italy for 1 year and to Amsterdam for already 2+ years.',
    buttonLabel: 'Hire me',
    imgStart: false,
    img: myImage5,
    alt: 'Mountains',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'education',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'SAGE VIBES',
    headline: 'My Education',
    description: 
    'I\'ve had the chance to study in several universities (for at least one semester). Some of them are known for their historical presence ',
    buttonLabel: 'Hire me',
    imgStart: true,
    img: myImage4,
    alt: 'Learning',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'experience',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'It takes time to grow',
    headline: 'Unlimited Power and Creativity',
    description: 
    'As you can see, most of my experience happened in the shap of internships that I carried out during my studies. I still got a lot to learn, and I\'m eager to learn! I\'m not looking for any job, but for a place where I can grow as a programmer. Every mind, just like any plant, needs the right setting in order to prosper and grow. Even if the plant gives its all, it will die in its early stages if it\'s not taken care of. I\'m that plant right now, and I want to become a tree one day!',
    buttonLabel: 'Hire me',
    imgStart: false,
    img: myImage6,
    alt: 'beers',
    dark: false,
    primary: false,
    darkText: true
};


export const homeObjFour = {
    id: 'contact',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'End of the road',
    headline: 'That\'s a bit about myself',
    description: 
    'Did you like my website? Did I spark your curiosity? In any case, if you want to contact me...',
    buttonLabel: 'Leave a message!',
    imgStart: false,
    img: myImage2,
    alt: 'message',
    dark: false,
    primary: true,
    darkText: false,
    where: "/personal-website/contact"
};

