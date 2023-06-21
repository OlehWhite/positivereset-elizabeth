import { styled, Box } from "@mui/material";
import { createGlobalStyle } from "styled-components";

export const Wrapper = styled(Box)(() => {
  return {
    margin: "0 auto",
  };
});

export const Img = styled(Box)(({ show }: { show: number }) => {
  return {
    display: "flex",
    position: "fixed",
    bottom: 30,
    right: 30,
    backgroundColor: "#34495e",
    borderRadius: "50%",
    visibility: show ? "visible" : "hidden",
    opacity: show ? 1 : 0,
    transition: "visibility 0s linear 0.3s, opacity 0.3s linear",
    cursor: "pointer",
    width: 30,
    padding: 10,
  };
});

export const Arrow = styled(Box)(() => {
  return {};
});

export const ShowBlock = styled(Box)(() => {
  return {
    marginTop: 2,

    "@media (max-width: 950px)": {
      display: "none",
    },
  };
});

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    font-weight: 400;
  }
`;
