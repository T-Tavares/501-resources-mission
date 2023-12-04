import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx';
import Filter from './components/Filter/Filter.jsx';
import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.css';

export default function App() {
    return (
        <>
            <Header />
            <Menu />
            <Filter />
            <Content />
            <Footer />
        </>
    );
}
