import styled from "styled-components";

export const Container = styled.div`
  margin: 2% 8% 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const NewsText = styled.span`
  font-size: 0.6rem;
  text-align: left;
  width: 5.2rem;

  @media (max-width: 520px) {
    margin-bottom: 0.5rem;
  }
`;

export const NewsTitle = styled.a`
  display: flex;
  text-decoration: none;
  font-size: 0.5rem;
  color: #9eacba;
  height: 100%;
`;

export const NewsContainer = styled.div`
  align-items: center;
  overflow: hidden;
`;

export const AutoSlide = styled.div`
  height: 0.8rem;
`;
