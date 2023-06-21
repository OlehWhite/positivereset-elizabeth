import { styled, Box } from "@mui/material";
import Image from "next/image";

export const Container = styled("footer")(() => {
  return {
    backgroundColor: "#2c3e50",
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 1300,
    width: "100%",
    margin: "0 auto",
    padding: "74px 0 49px",

    "@media (max-width: 1335px)": {
      flexWrap: "wrap",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
    },
  };
});

export const Logo = styled(Box)(() => {
  return {
    weight: "100%",
    maxWidth: 315,
    margin: "0 24px 0",
  };
});

export const IMGLogo = styled(Image)(() => {
  return {
    maxWidth: 80,
    width: "100%",
    height: 40,
    margin: "2px 0 24px 0",
  };
});

export const Text = styled("p")(() => {
  return {
    color: "white",
    fontSize: 15,
    marginTop: 0,
  };
});

export const TextLogo = styled(Text)(() => {
  return {
    marginTop: 24,
    marginBottom: 24,
    textAlign: "right",
    lineHeight: "26px",
  };
});

export const Contact = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
  };
});

export const WrapperImg = styled(Box)(() => {
  return {
    marginRight: 16,
  };
});

export const ContactInfo = styled(Box)(() => {
  return {};
});

export const Tel = styled(Box)(() => {
  return {
    marginBottom: 2,
    color: "white",
    fontSize: 14,
  };
});

export const ImgPost = styled("img")(() => {
  return {
    width: 60,
    height: 60,
    borderRadius: "50%",
    marginRight: 24,
    objectFit: "cover",
  };
});

export const Title = styled("h2")(() => {
  return {
    color: "white",
    fontSize: 18,
    margin: "0 0 35px 0",
  };
});

export const WrapperPost = styled(Box)(() => {
  return {
    marginTop: 34,
  };
});

export const Post = styled(Box)(() => {
  return {
    display: "flex",
    marginBottom: 30,
  };
});

export const Ul = styled("ul")(() => {
  return {
    padding: 0,
  };
});

export const Li = styled("li")(() => {
  return {
    listStyleType: "none",
    borderBottom: "1px solid rgba(255,255,255,.08)",
    transition: ".3s",
    padding: "9px 0",

    "&:hover": {
      color: "#3498db",
    },
  };
});

export const Menu = styled("nav")(() => {
  return {
    margin: "0 24px 0",
    maxWidth: "100%",
    width: 390,

    "@media (max-width: 1335px)": {
      marginTop: 34,
    },
  };
});

export const RecentPosts = styled(Box)(() => {
  return {
    maxWidth: 300,
    width: "100%",
    margin: "0 16px 0",

    "@media (max-width: 1335px)": {
      marginTop: 34,
    },
  };
});

export const WorkingHours = styled(Box)(() => {
  return {
    maxWidth: 285,
    width: "100%",
    marginLeft: 24,
    backgroundColor: "#34495e",

    "@media (max-width: 1335px)": {
      marginTop: 34,
    },
  };
});

export const Day = styled("p")(() => {
  return {
    color: "white",
    fontWeight: 400,
    borderBottom: "1px solid rgba(255,255,255,.08)",
    padding: "8px 18px",
    fontSize: 14,
  };
});

export const WrapperAlarm = styled("div")(() => {
  return {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: 44,
    height: 44,
    backgroundColor: "#34495e",
    borderRadius: "50%",
    padding: 10,
    boxSizing: "content-box",
    textAlign: "center",
    position: "relative",
    bottom: 33,
    left: 110,

    "@media (max-width: 1335px)": {
      left: 115,
    },
  };
});

export const WrapperPosition = styled(Box)(() => {
  return {
    position: "absolute",
  };
});

export const Days = styled(Box)(() => {
  return {
    paddingTop: 24,
  };
});

export const Copyright = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 1300,
    margin: "0 auto",
    borderTop: "1px solid rgba(255,255,255,.08)",
  };
});

export const Links = styled(Box)(() => {
  return {
    display: "flex",
  };
});

export const Facebook = styled("a")(() => {
  return {
    width: 14,
    marginRight: 16,
    transition: ".3s",

    "&:hover": {
      filter: "brightness(0.5)",
      cursor: "pointer",
    },
  };
});

export const Twitter = styled("a")(() => {
  return {
    width: 14,
    marginRight: 16,

    "&:hover": {
      filter: "brightness(0.5)",
      cursor: "pointer",
    },
  };
});

export const Linkedin = styled("a")(() => {
  return {
    width: 14,
    transition: ".3s",

    "&:hover": {
      filter: "brightness(0.5)",
      cursor: "pointer",
    },
  };
});

export const TitleFooter = styled("p")(() => {
  return {
    color: "white",
    padding: "14px 0",
    fontSize: 14,
  };
});

export const Address = styled(Box)(() => {
  return {
    color: "#fff",
    fontWeight: 600,
    fontSize: 13,
    lineHeight: "18px",
    width: 214,
    cursor: "pointer",
    transition: ".3s",

    "&:hover": {
      color: "#3498db",
    },
  };
});
