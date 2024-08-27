import ss from '../Resource.module.scss';

const Website: React.FC<{website: string; title?: string}> = ({website, title}) => {
    const openWebsite = () => {
        window.open(website, '_blank');
    };
    return (
        <div className={ss.website} onClick={openWebsite}>
            <h1>{title} Website Link</h1>
        </div>
    );
};
export default Website;
