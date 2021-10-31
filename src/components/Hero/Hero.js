import React from "react";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import Button from "../../styles/GlobalComponents/Button";
import { SiDungeonsanddragons } from 'react-icons/si';


export default function Hero (props) {
    return (
        <>
            <Section row nopadding>
                <LeftSection>
                    <SectionTitle main center>
                        Full Stack Mobile, <br />
                        Web <SiDungeonsanddragons /> Software <br />
                        Development
                    </SectionTitle>
                    <SectionText>
                        Work Fuelled By Curiousity And Determination
                    </SectionText>
                    <Button onClick={props.handleClick}>Learn More</Button>
                </LeftSection>
            </Section>
        </>
    )
}