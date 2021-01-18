import React, { Component } from "react";
import { dataLoadingStart, dataLoadingStop } from "../services";
import { connect } from "react-redux";
import { fire, storage } from "../config/fire";
import ToastUtils from "../utils/handleToast";
import history from "../history";

const mapStateToProps = state => {
  const { DATA_LOADING } = state;

  return {
    ...DATA_LOADING
  };
};

const mapDispatchToProps = {
  dataLoadingStart,
  dataLoadingStop
};

const Container = Main =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    class Presentation extends Component {
      _isMounted = false;
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

      componentDidMount() {
        this._isMounted = true;

        if (this._isMounted) {
          this.authListener();
        }
      }

      componentWillUnmount() {
        this._isMounted = false;
      }

      authListener = () => {};

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

      resetForm = async () => {
        let profilePictureRef = document.querySelector(
          "#signup-profilePicture"
        );

        profilePictureRef && (profilePictureRef.value = "");

        await this.setState({
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
          this.props.dataLoadingStart();
          fire
            .auth()
            .signInWithEmailAndPassword(loginEmail, loginPassword)
            .then(() => {
              const uid = fire.auth().currentUser.uid;

              fire
                .database()
                .ref(`Users/${uid}`)
                .once("value")
                .then(async snapshot => {
                  await this.props.dataLoadingStop();
                  ToastUtils.handleToast({
                    operation: "success",
                    message: `Welcome Home ${
                      snapshot.val() ? snapshot.val().fullName : "User"
                    }!`
                  });

                  // await this.resetForm();

                  history.push(`/user/${uid}`);
                })
                .catch(async error => {
                  await this.props.dataLoadingStop();
                  ToastUtils.handleToast({
                    operation: "success",
                    message: "Welcome Home User!"
                  });

                  // await this.resetForm();

                  history.push(`/user/${uid}`);
                });
            })
            .catch(async error => {
              await this.props.dataLoadingStop();
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
          this.props.dataLoadingStart();
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
                async error => {
                  await this.props.dataLoadingStop();
                  ToastUtils.handleToast({
                    operation: "error",
                    message: error.message
                  });

                  ToastUtils.handleToast({
                    operation: "success",
                    message: `${signupFullName} register successfully.`
                  });

                  // await this.resetForm();

                  history.push(`/user/${uid}`);
                },
                async () => {
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

                  await this.props.dataLoadingStop();

                  ToastUtils.handleToast({
                    operation: "success",
                    message: `${signupFullName} register successfully.`
                  });

                  // await this.resetForm();

                  history.push(`/user/${uid}`);
                }
              );
            })
            .catch(async error => {
              await this.props.dataLoadingStop();
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
