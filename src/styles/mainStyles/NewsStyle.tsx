import styled from "styled-components";

export const Container = styled.div`
  margin: 2% 8% 0;
  display: flex;
  align-items: center;
`;

export const NewsText = styled.span`
  font-size: 0.6rem;
`;

export const NewsTitle = styled.a`
  text-decoration: none;
  font-size: 0.6rem;
  color: #9eacba;
  @media (min-width: 768px) {
    margin-left: 0.8rem;
  }
`;

export const NewsContainer = styled.div`
  transition: transform 0.5s;
  align-items: center;
`;

export const AutoSlide = styled.div`
  display: flex;
  flex-direction: column;
`;
