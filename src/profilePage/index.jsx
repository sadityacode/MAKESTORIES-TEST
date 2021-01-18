import React from "react";
import Container from "./container";
import styled from "styled-components";
import background from "../assets/images/cakeBackground.jpeg";
import dummyProfilePicture from "../assets/images/profilePicture.jpg";
import FullPageLoader from "../commonComponent/FullPageLoader";

const ProfilePage = props => {
  const {
    fullName,
    emailId,
    mobileNumber,
    age,
    address,
    profilePicture,
    editField,
    typeOfField,
    handleInputChange,
    isEdited,
    updateUserData,
    signOut,
    isLoading
  } = props;

  return (
    <>
      {isLoading && <FullPageLoader layerIndex={3} />}
      <Profilepage>
        <PageWrapper>
          <CoverPage />
          <Form>
            <BasicInfo>
              <ProfilePicture>
                <Figure
                  profile={
                    profilePicture ? profilePicture : dummyProfilePicture
                  }
                />
                <ImageProfileIcon className="fa fa-pencil" />
                <ImageInput
                  type="file"
                  accept="image/gif, image/jpeg, image/png"
                  id="profilePicture"
                  placeholder="Profile Picture"
                  name="updatedProfilePicture"
                  onChange={e => handleInputChange(e, "file")}
                />
              </ProfilePicture>
              <FullName>
                <h3>name : </h3>
                <ProfileIcon
                  className="fa fa-pencil"
                  onClick={() => editField("fullName")}
                />
                {typeOfField === "fullName" ? (
                  <EditContainer>
                    <Input
                      className={"input-field"}
                      type="text"
                      id="fullname"
                      placeholder="Full Name"
                      name="fullName"
                      value={fullName}
                      onChange={handleInputChange}
                    />
                  </EditContainer>
                ) : (
                  <p>{fullName}</p>
                )}
              </FullName>
              <About>
                <h3>about : </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus omnis voluptate facilis enim exercitationem quaerat,
                  temporibus vero debitis ad beatae nesciunt explicabo atque
                  illum eveniet. Quaerat exercitationem quasi dolore, dolorem
                  odit ipsam. Quia aliquid est officiis quam totam repellat, sit
                  quod quaerat quos, provident earum delectus mollitia numquam
                  doloribus cum et accusamus quae. Velit repudiandae officiis
                  aspernatur quo alias voluptatem voluptate laborum deserunt? Ea
                  facilis obcaecati esse ratione mollitia sit in dolores nostrum
                  eligendi porro facere officia vitae voluptatibus atque,
                  tenetur quas ducimus placeat corrupti debitis quae illo
                  laboriosam sint eius. Commodi reiciendis enim voluptas
                  necessitatibus, ullam optio fugit? Harum!
                </p>
              </About>
              <EmailId>
                <h3>email id : </h3>
                <p>{emailId}</p>
              </EmailId>
              <MobileNumber>
                <h3>mobile number : </h3>
                <ProfileIcon
                  className="fa fa-pencil"
                  onClick={() => editField("mobileNumber")}
                />
                {typeOfField === "mobileNumber" ? (
                  <EditContainer>
                    <Input
                      className={"input-field"}
                      type="number"
                      id="mobile-number"
                      placeholder="Mobile Number"
                      name="mobileNumber"
                      value={mobileNumber}
                      onChange={handleInputChange}
                    />
                  </EditContainer>
                ) : (
                  <p>+91 {mobileNumber}</p>
                )}
              </MobileNumber>
              <Age>
                <h3>age : </h3>
                <ProfileIcon
                  className="fa fa-pencil"
                  onClick={() => editField("age")}
                />
                {typeOfField === "age" ? (
                  <EditContainer>
                    <Input
                      className={"input-field"}
                      type="number"
                      id="age"
                      placeholder="Age"
                      name="age"
                      value={age}
                      onChange={handleInputChange}
                    />
                  </EditContainer>
                ) : (
                  <p>{age}</p>
                )}
              </Age>
              <Address>
                <h3>address : </h3>
                <ProfileIcon
                  className="fa fa-pencil"
                  onClick={() => editField("address")}
                />
                {typeOfField === "address" ? (
                  <EditContainer>
                    <Input
                      className={"input-field"}
                      type="text"
                      id="address"
                      placeholder="address"
                      name="address"
                      value={address}
                      onChange={handleInputChange}
                    />
                  </EditContainer>
                ) : (
                  <p>{address}</p>
                )}
              </Address>
            </BasicInfo>
            <FormControls className="form-controls">
              <SignOut onClick={signOut}>Sign Out</SignOut>
              <Update
                className={isEdited ? "active" : ""}
                onClick={updateUserData}
              >
                Update
              </Update>
            </FormControls>
          </Form>
        </PageWrapper>
      </Profilepage>
    </>
  );
};

const Profilepage = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  width: 100%;
  position: relative;
  overflow: hidden;

  h3 {
    text-transform: capitalize;
    font-size: 16px;
  }

  p {
    font-size: 15px;
    text-align: justify;
  }
`;

const PageWrapper = styled.div`
  max-width: 1920px;
  width: 70%;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
`;

const CoverPage = styled.div`
  height: 200px;
  background: url(${background}) 50% 50% no-repeat;
  background-size: cover;
`;

const Form = styled.form``;

const BasicInfo = styled.div`
  padding-top: 20px;
  position: relative;
`;

const ProfilePicture = styled.div`
  position: absolute;
  top: -100px;
  right: 50px;
`;

const Figure = styled.div`
  width: 150px;
  height: 150px;
  background: url(${props => props.profile}) 50% 50% no-repeat;
  background-size: cover;
  border-radius: 50%;
  overflow: hidden;
  border: 7px solid #e03e6e;
`;

const FullName = styled.div`
  margin-right: 225px;
  position: relative;

  &:hover i {
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;

const About = styled.div`
  position: relative;

  &:hover i {
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;

const EmailId = styled.div`
  position: relative;

  &:hover i {
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;

const MobileNumber = styled.div`
  position: relative;

  &:hover i {
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;

const Age = styled.div`
  position: relative;

  &:hover i {
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;

const Address = styled.div`
  position: relative;

  &:hover i {
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;

const ImageInput = styled.input`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 90%;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  opacity: 0;
  cursor: pointer;
`;

const ImageProfileIcon = styled.i`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: absolute;
  top: 90%;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);
  font-size: 15px;
  color: rgba(0, 0, 0, 0.8);
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const EditContainer = styled.div``;

const Input = styled.input`
  width: 100%;
  padding: 0 0 2px 0;
  border-style: none;
  border-bottom: 2px solid #e03e6e;
  background: transparent;
  outline: none;
  font-size: 15px;
  letter-spacing: 0.75px;
  box-sizing: border-box;
`;

const ProfileIcon = styled.i`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  cursor: pointer;
`;

const FormControls = styled.div`
  padding-top: 20px;
  margin-bottom: 20px;
`;

const SignOut = styled.a`
  padding: 10px 30px;
  margin-right: 5px;
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

const Update = styled.a`
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

  opacity: 0.7;

  &.active {
    opacity: 1;
    cursor: pointer;
  }
`;

export default Container(ProfilePage);
