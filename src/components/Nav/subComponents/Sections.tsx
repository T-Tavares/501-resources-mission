import {TreeItem} from '@mui/x-tree-view';
import {useContent} from '../../../contexts/ContentContext';
import SubSection from './SubSection';
import Resource from './Resource';
import {stringToCamelCase} from '../../../helpers/stringHelpers';
import type {DataSubInterface} from '../../../assets/resources';

const Sections: React.FC = () => {
    const {database} = useContent();

    type Section = [string, DataSubInterface];
    return Object.entries(database).map((section: Section) => {
        const [key, value] = section;
        const label = stringToCamelCase(key);
        if (key === 'resources') return <SubSection key={key} {...value} />;

        return (
            <TreeItem key={key} itemId={key} label={label}>
                <Resource {...value} />
            </TreeItem>
        );
    });
};
export default Sections;
