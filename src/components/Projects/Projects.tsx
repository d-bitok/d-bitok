import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./ProjectsStyles";
import { projects } from "../../constants/constants";

export default function Projects() {
  return (
    <Section nopadding id="projects">
      <SectionTitle main>My Projects</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <BlogCard key={i}>
              <Img src={p.image} />
              <TitleContent>
                <HeaderThree>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={p.visit}>Website</ExternalLinks>
                <ExternalLinks href={p.github}>Source Code</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
      <SectionDivider colorAlt />
    </Section>
  );
}
