import styled2 from "styled-components";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { Button } from "../ButtonStyles";
import { Container } from "../basicStyle";

export const MapContainer = styled2(Container)`
padding-top: 0;
margin-top: 2.6rem;
`;

export const MapTop = styled2.div`
background: white;
z-index: 1;
width: 100%;
height: fit-content;
position: fixed;

padding-top: 2.5rem;
`;

export const MapTitle = styled2.span`
  // position: fixed;
`;
export const MapSearchSection = styled2.section`
  margin: 1rem 0;
  display: block;
  
  align-items: center;
  // position: fixed;
  
  @media (min-width: 768px) {
    display: flex;
    }
`;

export const AutocompleteContainer = styled2.div`
  display: flex;

  align-items: center;
`;

export const MapSearchTextWrapper = styled2.div`
  margin-right: 2rem;

  font-size: 0.6rem;
  font-weight: 500;
`;

export const MapBinSection = styled2.section`
  display: block;

  @media (min-width: 768px) {
    display: flex;
    }
`;

export const MapBinMapWrapper = styled2.div`
width: 85%;
height: 15rem;

position: fixed;

margin-top: 11.5rem;
margin-bottom: 3rem;

z-index: 1;


@media (min-width: 768px) {
  width: 40%;
  margin-top: 7.8rem;
  }
`;

export const MapBinListContainer = styled2.div`
  display: block;
  position: absolute;

  margin-top: 29rem;

  flex: 1;

  @media (min-width: 768px) {
    margin-top: 5rem;
    margin-left: 45%;
    // margin-left: 3rem;
  }
`;

export const MapBinLocationContainer = styled2.div`
  margin-bottom: 1rem;

  cursor: pointer;
`;

export const MapBinLacationTitle = styled2.div`
  margin-bottom: 0.2rem;
  font-size: 0.6rem;
`;

export const MapBinLacationDes = styled2.div`
  font-size: 0.53rem;

  color: #9eacba;
`;

export const BackWrapper = styled2.div`
    margin-bottom: 0.5rem;
    display: flex;
    `;

export const BackButton = styled2(Button)`
padding: 0.3rem 0.8rem;

    font-size: 0.5rem;
`;

export const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 10,
  width: "100%",

  "& input": {
    borderRadius: "3rem",
    padding: "0.3rem 0.5rem",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    border: `1px solid #eaecef`,

    "&:focus": {
      boxShadow: `0px 0px 0px 3px rgba(189, 189, 189, 0.171)`,
      borderColor: "rgb(153, 153, 153)",
    },
  },
}));

export const Listbox = styled("div")(({ theme }) => ({
  width: "4rem",
  height: "auto",
  // maxHeight: 200,

  // position: 'relative',

  margin: 0,
  padding: 0,
  zIndex: 1,

  backgroundColor: "red",
  fontSize: "0.53rem",

  listStyle: "none",
  overflow: "auto",
  // border: "1px solid rgba(0,0,0,.25)",

  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },

  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));
