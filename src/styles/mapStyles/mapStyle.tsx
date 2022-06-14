import styled2 from "styled-components";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { Button } from "../ButtonStyles";

export const MapSearchSection = styled2.section`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  display: block;
  
  align-items: center;
  
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
width: 100%;
height: 15rem;

@media (min-width: 768px) {
  width: 45%;
  }
`;

export const MapBinListContainer = styled2.div`
  display: block;

  margin-top: 2rem;

  flex: 1;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 3rem;
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
