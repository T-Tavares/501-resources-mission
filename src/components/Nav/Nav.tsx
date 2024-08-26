import ss from './Nav.module.scss';
import {SimpleTreeView} from '@mui/x-tree-view';
import Sections from './subComponents/Sections';

const Nav = () => {
    return (
        <div className={ss.nav}>
            <SimpleTreeView>
                <Sections />
            </SimpleTreeView>
        </div>
    );
};

export default Nav;
