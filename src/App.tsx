import ss from './App.module.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Socials from './components/Socials/Socials';

export default function App() {
    return (
        <div className={ss.appGrid}>
            <div className={ss.socials}>
                <Socials />
            </div>
            <div className={ss.header}>
                <Header />
            </div>
            <div className={ss.nav}>
                <Nav />
            </div>
            <div className={ss.content}>
                <Content />
            </div>
            <div className={ss.footer}>
                <Footer />
            </div>
        </div>
    );
}
