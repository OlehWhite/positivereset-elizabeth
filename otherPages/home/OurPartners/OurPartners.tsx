import { FC, useEffect, useRef, useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Img,
  Carusell,
  Clinicals,
  Link,
  Block,
} from "./styled";
import IMGRight from "../../../public/arrow-point-to-right.png";
import IMGLeft from "../../../public/arrow-point-to-left.png";

import { Box } from "@mui/material";
import Slider from "react-slick";
import axios from "axios";
import Image from "next/image";
import { PRIVATE_DATA } from "../../privateData";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  useTransform: false,
  responsive: [
    {
      breakpoint: 1335,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

type TPartners = {
  img: string;
  link: string;
};

const ID = "illinoisBehavioralCareOurPartners";

export const OurPartners: FC = () => {
  const ref = useRef<Slider | null>(null);

  const [partners, setPartners] = useState<TPartners[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${ID}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        setPartners([]);
        if (response.data.items.length > 0) {
          response.data.items.forEach((post?: any) => {
            const imgID = post.fields.img.sys.id;
            const link = post.fields.link;
            return axios
              .get(
                `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/assets/${imgID}?access_token=${PRIVATE_DATA.accessId}`
              )
              .then((response) => {
                const newPost: TPartners = {
                  img: response.data.fields.file.url,
                  link,
                };
                setPartners((prevPost) => [...prevPost, newPost]);
              });
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      onNext();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const onNext = (): void => {
    ref.current?.slickNext();
  };

  const onPrev = (): void => {
    ref.current?.slickPrev();
  };

  return (
    <Container>
      <Wrapper>
        <Box>
          <Title>OUR PARTNERS</Title>
        </Box>
        <Carusell>
          <Image
            src={IMGLeft}
            width={60}
            height={60}
            alt="Left Button"
            title="Left Button"
            onClick={onPrev}
            id="arrow-off"
          />
          {partners.length > 0 && (
            <Clinicals ref={ref} {...settings}>
              {partners.map((partner, index) => (
                <Block key={index}>
                  <Link href={partner.link} target="_blank">
                    <Img
                      src={partner.img}
                      alt={partner.img}
                      title={partner.img}
                    />
                  </Link>
                </Block>
              ))}
            </Clinicals>
          )}
          <Image
            src={IMGRight}
            width={60}
            height={60}
            alt="Right Button"
            title="Right Button"
            onClick={onNext}
            id="arrow-off"
          />
        </Carusell>
      </Wrapper>
    </Container>
  );
};
