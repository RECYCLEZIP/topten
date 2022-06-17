import styled from "styled-components";

export const MapContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2%;
  position: relative;
`;

export const SeoulImg = styled.img`
  width: 100%;
  opacity: 0.45;
`;

export const ContentContainer = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const MapText = styled.p`
  font-size: 1rem;
  margin: 0.2rem;
`;

export const MapButton = styled.button`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 0.2rem 0.8rem;
  font-size: 0.7rem;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0);
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    transition: all 0.5s;
  }
`;
