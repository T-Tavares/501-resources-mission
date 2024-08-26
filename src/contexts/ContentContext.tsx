import {createContext, useContext, useEffect, useState} from 'react';
import data from '../assets/resources';
import {Resource, DatabaseInterface} from '../assets/resources';

const ContentContext = createContext({
    database: {} as DatabaseInterface,
    resource: {} as Resource,
    setResourceHandler: (resource: Resource) => {
        /* placeholder */
    },
});

export const useContent = () => useContext(ContentContext);

export const ContentProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    // At this point database is a file, but I connected everything to convert to an API in the future if needed
    const database = data;

    // Initial Data - Helper to explain the user how to use the website
    const initWelcomingResourceData = {
        title: 'Thiago Tavares - Useful Resources',
        website: 'https://t-tavares.github.io/portfolio/',
        description: `I have compiled a list of resources that I have found useful in my journey as a developer. If you own any of these resources and would like me to remove them, please let me know and I'll do straight away.

        Althougt this is a personal list of resources, I am open to any suggestions you may have.
        I hope you find them useful as well.

        On this area you will find the description of the resource selected.

        Happy Coding!`,
        intro: `On this area you'll find informations about the resource like; Level, Language, Framework, Topic, Type and Tags.`,
    };

    const [resource, setResource] = useState<Resource>(initWelcomingResourceData);
    const setResourceHandler = (resource: Resource) => {
        setResource(resource);
    };

    return <ContentContext.Provider value={{database, resource, setResourceHandler}}>{children}</ContentContext.Provider>;
};
