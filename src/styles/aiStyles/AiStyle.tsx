import styled from "styled-components";

import { Button } from "../ButtonStyles";

// 공통
export const AiContentTitle = styled.span`
  margin-right: 0.4rem;

  font-size: 0.8rem;
`;

export const AiContentText = styled.span`
  font-size: 0.6rem;
`;

export const AiImageUploadSection = styled.div`
  margin: 1rem 0rem;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 768px) {
    margin: 1rem 3rem;
    margin-bottom: 0.5rem;
  }
`;

export const AiImageContainer = styled.div`
  background: #f0f2f5;

  width: 100%;
  height: 13rem;

  margin-bottom: 0.5rem;

  display: flex;
  justify-content: center;

  border-radius: 0.5rem;

  overflow: hidden;

  position: relative;
`;

export const UploadContainer = styled.div`
  /* background: purple; */

  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  align-self: center;
  text-align: center;

  cursor: pointer;
`;

export const UploadWrapper = styled.div`
  align-self: center;

  width: 100%;
`;

export const UploadNoticeWrapper = styled.div`
  /* background: red; */
  margin: 0.2rem;

  color: #9eacba;
  font-size: 0.6rem;
`;

export const UploadButton = styled.div`
  padding: 0.3rem 0.7rem;

  border-radius: 0.7rem;

  font-size: 0.53rem;

  display: inline-block;
  background-color: #21a663;
  border: none;

  color: white;

  cursor: pointer;

  &:hover {
    background-color: #2b9a61;
    transition: all 0.5s;
  }
`;

export const CameraShutterWrapper = styled.div`
  z-index: 100;

  bottom: 5px;
  position: absolute;
`;

export const CameraShutterIcon = styled.img`
  width: 2rem;
`;

export const CameraButton = styled.button`
  width: 3rem;
  height: 3rem;
`;

export const AiImageLayer = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  display: flex;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));

  top: 0;
  left: 0;
`;

export const AiSpinImg = styled.img`
  margin: auto;

  width: 15%;
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

  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin: 0 1rem;
    margin-bottom: 2rem;
    display: flex;
  }
`;

export const AiNoticeWrapper = styled.div`
  /* background: gray; */
  margin: auto;

  font-size: 0.8rem;
`;

export const AiButtonWrapper = styled.div`
  /* background: brown; */

  @media (min-width: 768px) {
    flex-grow: 1;
  }
`;

export const AiButton = styled(Button)<{
  situation: string;
}>`
  height: 100%;

  padding: 0.3rem 1.2rem;
  margin-top: 0.5rem;

  border-radius: 0.3rem;

  font-size: 0.6rem;

  @media (min-width: 768px) {
    float: right;
    margin-top: 0;
  }

  cursor: ${(props) =>
    (props.situation === "beforeImgUpload" ||
      props.situation === "analyzing") &&
    "default"};

  :disabled {
    background-color: #21a663;
  }

  &:hover {
    :disabled {
      background-color: #21a663;
    }
  }

  background: ${(props) =>
    // ?이미지 업로드 전
    // 이미지 업로드 false, 분석 중 false, 분석 완료 false

    // ?분석 중
    // 이미지 업로드 false, 분석 중 true, 분석 완료 false

    // ! 안 하는 경우
    // ?분석 완료
    // 이미지 업로드 false, 분석 중 false, 분석 완료 true
    (props.situation === "beforeImgUpload" ||
      props.situation === "analyzing") &&
    "linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), #21A663"};
`;

export const AiGuideSection = styled.div`
  /* background: lightyellow; */

  width: 100%;

  margin-bottom: 2rem;
`;

export const GuideNotice = styled.div`
  background: #f0f2f5;

  padding: 0.3rem 0.5rem;
  margin: 1rem;
  margin-top: 0rem;
  margin-bottom: 0rem;
  margin-left: 0rem;
  margin-right: 0rem;

  border-radius: 0.3rem;

  font-size: 0.5rem;
  color: #9eacba;

  width: fit-content;

  @media (min-width: 768px) {
    margin: 1rem;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
`;

export const AiGuidesTitle = styled(AiContentTitle)`
  color: #9eacba;
`;

export const AiGuidesContainer = styled.div`
  margin-top: 0.8rem;
  padding: 1rem 2rem;

  display: grid;

  justify-items: center;

  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 1rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const AiGuideContainer = styled.div`
  /* background: lightgreen; */

  width: fit-content;

  margin: 1rem 0;
  /* margin-bottom: 2rem; */

  text-align: center;

  @media (min-width: 768px) {
    margin: 1rem 0.5rem;
  }
`;

export const AiGuideImgWrapper = styled.div`
  /* background: lightblue; */

  width: 100%;
  width: 10rem;
  height: 8rem;

  display: flex;

  margin: auto;

  overflow: hidden;

  justify-content: center;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 10rem;
    height: 5.5rem;
  }
`;

export const AiGuideImg = styled.img`
  width: 100%;

  object-fit: cover;

  /* transform: translate(0px, -10px); */
`;

export const AiGuideTitle = styled(AiContentText)`
  color: #9eacba;
`;

export const DetailTitle = styled.a<{ click: boolean }>`
  color: #9eacba;
  font-size: 0.5rem;
  text-decoration: none;

  cursor: ${(props) => props.click && "pointer"};
`;
