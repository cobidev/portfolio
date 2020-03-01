import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Jacobo Martinez | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Jacobo Martinez official website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Jacobo',
  subtitle: 'I like to make stuff with code',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Web Developer with enthusiasm and focus on frontend development and scripting.',
  paragraphTwo:
    'I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in the IT field.',
  paragraphThree: 'Feel free to contact me via email at any time',
  resume: 'https://bit.ly/395e1oo', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'simplefolio.png',
    title: 'Gatsby Simplefolio',
    info: 'A minimal portfolio template for Developers',
    info2:
      'This project was highlighted in one of the highest valorated courses on Udemy, called Zero To Mastery.',
    url: 'https://simplfolio.netlify.com',
    repo: 'https://github.com/cobidev/simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'mososla.png',
    title: "Mososla's Agency Website",
    info: 'A Gatsby website for a Digital Agency based in Panama.',
    info2: 'I used Gatsby & GraphQL + Shopify API in order to create this website.',
    url: 'https://mososla.network',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'mockraft.png',
    title: "Mockraft's Website",
    info: 'A React website for a Digital Agency based in Caracas.',
    info2: 'I used React, React-Router & React Context API in order to create this website.',
    url: 'https://mockraft.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'mura.jpg',
    title: 'Perfil de Escucha',
    info:
      'A MVC Web Application that allows you to identify your predominant profile in listening and behavior areas to suggest solutions in your communicational field.',
    info2:
      'I developed this project for Murá, a recognized consultant from the Caracas, Venezuela.',
    url: 'https://mura-listening-profile.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'face-app.jpg',
    title: 'Face Recognition App',
    info:
      "A full-stack web application using the (MERN) Stack, this app allows you to identify the detection of faces in any image supplied. This was achieved thanks to Clarifai's artificial intelligence API.",
    info2: 'I used React, Node, Express.js and MongoDB in order to create this web application.',
    url: 'https://face-recognition-cobimr.herokuapp.com/',
    repo: 'https://github.com/cobidev/face-recognition', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'tw-clone.jpg',
    title: 'Twitter Clone',
    info:
      'A simple and minimalistic clone of Twitter, this full-stack application allows you to post tweets, see user profiles, follow or unfollow, and do the basic CRUD operations.',
    info2:
      'I used Node/Express to create the REST API, Passport.js for user authentication, Pug for template engine and MongoDB for data storage.',
    url: 'https://face-recognition-cobimr.herokuapp.com/',
    repo: 'https://github.com/cobidev/face-recognition', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'rpc.png',
    title: 'Rock, Papper or Scissor',
    info: 'My first Front-End game from scratch using Vanilla Javascript, CSS3 and HTML5.',
    info2:
      'Additionally, thinking on refactor this application very soon with React & React-Router',
    url: 'https://rockpaperscissors-game.netlify.com/',
    repo: 'https://github.com/cobidev/rock-paper-scissors', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's build together!",
  email: 'cobimr@protonmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/cobidev',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/cobimr',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/cobidev',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/cobidev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
