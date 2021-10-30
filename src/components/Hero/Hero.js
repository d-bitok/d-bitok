import React from "react";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import Button from "../../styles/GlobalComponents/Button";

export default function Hero (props) {
    return (
        <>
            <Section row padding>
                <LeftSection>
                    <SectionTitle main center>
                        Welcome To <br />
                        My Personal Portfolio
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