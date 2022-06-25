import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { Button } from "../ButtonStyles";
import { Container } from "../basicStyle";

export const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 10,
  width: "100%",

  // backgroundColor: "pink",

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
