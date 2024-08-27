import ss from '../../Content.module.scss';
import type {ResourceProps} from '../../Content';
import Website from './subComponents/Website';
import Links from './subComponents/Links';
import Link from './subComponents/Link';

const Resource: React.FC<ResourceProps> = ({website, link, links, title}) => {
    return (
        <div className={ss.resource}>
            {website && <Website website={website} title={title} />}
            {link && <Link link={link} title={title} />}
            {links && <Links links={links} title={title} />}
        </div>
    );
};
export default Resource;
