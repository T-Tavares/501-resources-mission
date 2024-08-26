export interface Resource {
    // General Fields
    title: string;
    description: string;
    website?: string;
    link?: string;
    intro?: string;

    // Channel
    links?: string[];
    media?: 'video' | 'article' | 'forum' | 'website';

    // Resource
    framework?: string;
    language?: string;
    level?: 'beginner' | 'intermediate' | 'advanced';
    tags?: string[];
    subsection?: string;

    //Tool
    type?: string;

    // General Discussion
    topic?: string;
}

export interface DatabaseInterface {
    learningChannels: Resource[];
    resources: Resource[];
    tools: Resource[];
    generalDiscussions: Resource[];
}
export type DataSubInterface = Resource[];

export const data: DatabaseInterface = {
    // ---------------------- LEARNING CHANNELS ----------------------- //

    learningChannels: [
        {
            title: 'Net Ninja',
            website: 'https://netninja.dev/',
            links: ['https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg', 'https://www.linkedin.com/company/net-ninja-uk/'],
            description: 'Web Development Free and Paid content',
            media: 'video',
        },
        {
            title: 'Web Dev Simplified',
            website: 'https://courses.webdevsimplified.com/',
            links: [
                'https://www.youtube.com/@WebDevSimplified',
                'https://blog.webdevsimplified.com/',
                'https://www.linkedin.com/company/web-dev-simplified/about/',
                'https://github.com/WebDevSimplified',
            ],
            description: 'Web Development Free and Paid content',
            media: 'video',
        },
        {
            title: 'Kevin Powell',
            website: 'https://www.kevinpowell.co/',
            links: ['https://www.youtube.com/@KevinPowell', 'https://www.kevinpowell.co/articles/', 'https://github.com/kevin-powell'],
            description: 'Front End Free and Paid content',
            media: 'video',
        },
        {
            title: 'Code with Ania Kubów',
            links: ['https://www.youtube.com/@AniaKubow', 'https://www.linkedin.com/in/ania-kubow/', 'https://github.com/kubowania'],
            description: 'Web Development Free and Paid content',
            media: 'video',
        },
        {
            title: 'All Things JavaScript',
            website: 'https://www.allthingsjavascript.com/',
            links: [
                'https://www.youtube.com/@AllThingsJavaScript',
                'https://medium.com/@stevenhancock83',
                'https://www.instagram.com/allthingsjavascript/',
            ],
            description: 'Web Development Free and Paid content',
            media: 'video',
        },
        {
            title: 'Fireship',
            website: 'https://fireship.io/',
            links: [
                'https://www.youtube.com/@Fireship',
                'https://www.instagram.com/fireship.tech/',
                'https://www.linkedin.com/company/fireship-tech/',
            ],
            description:
                'High-intensity ⚡ code tutorials and tech news to help you ship your app faster. New videos every week covering the topics every programmer should know. ',
            media: 'video',
        },
        {
            title: 'CSS-Tricks',
            website: 'https://css-tricks.com/',
            links: [
                'https://www.youtube.com/@realcsstricks',
                'https://www.instagram.com/real_css_tricks/',
                'https://www.linkedin.com/company/front-end-fun/',
            ],
            description: 'Everything about CSS and how it works in detail.',
            media: 'website',
        },
        {
            title: 'Matt Pocock',
            website: 'https://www.mattpocock.com/',
            links: [
                'https://www.youtube.com/@mattpocockuk',
                'https://www.instagram.com/mattpocockuk/',
                'https://www.linkedin.com/in/mapocock/?originalSubdomain=uk',
                'https://github.com/mattpocock',
            ],
            description:
                'Become a TypeScript wizard with tips, tricks and tutorials. Plus, updates from the latest TypeScript releases (and other open source awesomeness).',
            media: 'video',
        },
    ],

    // -------------------------- RESOURCES --------------------------- //

    resources: [
        // -----------------------------  CSS ----------------------------- //

        {
            title: 'Kevin Powell - CSS Battles',
            link: 'https://www.youtube.com/watch?v=20QiX8rmHnU&list=PL4-IK0AVhVjMkIofGCMt3Jv_wrxsZY4kA',
            description: 'Series of CSS challenges and battles.',
            language: 'css',
            level: 'advanced',
            media: 'video',
            tags: ['kevin powell', 'css battle'],
            subsection: 'CSS',
        },
        {
            title: 'A Complete Guide to CSS Grid',
            link: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
            description: 'Detailed explanation on CSS Grid',
            language: 'css',
            level: 'intermediate',
            media: 'article',
            tags: ['grid'],
            subsection: 'CSS',
        },
        {
            title: 'A Complete Guide to Flexbox',
            link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
            description: 'Detailed explanation on CSS Flexbox',
            language: 'css',
            level: 'beginner',
            media: 'article',
            tags: ['flexbox'],
            subsection: 'CSS',
        },

        // -------------------------  JAVASCRITP -------------------------- //

        {
            title: 'Up and Running with JavaScript: Free JavaScript Mini-Course',
            link: 'https://www.youtube.com/watch?v=bSx9wDk1zko&list=PLvtRgUbhWmy8MCUNDT2hiI0jpGgjTfSLE',
            description: 'Short Javascript course, this guy is reaaally good!',
            language: 'javascript',
            level: 'intermediate',
            media: 'video',
            subsection: 'JavaScript',
        },
        {
            title: 'Deferring Lazy Loading Intersection Observer API',
            link: 'https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/',
            description: 'A deep dive on how the Intersection Observer API works, and how to avoid common issues.',
            language: 'javascript',
            level: 'advanced',
            media: 'article',
            tags: ['lazy loading', 'Intersection Observer'],
            subsection: 'JavaScript',
        },

        // -------------------------  JAVASCRITP -------------------------- //
        // ---------------------------- REACT ----------------------------- //

        {
            title: 'Learn React With This One Project',
            link: 'https://www.youtube.com/watch?v=Rh3tobg7hEo',
            description:
                'Learning React is hard. There are so many concepts to learn and mindsets shifts that you need to do. That is why in this video I will be breaking down all the most important concepts you need to understand in React.',
            language: 'javascript',
            framework: 'react',
            level: 'intermediate',
            media: 'video',
            tags: ['todo app'],
            subsection: 'React',
        },

        // -------------------------- TYPESCRITP -------------------------- //

        {
            title: 'TypeScript with Matt Pocock - The Complete Guide',
            link: 'https://www.youtube.com/watch?v=qcFmCKQDa2s',
            description:
                'In this session, Matt Pocock, who was named the "The Rodney Mullen of TypeScript"  by Wes Bos, taught me TypeScript from Scratch.',
            language: 'typescript',
            level: 'intermediate',
            media: 'video',
            subsection: 'Typescript',
        },
        {
            title: 'TypeScript Tutorial for Beginners',
            link: 'https://www.youtube.com/watch?v=d56mG7DezGs',
            description: 'Introduction to Typescript.',
            language: 'typescript',
            level: 'beginner',
            media: 'video',
            subsection: 'Typescript',
        },
        {
            title: 'Learn TypeScript Generics In 13 Minutes',
            link: 'https://www.youtube.com/watch?v=EcCTIExsqmI',
            description:
                'By far one of the hardest TypeScript concepts to understand when first learning TypeScript is generics. They introduce new syntax, new logic, and a new way of thinking all at the same time which is tough to comprehend. In this video I will be breaking down everything you need to know about generics (including advanced generic features).',
            language: 'typescript',
            level: 'advanced',
            media: 'video',
            subsection: 'Typescript',
        },
        {
            title: `Advanced TypeScript: Let's Learn Generics!`,
            link: 'https://www.youtube.com/watch?v=xk_PbxR7G8A',
            description:
                "If you've never used typescript generics, it can be pretty intimidating. In this episode, Matt Pocock will teach us this advanced TypeScript concept.",
            language: 'typescript',
            level: 'advanced',
            media: 'video',
            subsection: 'Typescript',
        },

        // -------------------------- TYPESCRITP -------------------------- //
        // ---------------------------- REACT ----------------------------- //

        {
            title: 'Blazing Fast Tips: React & TypeScript',
            link: 'https://www.youtube.com/watch?v=37PafxU_uzQ',
            description:
                "React and TypeScript are a match made in heaven. Here's a BLAZING FAST tips bonanza to help you get the most out of them.",
            language: 'typescript',
            framework: 'react',
            level: 'advanced',
            media: 'video',
            subsection: 'React Typescript',
        },
        {
            title: `Element implicitly has an 'any' type error`,
            link: 'https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression',
            description: `The error "Element implicitly has an 'any' type because expression of type 'string' can't be used to index type" occurs when we use a string to index an object with specific keys.`,
            language: 'typescript',
            framework: 'react',
            level: 'advanced',
            media: 'article',
            tags: ['typescript error', 'error'],
            subsection: 'React Typescript',
        },
        {
            title: `What does "keyof typeof" mean in TypeScript?`,
            link: 'https://stackoverflow.com/questions/55377365/what-does-keyof-typeof-mean-in-typescript',
            description: `An extra explanation for the discussion on the article - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type`,
            language: 'typescript',
            framework: 'react',
            level: 'advanced',
            media: 'forum',
            tags: ['typescript error', 'error'],
            subsection: 'React Typescript',
        },

        // ---------------------------- GITHUB ---------------------------- //

        {
            title: 'How to Deploy Your Vite React App to GitHub Pages (With and Without React Router)',
            link: 'https://blog.devgenius.io/how-to-deploy-your-vite-react-app-to-github-pages-with-and-without-react-router-b060d912b10e',
            description: 'How to deploy a Vite React App with routes on Github.',
            language: 'javascript',
            framework: 'react',
            level: 'intermediate',
            media: 'article',
            tags: ['github', 'deployment'],
            subsection: 'Github',
        },

        // ---------------------------- DOCKER ---------------------------- //
        {
            title: 'Docker Crash Course for Absolute Beginners 2023',
            link: 'https://www.youtube.com/watch?v=pg19Z8LL06w&t=5s',
            description: 'Understand Docker, why it was created and why use it. Also the steps of doing it.',
            language: 'javascript',
            framework: 'react',
            level: 'intermediate',
            media: 'video',
            tags: ['docker'],
            subsection: 'Docker',
        },
    ],

    // ------------------------- ONLINE TOOLS ------------------------- //

    tools: [
        // ----------------------------- MISC ----------------------------- //

        {
            title: 'Tavares - Code Comment Titles',
            link: 'https://t-tavares.github.io/Code-Comment-Titles/',
            description:
                'Made this one myself. 🥹 It creates  dashed Titles in comment format for multiple languages. Once created the titles are automatically pasted to your clipboard',
            type: 'coding',
        },

        // ---------------------- API'S DISCOVERING ----------------------- //

        {
            title: 'Rapid API',
            link: 'https://rapidapi.com/hub',
            description: 'API discovering tool',
            type: 'API',
        },
        {
            title: "API's Guru",
            link: 'https://apis.guru/',
            description: 'API discovering tool',
            type: 'API',
        },
        {
            title: "API's IO",
            link: 'https://apis.io/',
            description: 'API discovering tool',
            type: 'API',
        },
        {
            title: "SDK's",
            link: 'https://sdks.io/docs/introduction/',
            description: 'API discovering tool',
            type: 'API',
        },
        {
            title: 'Product Hunt',
            link: 'https://www.producthunt.com/#!/s/posts/api',
            description: 'API discovering tool',
            type: 'API',
        },
        {
            title: "Public API's",
            link: 'https://github.com/public-apis/public-apis',
            description: 'API discovering tool',
            type: 'API',
        },
    ],

    // --------------------- GENERAL DISCUSSIONS ---------------------- //

    generalDiscussions: [
        {
            title: 'Healthy Software Developer',
            link: 'https://www.youtube.com/@HealthyDev',
            description: 'Good and healthy discussions on what lays beyond our daily tasks and keyboards',
            media: 'video',
            topic: 'health',
        },
    ],
};

export default data;
