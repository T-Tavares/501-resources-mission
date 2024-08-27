import ss from '../Content.module.scss';

const Description: React.FC<{description: string}> = description => {
    const paragraphs = description.description.split('\n');

    return (
        <div className={ss.description}>
            {paragraphs.map((paragraph, index) => {
                return <p key={index}>{paragraph}</p>;
            })}
        </div>
    );
};

export default Description;
