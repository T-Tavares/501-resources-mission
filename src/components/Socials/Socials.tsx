import React from 'react';
import ss from './Socials.module.scss';
import {FaGithub, FaLinkedin, FaRegNewspaper} from 'react-icons/fa';

const Socials: React.FC = () => {
    return (
        <div className={ss.socials}>
            <a href="https://github.com/T-Tavares" target="_blank">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ttavaresf/" target="_blank">
                <FaLinkedin />
            </a>
            <a href="https://t-tavares.github.io/portfolio/" target="_blank">
                <FaRegNewspaper />
            </a>
        </div>
    );
};
export default Socials;
