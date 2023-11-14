// -------------------- READE ME PRETTY PLEASE -------------------- //
/* 
  That's a resource git repository for Mission Ready 2023 Class.
  Initially I'll keep everything in one single file, but as the file grows we can 
  work on a folder and file structure for each section.

  I did make it as a JS Object / JSON format. Just so we can make some HTML/CSS/JS 
  magic on it later. Or just to have it as a Database experience.

  The structure of it is very simple, so I'd appreciate if everyone adding and 
  contributing could make some effort to keep it consistent.

  Each Section has a title (variable) that will hold an Array of Objects.
  And on each object there will be three keys and values.
  
  Ex:.
  / ---------------------------------------------------------------- //
  
  const topicOfResorces = [ {...}, {...}, {...}]



  const topicOfResorces = [
    {
      title: String,
      link: String,
      description: String,
    },
    {
      title: String,
      link: String,
      description: String,
    },
    ...
  ];
  
  / ---------------------------------------------------------------- //

  It's a open project so we can all add anything you think it's usefull, even if it's
  your own stuff. (I added a little project I made on the tools section 😁). But I'd ask you
  to add only links for things that you went through and you know is good stuff.
  
  Ex:. Things that have helped you learning a specific topics or tool. Or something that it's
  important for our career development or as a programmer on this wild world.
  
  I just ask that so  we don't spam the Resources Repo with random stuff. 

  For practicity you can copy this for each entry you want to add to the Repo and just fill 
  the gaps:

  / ---------------------------------------------------------------- //

  {
    title: '',
    link: '',
    description: '',
  }

*/

// ---------------------- LEARNING CHANNELS ----------------------- //

const learningChannels = [
  {
    title: 'Net Ninja',
    link: 'https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg',
    description: 'Web Development Free and Paid content',
  },
  {
    title: 'Web Dev Simplified',
    link: 'https://www.youtube.com/@WebDevSimplified',
    description: 'Web Development Free and Paid content',
  },
  {
    title: 'Kevin Powell',
    link: 'https://www.youtube.com/@KevinPowell',
    description: 'Front End Free and Paid content',
  },
  {
    title: 'Code with Ania Kubów',
    link: 'https://www.youtube.com/@AniaKubow',
    description: 'Web Development Free and Paid content',
  },
];

// ------------------------- FUNDAMENTALS ------------------------- //

const fundamentals = [
  // --------- HTML --------- //
  // --------- CSS ---------- //
  {
    title: 'Kevin Powell - CSS Battles',
    link: 'https://www.youtube.com/watch?v=20QiX8rmHnU&list=PL4-IK0AVhVjMkIofGCMt3Jv_wrxsZY4kA',
    description: 'Series of CSS challenges and battles.',
  },
  // ------ JAVASCRIPT ------ //
  {
    title: 'Up and Running with JavaScript: Free JavaScript Mini-Course',
    link: 'https://www.youtube.com/watch?v=20QiX8rmHnU&list=PL4-IK0AVhVjMkIofGCMt3Jv_wrxsZY4kA',
    description: 'Short Javascript course, this guy is reaaally good!',
  },
];

// ---------------------------- TOOLS ----------------------------- //
const tools = [
  {
    title: 'Tavares - Code Comment Titles',
    link: 'https://t-tavares.github.io/Code-Comment-Titles/',
    description: `Made this one myself. 🥹 It creates  dashed Titles in comment format for multiple languages. Once created the titles are automatically pasted to your clipboard`,
  },
];

// ---------------- PROGRAMING HEALTHY DISCUSSIONS ---------------- //

const devGeneralTopics = {
  title: 'Healthy Software Developer',
  link: 'https://www.youtube.com/@HealthyDev',
  description: 'Good and healthy discussions on what lays beyond our daily tasks and keyboards',
};
