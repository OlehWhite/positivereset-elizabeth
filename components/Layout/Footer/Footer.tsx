import {
  Container,
  Wrapper,
  Menu,
  Logo,
  WorkingHours,
  RecentPosts,
  Text,
  Ul,
  Li,
  WrapperPost,
  Post,
  Title,
  ImgPost,
  Contact,
  ContactInfo,
  Tel,
  WrapperImg,
  TextLogo,
  Day,
  WrapperAlarm,
  WrapperPosition,
  Days,
  Copyright,
  Links,
  Twitter,
  Linkedin,
  Facebook,
  TitleFooter,
  Address,
} from "./styled";
import IMGLocation from "../../../public/icons8-location-50-dark.png";
import { PRIVATE_DATA } from "../../../otherPages/privateData";
import ModalServices from "../../ModalServices/ModalServices";
import IMGFacebook from "../../../public/facebook-footer.svg";
import IMGLinkedin from "../../../public/linkedin-footer.svg";
import IMGAlarmClock from "../../../public/alarm-clock.png";
import IMGPhoneLogo from "../../../public/silver-mobil.png";
import IMGTwitter from "../../../public/twitter-footer.svg";
import { Iframe } from "../../../otherPages/career/style";
import React, { FC, useEffect, useState } from "react";
import LogoImg from "../../LogoImg/LogoImg";
import { Box, Modal } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { LINKS, OTHER_INFO, SCHEDULE } from "../../../otherPages/utils";

const BASE_MENU = [
  { page: "Home", path: "/" },
  { page: "Services", path: "/services" },
  { page: "Тelehealth", path: "/telehealth" },
  { page: "Appointment request", path: "/appointment-request" },
  { page: "Billing and Insurances", path: "/billing-and-insurances" },
  { page: "Career Opportunities", path: "/career-opportunities" },
];

interface Post {
  img: string;
  text: string;
  button: string;
}

const IDPosts = "aboutFranchising";

export const Footer: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${IDPosts}&access_token=${PRIVATE_DATA.accessId}`,
      )
      .then((response: any) => {
        if (response.data.items.length > 0) {
          response.data.items.map((post?: any) => {
            const imgID = post.fields.img.sys.id;
            const text = post.fields.text.content[0].content[0].value;
            const button = post.fields.button.content[0].content[0].value;

            return axios
              .get(
                `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/assets/${imgID}?access_token=${PRIVATE_DATA.accessId}`,
              )
              .then((response: any) => {
                const newPost: Post = {
                  img: response.data.fields.file.url,
                  text,
                  button,
                };
                setPosts((prevPost) => [...prevPost, newPost]);
              });
          });
        }
      })
      .catch((error: any) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handleOpen = () => setOpenModalWindow(true);
  const handleClose = () => setOpenModalWindow(false);

  return (
    <Container>
      <Wrapper>
        <Logo>
          <LogoImg />
          <TextLogo>
            If you or someone you know is struggling with depression, PTSD,
            post-partum, chemical dependency, or any other mental health or
            addiction concern, please contact us today.
          </TextLogo>
          <Contact>
            <WrapperImg sx={{ marginRight: 3 }}>
              <Image
                src={IMGPhoneLogo}
                width={25}
                height={40}
                alt="Phone"
                title="Phone"
              />
            </WrapperImg>
            <ContactInfo sx={{ width: 210 }}>
              <Tel href={`tel:${OTHER_INFO.tel}`}>{OTHER_INFO.tel}</Tel>
              <Link id="link-email-dark" href={OTHER_INFO.email_link}>
                {OTHER_INFO.email}
              </Link>
            </ContactInfo>
          </Contact>
          <Contact>
            <WrapperImg>
              <Image src={IMGLocation} width={40} alt="Phone" title="Phone" />
            </WrapperImg>
            <ContactInfo>
              <Address onClick={handleOpen}>{OTHER_INFO.address}</Address>
            </ContactInfo>
          </Contact>
        </Logo>
        <Menu>
          <Title>MENU</Title>
          <Ul>
            {BASE_MENU.map((link, index) => (
              <Li key={index}>
                {link.page !== "Services" ? (
                  <Link href={link.path} passHref id="white-footer-link">
                    {link.page}
                  </Link>
                ) : (
                  <ModalServices />
                )}
              </Li>
            ))}
          </Ul>
        </Menu>
        <RecentPosts>
          <Title>RECENT POST</Title>
          <WrapperPost>
            {posts.length > 0 &&
              posts.slice(0, 3).map((post: Post, index: number) => (
                <Post key={index}>
                  <ImgPost
                    src={post.img}
                    alt="First Post"
                    title="Second Post"
                  />
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Text>{post.text}</Text>
                  </Box>
                </Post>
              ))}
          </WrapperPost>
        </RecentPosts>
        <WorkingHours>
          <WrapperPosition>
            <WrapperAlarm>
              <Image
                src={IMGAlarmClock}
                width={45}
                height={45}
                alt="Alar"
                title="Alarm"
              />
            </WrapperAlarm>
          </WrapperPosition>
          <Days>
            {Object.entries(SCHEDULE).map((day, index) => (
              <Day key={index}>
                {day[0]}: {day[1]}
              </Day>
            ))}
          </Days>
        </WorkingHours>
      </Wrapper>
      <Copyright>
        <TitleFooter>
          Copyright © 2024 Vimax LLC. All rights reserved
        </TitleFooter>
        <Links>
          <Facebook href={LINKS.facebook} target="_blank">
            <Image
              src={IMGFacebook}
              width={20}
              height={20}
              alt="Facebook"
              title="Facebook"
            />
          </Facebook>
          <Twitter href={LINKS.twitter} target="_blank">
            <Image
              src={IMGTwitter}
              width={20}
              height={20}
              alt="Twitter"
              title="Twitter"
            />
          </Twitter>
          <Linkedin href={LINKS.linkedin} target="_blank">
            <Image
              src={IMGLinkedin}
              width={20}
              height={20}
              alt="Linkedin"
              title="Linkedin"
            />
          </Linkedin>
        </Links>
      </Copyright>
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
    </Container>
  );
};
