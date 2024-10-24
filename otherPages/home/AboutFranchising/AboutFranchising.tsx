import { FC, useEffect, useRef } from "react";
import Slider from "react-slick";
import {
  Container,
  Info,
  Text,
  Title,
  Carusell,
  Clinicals,
  Img,
  Wrapper,
  Button,
  PostText,
} from "./styled";
import IMGRight from "../../../public/arrow-point-to-right.png";
import IMGLeft from "../../../public/arrow-point-to-left.png";

import Image from "next/image";
import { useGetProjects } from "../../../services/getInfo";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

export const AboutFranchising: FC = () => {
  const router = useRouter();
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

  const getArrayLength = (): number => {
    if (project) {
      if (project?.blogs.length === 1) return 1;
      else if (project?.blogs.length === 2) return 1;
      else if (project?.blogs.length === 3) return 2;
      else return 3;
    }
  };

  const handleOpenBlog = (blogId: string) => {
    router.push(`/blogs/${blogId}`);
  };

  const onNext = (): void => {
    ref.current?.slickNext();
  };

  const onPrev = (): void => {
    ref.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: getArrayLength(),
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

  if (project?.blogs.length === 0) return false;

  return (
    <Container>
      <Info>
        <Title>STAYING INFORMED WITHOUT COMPROMISING YOUR MENTAL HEALTH</Title>
        <Text>
          Reading news helps you to learn something new every day, and slow down
          aging. Reading news helps you to distinguish truth from falsehoods.
          Reading news can enhance your creativity. Reading news gives you leads
          with events.
        </Text>
      </Info>
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

        <Clinicals {...settings} ref={ref}>
          {project?.blogs
            .map((blog, index) => (
              <Wrapper key={index} onClick={() => handleOpenBlog(blog.id)}>
                <Img src={blog?.image} alt={blog?.title} title={blog?.title} />

                <Typography mt={2} width={350} fontWeight={600}>
                  {blog?.title}
                </Typography>

                <Typography pt={2} fontSize={14} color="#a8a8a8">
                  {blog?.date}
                </Typography>
              </Wrapper>
            ))
            .reverse()
            .slice(0, 4)}
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
    </Container>
  );
};
