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
  DiHtml5,
  DiTerminal,
  DiAngularSimple,
  DiDocker,
  DiCodeBadge,
  DiGoogleCloudPlatform,
  DiLinux,
  DiJavascript1,
  DiNpm,
  DiVim,
  DiAndroid,
  DiSqllite,
  DiHeroku,
  DiBootstrap,
  DiCss3,
  DiRust,
  DiGo,
} from "react-icons/di";
import {
  SiExpress,
  SiFirebase,
  SiDart,
  SiNextdotjs,
  SiSvelte,
  SiFlask,
  SiJquery,
  SiRedux,
  SiTypescript,
  SiFastapi,
  SiPuppeteer,
  SiPostman,
  SiPlanetscale,
  SiSupabase,
  SiDocker,
  SiTauri,
  SiShell,
  SiGnubash,
  SiLua,
  SiC,
  SiCplusplus,
  SiRust,
  SiGo,
  SiNeovim,
} from "react-icons/si";
import { RiVuejsLine } from "react-icons/ri";
import { GoGear } from "react-icons/go";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  SkillBar,
  Hr,
} from "./TechnologiesStyles";

export default function Technologies() {
  return (
    <Section id="tech">
      <SectionDivider colorAlt />
      <br />
      <SectionTitle>Technologies I Use</SectionTitle>
      <SectionText>
        Availability of a wide variety and range of technologies has allowed me
        to work and complete projects using different methods for both frontend
        and backend frameworks that would have otherwise been hard to impossible
        to achieve using only one technology.
      </SectionText>
      {/* <Hr colorAlt /> */}
      {/* Front-End */}
      <List>
        <br />
        <ListTitle>Front-End</ListTitle>
        <br />
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>React Js</ListParagraph>
            <SkillBar eighty />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <RiVuejsLine size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Vue Js</ListParagraph>
            <SkillBar seventy />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiSvelte size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Svelte</ListParagraph>
            <SkillBar eighty />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiTypescript size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Typescript</ListParagraph>
            <SkillBar ninety />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiCodeBadge size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Yum</ListParagraph>
            <SkillBar ninety />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiCodeBadge size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Leptos</ListParagraph>
            <SkillBar ninety />
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
          <picture>
            <DiRust size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Rust</ListParagraph>
            <SkillBar ninety />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiNextdotjs size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Next Js</ListParagraph>
            <SkillBar eighty />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiGo size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Go</ListParagraph>
            <SkillBar sixty />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiSqllite size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Sqlite</ListParagraph>
            <SkillBar ninety />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiPostgresql size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Postgresql</ListParagraph>
            <SkillBar eighty />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiMysql size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>MySQL</ListParagraph>
            <SkillBar fifty />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiPlanetscale size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Planetscale</ListParagraph>
            <SkillBar fifty />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiSupabase size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Supabase</ListParagraph>
            <SkillBar fifty />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiDocker size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Docker</ListParagraph>
            <SkillBar fifty />
            <br />
          </ListContainer>
        </ListItem>
      </List>
      <Hr colorAlt />
      {/* Mobile App Dev */}
      <List>
        <br />
        <ListTitle>Mobile App Dev</ListTitle>
        <br />
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>React Native</ListParagraph>
            <SkillBar ninety />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiTauri size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Tauri</ListParagraph>
            <SkillBar seventy />
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
          <picture>
            <DiRust size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Rust</ListParagraph>
            <SkillBar eighty />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiTypescript size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Typescript</ListParagraph>
            <SkillBar ninety />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiGo size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Golang</ListParagraph>
            <SkillBar seventy />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiGnubash size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Bash</ListParagraph>
            <SkillBar ninety />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiLua size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Lua</ListParagraph>
            <SkillBar ninety />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiC size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>C</ListParagraph>
            <SkillBar ninety />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiCplusplus size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>C++</ListParagraph>
            <SkillBar ninety />
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
          <picture>
            <DiGoogleCloudPlatform size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Google Cloud</ListParagraph>
            <SkillBar eighty />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiGo size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Go</ListParagraph>
            <SkillBar thirty />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiRust size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Rust</ListParagraph>
            <SkillBar thirty />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiDocker size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Docker</ListParagraph>
            <SkillBar eighty />
            <br />
          </ListContainer>
        </ListItem>
      </List>
      <Hr colorAlt />
      {/* Others */}
      <List>
        <br />
        <ListTitle>Tools</ListTitle>
        <br />
        <ListItem>
          <picture>
            <DiTerminal size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Terminal</ListParagraph>
            <SkillBar ninety />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiGit size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Git</ListParagraph>
            <SkillBar seventy />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <GoGear size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>APIs</ListParagraph>
            <SkillBar eighty />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiLinux size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Linux</ListParagraph>
            <SkillBar sixty />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiNeovim size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Neovim</ListParagraph>
            <SkillBar ninety />
            <br />
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiVim size="3rem" />
          </picture>
          <ListContainer>
            <ListParagraph>Vim</ListParagraph>
            <SkillBar ninety />
            <br />
          </ListContainer>
        </ListItem>
      </List>
      <Hr colorAlt />
      <br />
      {/* <SectionDivider colorAlt /> */}
      <br />
    </Section>
  );
}
