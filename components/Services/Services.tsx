import { MUIButton, Container } from "./styled";
import { DATA_LINKS } from "./constants";
import { Ul, Li } from "./styled";
import Menu from "@mui/material/Menu";
import * as React from "react";
import { FC } from "react";
import Link from "next/link";

interface TServices {
  color?: string;
}

export const Services: FC<TServices> = ({ color }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <MUIButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: color ? "#555" : undefined, paddingBottom: "1px" }}
      >
        Services
      </MUIButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Ul>
          {DATA_LINKS.map((link, index) => (
            <Li key={index} onClick={handleClose}>
              <Link href={link.path} passHref id="link">
                {link.name}
              </Link>
            </Li>
          ))}
        </Ul>
      </Menu>
    </Container>
  );
};
