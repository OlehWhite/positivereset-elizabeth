import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import {
  ButtonSubmit,
  InputWrapper,
  Label,
  StyledForm,
  Success,
  TextField,
  Title,
  Wrapper,
  WrapperHeader,
} from "../otherPages/appointmentRequest/style";
import { Box } from "@mui/material";
import PreferredDataAndTimeField from "../components/FormFields/PreferredDataAndTimeField/PreferredDataAndTimeField";
import PhoneNumberField from "../components/FormFields/PhoneNumberField/PhoneNumberField";
import ErrorValidation from "../components/ErrorValidation/ErrorValidation";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import EmailField from "../components/FormFields/EmailField/EmailField";
import NameField from "../components/FormFields/NameField/NameField";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import { PRIVATE_DATA } from "../otherPages/privateData";
import { Iframe } from "../otherPages/career/style";
import IMGHeader from "../public/NAPr4GWk.jpeg";
import React, {useEffect, useState} from "react";
import Head from "next/head";
import axios from "axios";

interface IForm {
  Name: string;
  Phone: string;
  Email: string;
  Preferred_Data_And_Time: string;
  Message: string;
}

const ID = "illinoisBehavioralCareTelEmailAddress";

const AppointmentRequest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<IForm>({
    mode: "onBlur",
    defaultValues: {
      Name: "",
      Phone: "",
      Email: "",
      Preferred_Data_And_Time: "",
      Message: "",
    },
  });
  const [state, stateSubmit] = useFormspree(`${PRIVATE_DATA.keyID}`);
  const [googleMap, setGoogleMap] = useState<string>("");

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${ID}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        setGoogleMap(
          response.data.items[0].fields.googleMap.content[0].content[0].value
        );
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const onSubmit = async (data: any) => {
    await stateSubmit(data);
    reset();
  };

  return (
    <>
      <Head>
        <title>
          Positive Reset Elizabeth - Call Today | Appointment
          Request
        </title>
        <meta
          name="keywords"
          content="Appointment request, Book appointment, Schedule appointment, Online appointment, Request appointment, Book online, Healthcare appointment, Medical appointment, Appointment booking, Patient appointment"
        />
        <meta name="description" content="APPOINTMENT REQUEST" />
      </Head>
      <OtherHeader />
      <Box>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <Title>APPOINTMENT REQUEST</Title>
        </WrapperHeader>
        <Wrapper>
          <Box>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <InputWrapper>
                <Label>Your Name</Label>
                <NameField register={register} errors={errors} />
                <ErrorValidation errors={errors.Name} />
              </InputWrapper>
              <InputWrapper>
                <Label>Your Phone Number</Label>
                <PhoneNumberField register={register} errors={errors} />
                <ErrorValidation errors={errors.Phone} />
              </InputWrapper>
              <InputWrapper>
                <Label>Your Email Address</Label>
                <EmailField register={register} errors={errors} />
                <ErrorValidation errors={errors.Email} />
              </InputWrapper>
              <InputWrapper>
                <Label>Preferred Date and Time</Label>
                <PreferredDataAndTimeField
                  register={register}
                  errors={errors}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Your Message</Label>
                <TextField
                  maxLength={1000}
                  style={errors.Message && { border: "1px solid red" }}
                  {...register("Message", {
                    required: "This field is required",
                  })}
                />
                <ErrorValidation errors={errors.Message} />
              </InputWrapper>
              <ButtonSubmit type="submit" disabled={!isValid || isSubmitting}>
                Submit
              </ButtonSubmit>
            </StyledForm>
            {state.succeeded && (
              <Success>Your message was sent successfully!</Success>
            )}
          </Box>
        </Wrapper>
        <Box sx={{ width: "100%", maxWidth: "1300px", margin: "0 auto 35px" }}>
          <Iframe src={googleMap}></Iframe>
        </Box>
        <Feedbacks />
      </Box>
    </>
  );
};

export default AppointmentRequest;
