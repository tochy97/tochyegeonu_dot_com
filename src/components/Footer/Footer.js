import React from 'react';
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { footer, footerContainer, footerIcon } from '../common/ClassNames';

function Footer() {
    return (
        <footer className={footer}>
            <div className={footerContainer}>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/chy.toe/">
                    <AiOutlineInstagram className={footerIcon}/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tochukwu-egeonu-79935a127/">
                    <AiOutlineLinkedin className={footerIcon}/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/share/wH9d8avJQyAKdiRT/?mibextid=LQQJ4d">
                    <AiOutlineFacebook className={footerIcon}/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/tochy97">
                    <VscGithub className={footerIcon}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;