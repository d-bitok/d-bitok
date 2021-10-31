import React from "react";
import { 
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiPython,
    DiPostgresql,
    DiCode,
    DiMysql,
    DiDjango,
    DiTerminal,
    DiAngularSimple,
    DiDart,
    DiDocker,
    DiCodeBadge,
    DiGoogleCloudPlatform,
    DiLinux,
    DiJavascript1,
    DiNpm,
    DiVim,
} from 'react-icons/di'
import { SiExpress, SiFirebase, SiNextdotjs, SiSvelte, SiFlask, SiJquery, SiRedux } from "react-icons/si";
import { RiVuejsLine } from "react-icons/ri";
import { GoGear } from "react-icons/go";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, SkillBar, Hr } from "./TechnologiesStyles";

export default function Technologies() {
    return (
        <Section id='tech'>
            <SectionDivider colorAlt />
            <br />
            <SectionTitle>Technologies I Use</SectionTitle>
            <SectionText>
                Availability of a wide variety and range of technologies has allowed me to work and complete projects using different methods for both frontend and backend frameworks that would have otherwise been hard to impossible to achieve using only one technology.
            </SectionText>
            {/* <Hr colorAlt /> */}
            {/* Front-End */}
            <List>
                <br />
                <ListTitle>Front-End</ListTitle>
                <br />
                <ListItem>
                    <picture><DiReact size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>React Js</ListParagraph>
                    <SkillBar eighty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><RiVuejsLine size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Vue Js</ListParagraph>
                    <SkillBar seventy/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiReact size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>React Native</ListParagraph>
                    <SkillBar ninety/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiDjango size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Django</ListParagraph>
                    <SkillBar ninety/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiDart size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Flutter(Dart)</ListParagraph>
                    <SkillBar seventy/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiAngularSimple size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Angular Js</ListParagraph>
                    <SkillBar fifty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><SiSvelte size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Svelte</ListParagraph>
                    <SkillBar eighty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiCode size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>HTML5, Bootstrap & CSS3</ListParagraph>
                    <SkillBar ninety/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><SiRedux size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Redux Js</ListParagraph>
                    <SkillBar eighty/>
                    <br />
                    </ListContainer>
                </ListItem>
            </List>
            <Hr colorAlt />
            {/* Back-End */}
            <List>
                <br />
                <ListTitle>Back-End</ListTitle>
                <br />
                <ListItem>
                    <picture><SiFirebase size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Firebase</ListParagraph>
                    <SkillBar ninety/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><SiNextdotjs size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Next Js</ListParagraph>
                    <SkillBar eighty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiNodejs size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Node Js</ListParagraph>
                    <SkillBar sixty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><SiExpress size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Express Js</ListParagraph>
                    <SkillBar eighty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><SiJquery size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Jquery</ListParagraph>
                    <SkillBar seventy/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiPostgresql size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Postgresql</ListParagraph>
                    <SkillBar eighty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiMongodb size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Mongodb</ListParagraph>
                    <SkillBar twenty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiMysql size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>MySQL</ListParagraph>
                    <SkillBar fifty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><SiFlask size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Flask</ListParagraph>
                    <SkillBar seventy/>
                    <br />
                    </ListContainer>
                </ListItem>
            </List>
            <Hr colorAlt />
            {/* Languages */}
            <List>
                <br />
                <ListTitle>Languages</ListTitle>
                <br />
                <ListItem>
                    <picture><DiPython size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Python</ListParagraph>
                    <SkillBar eighty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiJavascript1 size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Javascript</ListParagraph>
                    <SkillBar ninety/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiCodeBadge size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Java, C & C++</ListParagraph>
                    <SkillBar seventy/>
                    <br />
                    </ListContainer>
                </ListItem>
            </List>
            <Hr colorAlt />
            {/* Cloud Native */}
            <List>
                <br />
                <ListTitle>Cloud Native</ListTitle>
                <br />
                <ListItem>
                    <picture><DiGoogleCloudPlatform size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Google Cloud</ListParagraph>
                    <SkillBar eighty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiCodeBadge size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Rust & Go</ListParagraph>
                    <SkillBar thirty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiDocker size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Docker</ListParagraph>
                    <SkillBar eighty/>
                    <br />
                    </ListContainer>
                </ListItem>
            </List>
            <Hr colorAlt />
            {/* Others */}
            <List>
                <br />
                <ListTitle>Others</ListTitle>
                <br />
                <ListItem>
                    <picture><DiTerminal size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Terminal</ListParagraph>
                    <SkillBar ninety/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiGit size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Git</ListParagraph>
                    <SkillBar seventy/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiNpm size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>NPM</ListParagraph>
                    <SkillBar ninety/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><GoGear size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>APIs</ListParagraph>
                    <SkillBar eighty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiLinux size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Linux</ListParagraph>
                    <SkillBar sixty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiVim size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Vim</ListParagraph>
                    <SkillBar ninety/>
                    <br />
                    </ListContainer>
                </ListItem>
            </List>
            <Hr colorAlt />
            <br />
            <SectionDivider colorAlt />
            <br />
        </Section>
    )
}