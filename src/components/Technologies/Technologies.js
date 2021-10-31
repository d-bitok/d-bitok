import React from "react";
import { 
    DiFirebase,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiBootstrap,
    DiGit,
    DiPython,
    DiHtml5 ,
    DiPostgresql,
    DiAndroid,
    DiCode,
    DiSqllite,
    DiMysql,
    DiDjango,
    DiHeroku,
    DiTerminal,
    DiAngularSimple,
    DiCss3,
    DiDart,
    DiDocker,
    DiGo,
    DiExtjs,
    DiCodeBadge,
    DiGoogleCloudPlatform,
    DiJavascript,
    DiLinux,
    DiJavascript1,
    DiNpm,
    DiScriptcs,
    DiJqueryUiLogo,
    DiVim,
    DiZend,
} from 'react-icons/di'
import { SiExpress, SiFirebase, SiNextdotjs } from "react-icons/si";
import { RiVuejsLine } from "react-icons/ri";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, SkillBar, Hr } from "./TechnologiesStyles";

export default function Technologies() {
    return (
        <Section id='tech'>
            <SectionDivider colorAlt />
            <br />
            <SectionTitle>Technologies</SectionTitle>
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
                        <ListParagraph>React.js</ListParagraph>
                    <SkillBar eighty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><RiVuejsLine size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Vue.js</ListParagraph>
                    <SkillBar seventy/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><SiNextdotjs size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Next.js</ListParagraph>
                    <SkillBar eighty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><SiExpress size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Express.js</ListParagraph>
                    <SkillBar eighty/>
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
                        <ListParagraph>Angular.js</ListParagraph>
                    <SkillBar fifty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiBootstrap size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Bootstrap</ListParagraph>
                    <SkillBar eighty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiHtml5 size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>HTML5</ListParagraph>
                    <SkillBar ninety/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiCss3 size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>CSS3</ListParagraph>
                    <SkillBar ninety/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiAndroid size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Android</ListParagraph>
                    <SkillBar thirty/>
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
                    <picture><DiFirebase size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Firestore</ListParagraph>
                    <SkillBar ninety/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><SiFirebase size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Firebase</ListParagraph>
                    <SkillBar ninety/>
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
                    <picture><DiNodejs size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Node.js</ListParagraph>
                    <SkillBar sixty/>
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
                    <picture><DiSqllite size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>SQLite</ListParagraph>
                    <SkillBar sixty/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiHeroku size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Heroku</ListParagraph>
                    <SkillBar eighty/>
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
                        <ListParagraph>C</ListParagraph>
                    <SkillBar seventy/>
                    <br />
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture><DiCodeBadge size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>C++</ListParagraph>
                    <SkillBar eighty/>
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
                        <ListParagraph>Rust</ListParagraph>
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
                <ListItem>
                    <picture><DiGo size="3rem" /></picture>
                    <ListContainer>
                        <ListParagraph>Go</ListParagraph>
                    <SkillBar twenty/>
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