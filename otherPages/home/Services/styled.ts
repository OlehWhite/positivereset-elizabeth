import { Box, styled } from "@mui/material";

export const WrapperBox = styled(Box)(() => {
  return {
    width: "100%",
    maxWidth: 635,
    height: "100%",
    maxHeight: 365,
    transition: ".3s",
    cursor: "pointer",

    "&:hover": {
      transition: ".3s",
      boxShadow: "0px 0px 20px 10px silver",
    },

    "@media (max-width: 1400px)": {
      width: 550,
      height: 350,
    },

    "@media (max-width: 1300px)": {
      width: 450,
      height: 250,
    },

    "@media (max-width: 661px)": {
      width: 440,
      maxWidth: "100%",
    },

    "@media (max-width: 476px)": {
      width: 300,
      maxWidth: "100%",
    },
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-evenly",
    maxWidth: 1303,
    margin: "35px auto 35px",

    "@media (max-width: 1200px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  };
});
