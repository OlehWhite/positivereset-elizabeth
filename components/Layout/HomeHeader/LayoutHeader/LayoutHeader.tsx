import {
  Contact,
  ContactAndFollow,
  ContactInfo,
  Follow,
  FollowInfo,
  LinkA,
  Tel,
  Title,
  Wrapper,
  WrapperFollow,
  WrapperImg,
  Address,
} from "./styled";
import React, { FC, useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import IMGPhoneLogo from "../../../../public/white-mobil.png";
import IMGFollowIcon from "../../../../public/white-follow-icon.png";
import IMGFacebook from "../../../../public/facebook-icon.svg";
import IMGLinkedin from "../../../../public/linkedin-icon.svg";
import IMGLocation from "../../../../public/icons8-location-50.png";
import { PRIVATE_DATA } from "../../../../otherPages/privateData";
import LogoImg from "../../../LogoImg/LogoImg";
import Link from "next/link";
import { Iframe } from "../../../../otherPages/career/style";

const ID = "illinoisBehavioralCareTelEmailAddress";
const ID_Links = "illinoisBehavioralCareAllLinksIstagramLink";

export const LayoutHeader: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [telNum, setTelNum] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [linkFacebook, setLinkFaceBook] = useState<string>("");
  const [linkLinkedin, setLinkLinkedin] = useState<string>("");
  const [linkEmail, setLinkEmail] = useState<string>("");
  const [googleMap, setGoogleMap] = useState<string>("");
  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${ID}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        setTelNum(response.data.items[0].fields.telephoneNumber);
        setEmail(response.data.items[0].fields.email);
        setLocation(response.data.items[0].fields.address);
        setLinkEmail(response.data.items[0].fields.linkEmail);
        setGoogleMap(
          response.data.items[0].fields.googleMap.content[0].content[0].value
        );
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${ID_Links}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        setLinkFaceBook(response.data.items[0].fields.facebook);
        setLinkLinkedin(response.data.items[0].fields.linkedIn);
      });
  });

  const handleOpen = () => setOpenModalWindow(true);
  const handleClose = () => setOpenModalWindow(false);

  return (
    <Wrapper>
      <Box>
        <LogoImg />
      </Box>
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
          <ContactInfo sx={{ width: '210px' }}>
            <Tel>{telNum}</Tel>
            <Link id="link-email-dark" href={linkEmail}>
              {email}
            </Link>
          </ContactInfo>
        </Contact>
        <Contact>
          <WrapperImg>
            <Image src={IMGLocation} width={45} alt="Phone" title="Phone" />
          </WrapperImg>
          <ContactInfo>
            <Address onClick={handleOpen}>{location}</Address>
          </ContactInfo>
        </Contact>
        <Follow>
          <WrapperImg>
            <Image
              src={IMGFollowIcon}
              width={0}
              height={50}
              alt="Follow"
              title="Follow"
            />
          </WrapperImg>
          <FollowInfo>
            <Title>Follow Us</Title>
            <WrapperFollow>
              <LinkA href={linkFacebook} target="_blank">
                <Image
                  src={IMGFacebook}
                  width={12}
                  height={12}
                  alt="Facebook"
                  title="Facebook"
                />
              </LinkA>
              <LinkA href={linkLinkedin} target="_blank">
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
            <Iframe src={googleMap}></Iframe>
          </Box>
        </Modal>
      </ContactAndFollow>
    </Wrapper>
  );
};
