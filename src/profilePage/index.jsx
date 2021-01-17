import React from "react";
import Container from "./container";
import styled from "styled-components";
import background from "../assets/images/loginBackgroud.jpg";

const ProfilePage = props => {
  const { handleInputChange } = props;
  return (
    <>
      <Profilepage>
        <PageWrapper>
          <CoverPage />
          <Form>
            <BasicInfo>
              <ProfilePicture>
                <Figure />
                <ProfileIcon className="fa fa-pencil" />
                <Input
                  type="file"
                  accept="image/gif, image/jpeg, image/png"
                  id="profilePicture"
                  placeholder="Profile Picture"
                  name="signupProfilePicture"
                  onChange={e => handleInputChange(e, "file")}
                />
              </ProfilePicture>
              <FullName>
                <h3>name : </h3>
                <p>aditya sawant</p>
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
                <p>addisawant1001@gmail.com</p>
              </EmailId>
              <MobileNumber>
                <h3>mobile number : </h3>
                <p>+91 9820365585</p>
              </MobileNumber>
              <Age>
                <h3>age : </h3>
                <p>24</p>
              </Age>
              <Address>
                <h3>address : </h3>
                <p>mumbai, maharashtra</p>
              </Address>
            </BasicInfo>
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
  background: url(${background}) 50% 50% no-repeat;
  background-size: cover;
  border-radius: 50%;
  overflow: hidden;
  border: 7px solid #e03e6e;
`;

const FullName = styled.div``;

const About = styled.div``;

const EmailId = styled.div``;

const MobileNumber = styled.div``;

const Age = styled.div``;

const Address = styled.div``;

const Input = styled.input`
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

const ProfileIcon = styled.i`
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

export default Container(ProfilePage);
