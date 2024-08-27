import ss from '../Resource.module.scss';

const Links: React.FC<{links: string[]; title?: string}> = ({links, title}) => {
    const Links = links.map((link, index) => (
        <a key={`${index}_${title}`} href={link} target="_blank">
            {link}
        </a>
    ));

    return (
        <div className={ss.links}>
            <h1>{`${title} Links`}</h1>
            <div>{Links}</div>
        </div>
    );
};
export default Links;
