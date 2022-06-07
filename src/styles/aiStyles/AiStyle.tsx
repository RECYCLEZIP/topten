import styled from "styled-components";

import { Button } from "../ButtonStyles";

export const Container = styled.div`
  padding: 5% 8%;
`;

export const AiTopTitle = styled.span`
  font-size: 1rem;
`;

export const AiImageUploadSection = styled.div`
  margin: 1rem 3rem;
`;

export const AiImageContainer = styled.div`
  background: #9eacba;

  width: 100%;
  height: 10rem;

  margin-bottom: 0.5rem;

  display: flex;
  justify-content: center;

  border-radius: 0.5rem;

  overflow: hidden;
`;

export const AiImage = styled.img`
  /* background: blue; */

  width: 100%;
  object-fit: cover;
`;

export const AiIconsContainer = styled.div`
  /* background: goldenrod; */

  display: flex;
  align-items: center;
`;

export const AiIcon = styled.img`
  width: 1rem;
  height: auto;

  margin-right: 0.2rem;
  display: flex;

  cursor: pointer;
`;

export const AiTopContainer = styled.div`
  /* background: green; */

  margin: 0 1rem;
  margin-bottom: 3rem;

  display: flex;
`;

export const AiTitleWrapper = styled.div`
  /* background: gray; */

  font-size: 0.9rem;
`;

export const AiButtonWrapper = styled.div`
  /* background: brown; */

  flex-grow: 1;
`;

export const AiButton = styled(Button)<{ isImgUploaded: boolean }>`
  height: 100%;

  padding: 0.3rem 1.2rem;

  float: right;

  border-radius: 0.3rem;

  font-size: 0.5rem;

  cursor: ${(props) => !props.isImgUploaded && "default"};
  background: ${(props) =>
    !props.isImgUploaded &&
    "linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), #21A663"};
`;

export const AiGuideLikeSection = styled.div`
  /* background: lightyellow; */

  width: 100%;

  margin-bottom: 2rem;
`;

export const AiGuidesTitle = styled.span`
  font-size: 0.8rem;

  color: #9eacba;
`;

export const AiGuidesContainer = styled.div`
  width: 100%;

  margin-top: 0.5rem;
  padding: 1rem;

  display: grid;
  justify-items: center;

  background: #ffffff;
  border: 1px solid #9eacba;
  border-radius: 1rem;
`;

export const AiGuideContainer = styled.div`
  /* background: lightgreen; */

  width: fit-content;

  margin: 0.5rem;

  text-align: center;
`;

export const AiGuideImgWrapper = styled.div`
  /* background: lightblue; */

  width: 10rem;
  height: 5.5rem;

  display: flex;

  margin: auto;

  overflow: hidden;

  justify-content: center;
`;

export const AiGuideImg = styled.img`
  width: 100%;

  object-fit: cover;

  /* transform: translate(0px, -10px); */
`;

export const AiGuideTitle = styled.span`
  font-size: 0.6rem;
  color: #9eacba;
`;
export const AiGuideDescription = styled.span`
  font-weight: 400;
`;
