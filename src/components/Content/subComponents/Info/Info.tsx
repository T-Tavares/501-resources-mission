import ss from '../../Content.module.scss';
import type {InfoProps} from '../../Content';

const Info: React.FC<InfoProps> = ({language, framework, level, intro, media, tags, type, topic}) => {
    return (
        <div className={ss.info}>
            {intro && <p>{intro}</p>}
            {language && <p>Language: {language}</p>}
            {framework && <p>Framework: {framework}</p>}
            {level && <p>Level: {level}</p>}
        </div>
    );
};

export default Info;
