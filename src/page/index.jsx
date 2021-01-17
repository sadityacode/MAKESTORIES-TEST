import React from "react";
import Container from "./container";
import styled from "styled-components";
import background from "../assets/images/loginBackgroud.jpg";

const LandingPage = props => {
  const {
    handleInputChange,
    loginEmail,
    loginPassword,
    typeOfForm,
    chnageFormType,
    signupEmail,
    signupPassword,
    signupFullName,
    signupMobileNumber,
    signupAddress,
    signupAge,
    signUpUser,
    signInUser
  } = props;
  return (
    <>
      <Landingpage>
        <BluryBackgroundImage />
        <PageWrapper>
          {typeOfForm === "signin" ? (
            <LoginContainer>
              <ImagePanel>
                <Text>
                  Don't have account, <SubText>create one!</SubText>
                </Text>
                <SignUp onClick={() => chnageFormType("signup")}>
                  sign up
                </SignUp>
              </ImagePanel>
              <LoginPanel>
                <Heading>cake shop</Heading>
                <Form>
                  <FormData>
                    <FormContainer>
                      <ProfileIcon className="fa fa-user" />
                      <Input
                        type="text"
                        id="login-email"
                        placeholder="Email Id"
                        name="loginEmail"
                        value={loginEmail}
                        onChange={handleInputChange}
                      />
                    </FormContainer>
                    <FormContainer>
                      <PasswordIcon className="fa fa-lock" />
                      <Input
                        type="password"
                        id="login-password"
                        placeholder="Password"
                        name="loginPassword"
                        value={loginPassword}
                        onChange={handleInputChange}
                      />
                    </FormContainer>
                  </FormData>
                  <FormControls className="form-controls">
                    <SignIn onClick={signInUser}>Sign In</SignIn>
                  </FormControls>
                </Form>
              </LoginPanel>
            </LoginContainer>
          ) : (
            <SignupContainer>
              <ImagePanel>
                <Text>
                  Already have an account, <SubText>sign in!</SubText>
                </Text>
                <SignIn onClick={() => chnageFormType("signin")}>
                  sign in
                </SignIn>
              </ImagePanel>
              <SignupPanel>
                <Heading>cake shop</Heading>
                <Form>
                  <FormData>
                    <FormContainer>
                      <ProfileIcon className="fa fa-user" />
                      <Input
                        type="text"
                        id="signup-email"
                        placeholder="Email Id"
                        name="signupEmail"
                        value={signupEmail}
                        onChange={handleInputChange}
                      />
                    </FormContainer>
                    <FormContainer>
                      <PasswordIcon className="fa fa-lock" />
                      <Input
                        type="password"
                        id="signup-password"
                        placeholder="Password"
                        name="signupPassword"
                        value={signupPassword}
                        onChange={handleInputChange}
                      />
                    </FormContainer>

                    <FormContainer className="half-width">
                      <ProfileIcon className="fa fa-pencil" />
                      <Input
                        type="text"
                        id="signup-fullname"
                        placeholder="Full Name"
                        name="signupFullName"
                        value={signupFullName}
                        onChange={handleInputChange}
                      />
                    </FormContainer>

                    <FormContainer className="half-width right-margin-none">
                      <ProfileIcon className="fa fa-phone" />
                      <Input
                        type="number"
                        id="signup-mobilenumber"
                        placeholder="Mobile Number"
                        name="signupMobileNumber"
                        value={signupMobileNumber}
                        onChange={handleInputChange}
                      />
                    </FormContainer>
                    <FormContainer className="three-forth-width">
                      <PasswordIcon className="fa fa-address-book" />
                      <Input
                        type="text"
                        id="signup-address"
                        placeholder="Address"
                        name="signupAddress"
                        value={signupAddress}
                        onChange={handleInputChange}
                      />
                    </FormContainer>
                    <FormContainer className="one-forth-width right-margin-none">
                      <PasswordIcon className="fa fa-birthday-cake" />
                      <Input
                        type="number"
                        id="signup-age"
                        placeholder="Age"
                        name="signupAge"
                        value={signupAge}
                        onChange={handleInputChange}
                      />
                    </FormContainer>
                    <FormContainer>
                      <ProfileIcon className="fa fa-camera" />
                      <Input
                        type="file"
                        accept="image/gif, image/jpeg, image/png"
                        id="signup-profilePicture"
                        placeholder="Profile Picture"
                        name="signupProfilePicture"
                        onChange={e => handleInputChange(e, "file")}
                      />
                    </FormContainer>
                  </FormData>
                  <FormControls className="form-controls">
                    <SignUp onClick={signUpUser}>Sign up</SignUp>
                  </FormControls>
                </Form>
              </SignupPanel>
            </SignupContainer>
          )}
        </PageWrapper>
      </Landingpage>
    </>
  );
};

const Landingpage = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const BluryBackgroundImage = styled.div`
  width: 110%;
  height: 110vh;
  background: url(${background}) 50% 50% no-repeat;
  background-size: cover;
  filter: blur(4px);
  -webkit-filter: blur(4px);
  position: absolute;
  z-index: -1;
  top: -10px;
  left: -10px;
`;

const PageWrapper = styled.div`
  max-width: 1920px;
  width: 70%;
  height: 100vh;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
`;

const SignupContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
`;

const ImagePanel = styled.div`
  width: 50%;
  padding: 30px;
  box-sizing: border-box;
  background: url(${background}) 50% 50% no-repeat;
  background-size: cover;
`;

const LoginPanel = styled.div`
  width: 50%;
  padding: 30px;
  box-sizing: border-box;
`;

const SignupPanel = styled.div`
  width: 50%;
  padding: 30px;
  box-sizing: border-box;
`;

const Heading = styled.h2`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.95);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
`;

const Form = styled.form`
  height: 85%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormContainer = styled.div`
  position: relative;

  &.half-width {
    width: 49%;
    display: inline-block;
    margin-right: 2%;
  }

  &.right-margin-none {
    margin-right: 0;
  }

  &.three-forth-width {
    width: 74%;
    display: inline-block;
    margin-right: 2%;
  }

  &.one-forth-width {
    width: 24%;
    display: inline-block;
  }
`;

const FormControls = styled.div`
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 10px 10px 50px;
  border-style: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  outline: none;
`;

const ProfileIcon = styled.i`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-80%);
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
`;

const PasswordIcon = styled.i`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-80%);
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
`;

const SignIn = styled.a`
  padding: 10px 30px;
  font-size: 15px;
  font-weight: 900;
  border-style: none;
  /* border: 4px solid #1b0d0a; */
  border-radius: 50px;
  text-transform: uppercase;
  color: #fff;
  background: #1b0d0a;
  color: #eebd9d;
  /* background-image: linear-gradient(to right, #aa076b, #61045f); */
  cursor: pointer;
`;

const FormData = styled.div``;

const Text = styled.p`
  font-size: 28px;
  color: #1b0d0a;
  font-weight: 800;
`;

const SubText = styled.span`
  display: block;
`;

const SignUp = styled.a`
  padding: 10px 30px;
  font-size: 15px;
  font-weight: 900;
  border-style: none;
  /* border: 4px solid #1b0d0a; */
  border-radius: 50px;
  text-transform: uppercase;
  color: #fff;
  background: #1b0d0a;
  color: #eebd9d;
  /* background-image: linear-gradient(to right, #aa076b, #61045f); */
  cursor: pointer;
`;

export default Container(LandingPage);
