import React, { Component } from "react";
import { getConferenceList } from "./services";
import { each, filter, size, map } from "lodash";
import { connect } from "react-redux";
import { fire, storage } from "../config/fire";
import ToastUtils from "../utils/handleToast";

const mapStateToProps = state => {
  const { LOADING_CONFERENCE, SUCCESS_CONFERENCE, ERROR_CONFERENCE } = state;

  return {
    ...LOADING_CONFERENCE,
    ...SUCCESS_CONFERENCE,
    ...ERROR_CONFERENCE
  };
};

const mapDispatchToProps = {
  getConferenceList
};

const Container = Main =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    class Presentation extends Component {
      state = {
        loginEmail: "",
        loginPassword: "",
        signupEmail: "",
        signupPassword: "",
        signupFullName: "",
        signupMobileNumber: "",
        signupAddress: "",
        signupAge: "",
        signupProfilePicture: "",
        typeOfForm: "signin"
      };

      componentDidMount() {}

      chnageFormType = type => {
        this.setState({
          typeOfForm: type
        });
      };

      handleInputChange = (e, type = "text") => {
        type === "text"
          ? this.setState({
              [e.target.name]: e.target.value
            })
          : type === "file" &&
            this.setState({
              [e.target.name]: e.target.files[0]
            });
      };

      _fetchConferenceList = async () => {
        const responce = await this.props.getConferenceList();
        if (responce.status === 200) {
          const list = [...responce.data.free, ...responce.data.paid];
          await this.setState({
            conferenceDataList: [...list]
          });
        } else {
          await this.setState({
            conferenceDataList: []
          });
        }
      };

      resetForm = () => {
        let profilePictureRef = document.querySelector(
          "#signup-profilePicture"
        );

        profilePictureRef && (profilePictureRef.value = "");

        this.setState({
          loginEmail: "",
          loginPassword: "",
          signupEmail: "",
          signupPassword: "",
          signupFullName: "",
          signupMobileNumber: "",
          signupAddress: "",
          signupAge: "",
          signupProfilePicture: ""
        });
      };

      signInUser = () => {
        const { loginEmail, loginPassword } = this.state;

        if (loginEmail && loginPassword) {
          fire
            .auth()
            .signInWithEmailAndPassword(loginEmail, loginPassword)
            .then(() => {
              const uid = fire.auth().currentUser.uid;

              fire
                .database()
                .ref(`Users/${uid}`)
                .once("value")
                .then(snapshot => {
                  ToastUtils.handleToast({
                    operation: "success",
                    message: `Welcome Home ${
                      snapshot.val() ? snapshot.val().fullName : "User"
                    }!`
                  });

                  this.resetForm();
                })
                .catch(error => {
                  ToastUtils.handleToast({
                    operation: "success",
                    message: "Welcome Home User!"
                  });

                  this.resetForm();
                });
            })
            .catch(error => {
              ToastUtils.handleToast({
                operation: "error",
                message: error.message
              });
            });
        } else {
          ToastUtils.handleToast({
            operation: "error",
            message: "Please fill all the fields properly then try to login."
          });
        }
      };

      signUpUser = () => {
        const {
          signupEmail,
          signupPassword,
          signupFullName,
          signupMobileNumber,
          signupAddress,
          signupAge,
          signupProfilePicture
        } = this.state;

        if (
          signupEmail &&
          signupPassword &&
          signupFullName &&
          signupMobileNumber &&
          signupAddress &&
          signupAge &&
          signupProfilePicture
        ) {
          fire
            .auth()
            .createUserWithEmailAndPassword(signupEmail, signupPassword)
            .then(user => {
              const uid = fire.auth().currentUser.uid;

              fire
                .database()
                .ref(`Users/${uid}`)
                .set({
                  emailId: signupEmail,
                  fullName: signupFullName,
                  mobileNumber: signupMobileNumber,
                  address: signupAddress,
                  age: signupAge,
                  profilePicture: ""
                });

              const uploadImageTask = storage
                .ref(`Images/${uid}`)
                .put(signupProfilePicture);

              uploadImageTask.on(
                "state_changed",
                snapshot => {},
                error => {
                  ToastUtils.handleToast({
                    operation: "error",
                    message: error.message
                  });

                  ToastUtils.handleToast({
                    operation: "success",
                    message: `${signupFullName} register successfully.`
                  });

                  this.resetForm();
                },
                () => {
                  storage
                    .ref("Images")
                    .child(uid)
                    .getDownloadURL()
                    .then(url => {
                      fire
                        .database()
                        .ref(`Users/${uid}`)
                        .update({
                          profilePicture: url
                        });
                    });

                  ToastUtils.handleToast({
                    operation: "success",
                    message: `${signupFullName} register successfully.`
                  });

                  this.resetForm();
                }
              );
            })
            .catch(error => {
              ToastUtils.handleToast({
                operation: "error",
                message: error.message
              });
            });
        } else {
          ToastUtils.handleToast({
            operation: "error",
            message: "Please fill all the fields properly."
          });
        }
      };

      render() {
        const $this = this;

        /** Merge States and Methods */
        const stateMethodProps = {
          ...$this,
          ...$this.state,
          ...$this.props
        };
        return <Main {...stateMethodProps} />;
      }
    }
  );

export default Container;
