import ss from '../Resource.module.scss';
/* 
    Programatically check for sites that do not allow iFrames was to big of a task because each browser has it's own way of blocking iFrames
    To make it easier and for the scope of this project it was easier to create a list of sites that do not allow iFrames
    and as I add more sites I can just test them and add them to the list if needed. 
*/
const frameNotAllowedList = ['smashingmagazine', 'stackoverflow', 'devgenius', 'rapidapi', 'producthunt', 'github'];

const Link: React.FC<{link?: string; title?: string}> = ({link, title}) => {
    const isFrameBlocked = frameNotAllowedList.some(site => link?.includes(site));

    // Iframe component to display content
    const IFrame: React.FC<{link?: string}> = ({link}) => {
        return <iframe id="player" src={link} allowFullScreen></iframe>;
    };

    // DirectLink component to display a link to the content
    const DirectLink: React.FC<{link?: string; title?: string}> = ({link, title}) => {
        return (
            <div>
                <h1>Sorry this resource does not allow sharing through iFrames, but you can check it directly on the link below</h1>
                <a href={link} target="_blank">
                    {title}
                </a>
            </div>
        );
    };

    return <div className={ss.link}>{isFrameBlocked ? <DirectLink link={link} title={title} /> : <IFrame link={link} />}</div>;
};

export default Link;
