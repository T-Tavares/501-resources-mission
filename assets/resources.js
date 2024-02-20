/* 
    This file is in JS format to preserve the comments for a better organisation.
    Before push to any DB remember to convert it to JSON
*/

/* 
    BODY OF AN LEARNING CHANNELS ENTRY

    {    
        title: String,
        website: String,
        links: [...Strings],
        description: String,
        language: [...Strings],
        media: [...Strings]
    }
    
*/

/* 
    BODY OF AN RESOURCES ENTRY

    {    
        title: String,
        link: String,
        description: String,
        language: String,
        level: Number, // 0 to 5 => 5 being the hardest
        media: String,
        tags: [...Strings]
    }

*/

/* 
    BODY OF A TOOL ENTRY

    {    
        title: String,
        link: String,
        description: String,
        type: String
    }

*/

const data = {
    // ---------------------- LEARNING CHANNELS ----------------------- //

    learningChannels: [
        {
            title: 'Net Ninja',
            website: 'https://netninja.dev/',
            links: [
                'https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg',
                'https://www.linkedin.com/company/net-ninja-uk/',
            ],
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
            links: [
                'https://www.youtube.com/@KevinPowell',
                'https://www.kevinpowell.co/articles/',
                'https://github.com/kevin-powell',
            ],
            description: 'Front End Free and Paid content',
            media: 'video',
        },
        {
            title: 'Code with Ania Kubów',
            links: [
                'https://www.youtube.com/@AniaKubow',
                'https://www.linkedin.com/in/ania-kubow/',
                'https://github.com/kubowania',
            ],
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
    resources: [
        // -----------------------------  CSS ----------------------------- //

        {
            title: 'Kevin Powell - CSS Battles',
            link: 'https://www.youtube.com/watch?v=20QiX8rmHnU&list=PL4-IK0AVhVjMkIofGCMt3Jv_wrxsZY4kA',
            description: 'Series of CSS challenges and battles.',
            language: 'css',
            level: '4',
            media: 'video',
            tags: ['kevin powell', 'css battle'],
        },
        {
            title: 'A Complete Guide to CSS Grid',
            link: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
            description: 'Detailed explanation on CSS Grid',
            language: 'css',
            level: '2',
            media: 'article',
            tags: ['grid'],
        },
        {
            title: 'A Complete Guide to Flexbox',
            link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
            description: 'Detailed explanation on CSS Flexbox',
            language: 'css',
            level: '2',
            media: 'article',
            tags: ['flexbox'],
        },

        // -------------------------  JAVASCRITP -------------------------- //

        {
            title: 'Up and Running with JavaScript: Free JavaScript Mini-Course',
            link: 'https://www.youtube.com/watch?v=20QiX8rmHnU&list=PL4-IK0AVhVjMkIofGCMt3Jv_wrxsZY4kA',
            description: 'Short Javascript course, this guy is reaaally good!',
            language: 'javascript',
            level: '1',
            media: 'video',
        },
        {
            title: 'Deferring Lazy Loading Intersection Observer API',
            link: 'https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/',
            description: 'A deep dive on how the Intersection Observer API works, and how to avoid common issues.',
            language: 'javascript',
            level: '4',
            media: 'article',
            tags: ['lazy loading', 'Intersection Observer'],
        },

        // -------------------------  JAVASCRITP -------------------------- //
        // ---------------------------- REACT ----------------------------- //

        {
            title: 'Learn React With This One Project',
            link: 'https://www.youtube.com/watch?v=Rh3tobg7hEo',
            description:
                'Learning React is hard. There are so many concepts to learn and mindsets shifts that you need to do. That is why in this video I will be breaking down all the most important concepts you need to understand in React.',
            framework: 'react',
            level: '3',
            media: 'video',
            tags: ['todo app'],
        },

        // -------------------------- TYPESCRITP -------------------------- //

        {
            title: 'TypeScript Tutorial for Beginners',
            link: 'https://www.youtube.com/watch?v=d56mG7DezGs',
            description: 'Introduction to Typescript.',
            language: 'typescript',
            level: '3',
            media: 'video',
        },
        {
            title: 'Learn TypeScript Generics In 13 Minutes',
            link: 'https://www.youtube.com/watch?v=EcCTIExsqmI',
            description:
                'By far one of the hardest TypeScript concepts to understand when first learning TypeScript is generics. They introduce new syntax, new logic, and a new way of thinking all at the same time which is tough to comprehend. In this video I will be breaking down everything you need to know about generics (including advanced generic features).',
            language: 'typescript',
            level: '4',
            media: 'video',
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
            level: '4',
            media: 'video',
        },

        // ---------------------------- GITHUB ---------------------------- //

        {
            title: 'How to Deploy Your Vite React App to GitHub Pages (With and Without React Router)',
            link: 'https://blog.devgenius.io/how-to-deploy-your-vite-react-app-to-github-pages-with-and-without-react-router-b060d912b10e',
            description: 'How to deploy a Vite React App with routes on Github.',
            language: 'javascript',
            framework: 'react',
            level: '3',
            media: 'article',
            tags: ['github', 'deployment'],
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
