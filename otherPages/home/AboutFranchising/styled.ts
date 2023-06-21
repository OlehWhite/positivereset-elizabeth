import { styled, Box } from "@mui/material";
import Slider from "react-slick";

export const Container = styled(Box)(() => {
  return {
    maxWidth: 1300,
    width: "100%",
    margin: "35px auto",
  };
});

export const Info = styled(Box)(() => {
  return {
    textAlign: "center",
    maxWidth: 1040,
    width: "100%",
    margin: "0 auto",
  };
});

export const Carusell = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 34,
  };
});

export const Title = styled("h2")(() => {
  return {
    fontSize: 27,
    color: "#373737",
  };
});

export const Text = styled("p")(() => {
  return {
    fontSize: 18,
    color: "#666",
    lineHeight: "30px",
  };
});

export const Clinicals = styled(Slider)({
  maxWidth: 1150,
  margin: "0 auto",
  textAlign: "center",

  "@media (max-width: 1335px)": {
    width: 370,
  },
});

export const Img = styled("img")(() => {
  return {
    width: 350,
    height: 240,
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    maxWidth: 350,
    width: "100%",
    transition: ".3s",
  };
});

export const Button = styled("a")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    width: 150,
    height: 30,
    borderRadius: 0,
    border: 0,
    backgroundColor: "#3498db",
    color: "white",
    margin: "20px 20px",
    transition: ".3s",
    fontSize: 14,
    fontWeight: 600,
    textDecoration: "none",

    "&:hover": {
      transition: ".3s",
      backgroundColor: "#42affa",
    },
  };
});

export const PostText = styled(Box)(() => {
  return {
    fontSize: 16,
    fontWeight: 600,
    color: "#373737",
  };
});
