import Link from 'next/link';
import React from 'react';
// import { SiDeutschebahn } from 'react-icons/si';
import { SiDungeonsanddragons } from 'react-icons/si';
// import { GiDragonfly } from 'react-icons/gi';
import { AiFillGithub, AiFillMail, AiFillPhone } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

export default function Header () {
    return (
        <Container>
            <Div1>
                <Link href="/">
                    <a style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                    }}>
                        {/* <SiDeutschebahn size="3rem" /> */}
                        {/* <GiDragonfly size="3rem" /> */}
                        <SiDungeonsanddragons size="3rem" />
                        <span>
                            <h3>
                                <pre> Douglas Bitok</pre>
                            </h3>
                        </span>
                    </a>
                </Link>
            </Div1>
            <Div2>
                {/* Links */}
                <li>
                    {/* My Projects Link */}
                    <Link href="#projects">
                        <NavLink>Projects</NavLink>
                    </Link>
                </li>
                <li>
                    {/* Technologies Used Link */}
                    <Link href="#tech">
                        <NavLink>Technologies</NavLink>
                    </Link>
                </li>
                <li>
                    {/* About Link */}
                    <Link href="#about">
                        <NavLink>About</NavLink>
                    </Link>
                </li>
            </Div2>
            <Div3>
                {/* Github Link */}
                <SocialIcons href="https://github.com/rexdougie" target="_blank"><AiFillGithub size="3rem" /></SocialIcons>
                <SocialIcons href="mailto:bitokdouglas@gmail.com" target="_blank"><AiFillMail size="3rem" /></SocialIcons>
                <SocialIcons href="tel:+254768858280" target="_blank"><AiFillPhone size="3rem" /></SocialIcons>
            </Div3>
        </Container>
    )
}