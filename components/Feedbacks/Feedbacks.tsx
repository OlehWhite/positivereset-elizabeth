import { Container, Wrapper, Name, Text } from "./styled";
import { FC, useEffect, useRef, useState } from "react";
import IMGIcon from "../../public/icons8.png";
import { Box } from "@mui/material";
import Slider from "react-slick";
import axios from "axios";
import Image from "next/image";
import { PRIVATE_DATA } from "../../otherPages/privateData";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  useTransform: false,
};

const ID = "feedbacks";

interface IColor {
  color?: string;
}

export const Feedbacks: FC<IColor> = ({ color }) => {
  const ref = useRef<Slider | null>(null);
  const [feedbacks, setFeedback] = useState<any>([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${ID}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        setFeedback(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current) {
        const totalSlides = feedbacks.length;
        const nextSlide = (activeSlide + 1) % totalSlides;
        setActiveSlide(nextSlide);
        ref.current.slickGoTo(nextSlide);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide, feedbacks]);

  return (
    <Container sx={{ background: color }}>
      <Wrapper>
        <Slider ref={ref} {...settings}>
          {feedbacks.length > 0 &&
            feedbacks.map((feedback: any, index: number) => (
              <Wrapper key={index}>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Image src={IMGIcon} alt="Img" title="Img" />
                </Box>
                <Box>
                  <Text>
                    {feedback.fields.title.content[0].content[0].value}
                  </Text>
                  <Name>
                    {feedback.fields.text.content[0].content[0].value}
                  </Name>
                </Box>
              </Wrapper>
            ))}
        </Slider>
      </Wrapper>
    </Container>
  );
};
