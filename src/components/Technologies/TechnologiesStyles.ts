import styled from "styled-components";

// Image Styling
export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(79, 108, 176, 0.25) 53.8%,
    rgba(79, 108, 176, 0) 100%
  );
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;
export const MainImage = styled.img`
  width: 100%;
`;

// Horizontal Line

export const Hr = styled.div<{ colorAlt?: boolean; divider?: boolean }>`
  width: 100%;
  height: 1.2px;
  border-radius: 10px;
  opacity: 0.5;
  // background-color: #fff;
  background: ${(props) =>
    props.colorAlt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  margin: ${(props) => (props.divider ? "4rem 0" : "")};
`;

// Knowledge Skill Bar
export const SkillBar = styled.div<{
  colorAlt?: boolean;
  divider?: boolean;
  ten?: boolean;
  twenty?: boolean;
  thirty?: boolean;
  forty?: boolean;
  fifty?: boolean;
  sixty?: boolean;
  seventy?: boolean;
  eighty?: boolean;
  ninety?: boolean;
  hundred?: boolean;
}>`
  width: ${(props) =>
    props.ten
      ? "10%"
      : props.twenty
      ? "20%"
      : props.thirty
      ? "30%"
      : props.forty
      ? "40%"
      : props.fifty
      ? "50%"
      : props.sixty
      ? "60%"
      : props.seventy
      ? "70%"
      : props.eighty
      ? "80%"
      : props.ninety
      ? "90%"
      : props.hundred
      ? "100%"
      : "0px"};
  height: 8px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) =>
    props.colorAlt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  margin: ${(props) => (props.divider ? "4rem 0" : "")};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${(props) =>
      props.ten
        ? "10%"
        : props.twenty
        ? "20%"
        : props.thirty
        ? "30%"
        : props.forty
        ? "40%"
        : props.fifty
        ? "50%"
        : props.sixty
        ? "60%"
        : props.seventy
        ? "70%"
        : props.eighty
        ? "80%"
        : props.ninety
        ? "90%"
        : props.hundred
        ? "100%"
        : "0px"};
    height: 2px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: ${(props) =>
      props.ten
        ? "30px"
        : props.twenty
        ? "60px"
        : props.thirty
        ? "90px"
        : props.forty
        ? "120px"
        : props.fifty
        ? "150px"
        : props.sixty
        ? "180px"
        : props.seventy
        ? "210px"
        : props.eighty
        ? "240px"
        : props.ninety
        ? "270px"
        : props.hundred
        ? "300px"
        : "0px"};
    height: 2px;
  }
`;

// List Styling
export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 3rem 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 3px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
    gap: 3px;
  }
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    margin-left: 18px;
  }
`;
export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`;
export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 203px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 2px;
    max-width: 320px;
    flex-direction: row;
  }
`;
export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;
