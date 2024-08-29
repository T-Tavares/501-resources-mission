import {TreeItem} from '@mui/x-tree-view';
import Resource from './Resource';
import type {DataSubInterface} from '../../../assets/resources';

const SubSection: React.FC<DataSubInterface> = data => {
    const dataArr = Object.values(data);

    const uniqueSubSections = [...new Set(dataArr.map(subsection => subsection.subsection))];

    const SubSections = uniqueSubSections.map(subsection => {
        const subSectionResources = dataArr.filter(subsec => subsec.subsection === subsection);
        return (
            <TreeItem key={subsection} itemId={subsection!} label={subsection}>
                <Resource {...subSectionResources} />
            </TreeItem>
        );
    });

    return (
        <TreeItem key="resources" itemId="resources" label="Resources">
            {SubSections}
        </TreeItem>
    );
    // [X] Get  Unique SubSections
    // [X] Loop through Subsections and filter values that match the subsection
    // [X] return the values as TreeItem
    // [ ] Tree Item will render links to the respective resources
};
export default SubSection;
