import {
  Contact,
  ContactAndFollow,
  ContactInfo,
  Follow,
  FollowInfo,
  Tel,
  Title,
  Wrapper,
  WrapperFollow,
  WrapperImg,
  Address,
  LinkA,
} from "./styled";
import React, { FC, useState } from "react";
import IMGPhoneLogo from "../../../../public/silver-mobil.png";
import IMGFollowIcon from "../../../../public/silver-follow-icon.png";
import IMGFacebook from "../../../../public/facebook-icon.svg";
import IMGLinkedin from "../../../../public/linkedin-icon.svg";
import Image from "next/image";
import LogoImgDark from "../../../LogoImgDark/LogoImgDark";
import IMGLocation from "../../../../public/icons8-location-50-dark.png";
import Link from "next/link";
import { Box, Modal } from "@mui/material";
import { Iframe } from "../../../../otherPages/career/style";
import { LINKS, OTHER_INFO } from "../../../../otherPages/utils";

export const LayoutHeader: FC = () => {
  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);

  const handleOpen = () => setOpenModalWindow(true);
  const handleClose = () => setOpenModalWindow(false);

  return (
    <Wrapper>
      <LogoImgDark />
      <ContactAndFollow>
        <Contact>
          <WrapperImg>
            <Image
              src={IMGPhoneLogo}
              width={25}
              height={42}
              alt="Phone"
              title="Phone"
            />
          </WrapperImg>
          <ContactInfo>
            <Tel href={`tel:${OTHER_INFO.tel}`}>{OTHER_INFO.tel}</Tel>
            <Link id="link-email" href={OTHER_INFO.email_link}>
              {OTHER_INFO.email}
            </Link>
          </ContactInfo>
        </Contact>
        <Contact>
          <WrapperImg>
            <Image src={IMGLocation} width={45} alt="Phone" title="Phone" />
          </WrapperImg>
          <ContactInfo>
            <Address onClick={handleOpen}>{OTHER_INFO.address}</Address>
          </ContactInfo>
        </Contact>
        <Follow>
          <WrapperImg>
            <Image
              src={IMGFollowIcon}
              width={50}
              height={50}
              alt="Follow"
              title="Follow"
            />
          </WrapperImg>
          <FollowInfo>
            <Title>Follow Us</Title>
            <WrapperFollow>
              <LinkA href={LINKS.facebook} target="_blank">
                <Image
                  src={IMGFacebook}
                  width={12}
                  height={12}
                  alt="Facebook"
                  title="Facebook"
                />
              </LinkA>
              <LinkA href={LINKS.linkedin} target="_blank">
                <Image
                  src={IMGLinkedin}
                  width={12}
                  height={12}
                  alt="Linkedin"
                  title="Linkedin"
                />
              </LinkA>
            </WrapperFollow>
          </FollowInfo>
        </Follow>
        <Modal
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          open={openModalWindow}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto 35px",
            }}
          >
            <Iframe src={OTHER_INFO.google_map}></Iframe>
          </Box>
        </Modal>
      </ContactAndFollow>
    </Wrapper>
  );
};
