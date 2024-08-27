import ss from './Content.module.scss';
import {useContent} from '../../contexts/ContentContext';
import Description from './subComponents/Description';
import Info from './subComponents/Info';
import Resource from './subComponents/Resource/Resource';
export interface InfoProps {
    language?: string;
    framework?: string;
    level?: 'beginner' | 'intermediate' | 'advanced';
    intro?: string;
    media?: 'video' | 'article' | 'forum' | 'website';
    tags?: string[];
    type?: string;
    topic?: string;
}

export interface ResourceProps {
    link?: string;
    links?: string[];
    website?: string;
    title?: string;
}

export default function Content() {
    const {resource} = useContent();
    // Destructuring all the properties from the resource object
    const {title, description, website, link, links, media, framework, language, level, tags, type, topic, intro} = resource;

    // Grouping Info properties into an object
    const infoDataObj: InfoProps = {language, framework, level, intro, media, tags, type, topic};

    // Grouping all the links and sources into an object
    const resourceDataObj = {link, links, website, title};
    return (
        <div className={ss.content}>
            <div className={ss.title}>{title}</div>
            <Description description={description} />
            <Info {...infoDataObj} />
            <Resource {...resourceDataObj} />
        </div>
    );
}
