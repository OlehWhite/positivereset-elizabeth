import {
  Container,
  Title,
  Text,
  Label,
  Wrapper,
  Rating,
  TextRating,
} from "./styled";
import { LinearProgressWithLabel } from "../../../components/LinearProgressWithLabel/LinearProgressWithLabel";
import IGMLabel from "../../../public/signature-white-img.png";
import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import IMGLogo from "../../../public/gLLTpCpk.png";
import { PRIVATE_DATA } from "../../privateData";

const ID = "positiveresetHomeRating";

export const FranchiseOptions: FC = () => {
  const [rating, setRating] = useState<any>([]);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${ID}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        setRating(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <Container style={{ backgroundImage: `url(${IMGLogo.src})` }}>
      <Wrapper>
        <Box style={{ width: "100%", maxWidth: 500 }}>
          <Title>WHAT WE INTEND TO ACCOMPLISH</Title>
          <Text>
            Like our Mission, our Vision is ambitious. It describes what we
            believe to be a future we can help create, one which has significant
            improvements in the state of mental well-being.
          </Text>
        </Box>
        <Box>
          {rating.length > 0 &&
            rating.map((rating: any, index: number) => (
              <Rating key={index}>
                <TextRating>
                  {rating.fields.title.content[0].content[0].value}
                </TextRating>
                <LinearProgressWithLabel
                  value={Number(
                    rating.fields.number.content[0].content[0].value
                  )}
                />
              </Rating>
            ))}
        </Box>
      </Wrapper>
    </Container>
  );
};
