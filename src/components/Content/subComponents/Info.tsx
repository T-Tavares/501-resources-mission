import ss from '../Content.module.scss';
import type {InfoProps} from '../Content';
import {stringToCamelCase} from '../../../helpers/stringHelpers';

// const Info: React.FC<InfoProps> = ({language, framework, level, intro, media, tags, type, topic}) => {
const Info: React.FC<InfoProps> = ({language, framework, level, intro}) => {
    const hasInfo = [language, framework, level, intro].some(info => info);
    // prettier-ignore
    return (
        <>
            {hasInfo && 
                <div className={ss.info}>
                    {intro && <p>{intro}</p>}
                    {language && <p><span>LANGUAGE:</span> {stringToCamelCase(language)}</p>}
                    {framework && <p><span>FRAMEWORK:</span> {stringToCamelCase(framework)}</p>}
                    {level && <p><span>LEVEL:</span> {stringToCamelCase(level)}</p>}
                </div>}
        </>
    );
};

export default Info;
