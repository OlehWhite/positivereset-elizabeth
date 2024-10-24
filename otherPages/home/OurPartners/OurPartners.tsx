import { FC, useEffect, useRef } from "react";
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
import Image from "next/image";
import { useGetProjects } from "../../../services/getInfo";

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

export const OurPartners: FC = () => {
  const { project } = useGetProjects();

  const ref = useRef<Slider | null>(null);

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

  if (!project?.ourPartners) return;

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
          <Clinicals ref={ref} {...settings}>
            {project?.ourPartners.map((partner, index) => (
              <Block key={index}>
                <Link href={partner?.link} target="_blank">
                  <Img
                    src={partner?.image}
                    alt={partner?.title}
                    title={partner?.title}
                  />
                </Link>
              </Block>
            ))}
          </Clinicals>
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
