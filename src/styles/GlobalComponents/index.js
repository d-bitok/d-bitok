import styled from "styled-components";

// Section Components Styling
export const Section = styled.section`
    display: ${(props) => props.grid ? "grid" : "flex"};
    flex-direction: ${(props) => props.row ? "row" : "column"};
    margin: 0 auto;
    max-width: 1040px;
    box-sizing: content-box;
    position: relative;
    overflow: hidden;
    grid-template-columns: 1fr 1fr;

    @media ${(props) => props.theme.breakpoints.md} {
        padding: 24px 48px 0;
        flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        padding: ${(props) => props.nopadding ? "0" : "16px 16px 0"};

        width: calc(100vw - 32px);
        flex-direction: column;
    }
`;
export const SectionTitle = styled.h2``;
export const SectionText = styled.p``;
export const SectionDivider = styled.div``;
export const SectionSubText = styled.p``;

// Buttons Styling
export const SecondaryBtn = styled.button``;
export const ButtonBack = styled.div``;
export const ButtonFront = styled.button``;

// Links Styling
export const LinkContainer = styled.div``;
export const LinkIconImg = styled.div``;