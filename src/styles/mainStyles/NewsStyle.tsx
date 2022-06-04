import styled from "styled-components";

export const NewsContainer = styled.div`
  margin: 1% 5%;
`;

export const NewsTitle = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0;
  @media (min-width: 768px) {
    display: inline;
  }
`;

export const NewsDescriptionText = styled.span`
  font-size: 0.8rem;
  color: #9eacba;
  @media (min-width: 768px) {
    margin-left: 0.8rem;
  }
`;
