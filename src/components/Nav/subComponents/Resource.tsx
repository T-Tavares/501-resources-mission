import ss from '../Nav.module.scss';
import type {DataSubInterface} from '../../../assets/resources';
import {useContent} from '../../../contexts/ContentContext';
import {TreeItem} from '@mui/x-tree-view';

const Resource: React.FC<DataSubInterface> = subsectionData => {
    const {setResourceHandler} = useContent();

    return Object.values(subsectionData).map(resource => {
        return (
            <TreeItem
                itemId={resource.title}
                label={resource.title}
                onClick={() => setResourceHandler(resource)}
                className={ss.resource}
            />
        );
    });
};
export default Resource;
