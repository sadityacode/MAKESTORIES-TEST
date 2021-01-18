import React, { Component } from "react";
// import { getConferenceList } from "./services";
import { each, filter, size, map } from "lodash";
import { connect } from "react-redux";
import { fire, storage } from "../config/fire";
import ToastUtils from "../utils/handleToast";
import history from "../history";

const mapStateToProps = state => {
  const { LOADING_CONFERENCE, SUCCESS_CONFERENCE, ERROR_CONFERENCE } = state;

  return {
    ...LOADING_CONFERENCE,
    ...SUCCESS_CONFERENCE,
    ...ERROR_CONFERENCE
  };
};

const mapDispatchToProps = {
  // getConferenceList
};

const Container = Main =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    class ProfilePageContainer extends Component {
      _isMounted = false;
      state = {
        fullName: "",
        emailId: "",
        age: "",
        mobileNumber: "",
        address: "",
        profilePicture: "",
        typeOfField: "",
        isEdited: false,
        updatedProfilePicture: ""
      };

      componentDidMount() {
        this._isMounted = true;

        if (this._isMounted) {
          window.addEventListener("click", e => {
            e.target.classList.value.indexOf("fa-pencil") === -1 &&
              e.target.classList.value.indexOf("input-field") === -1 &&
              this.setState({
                typeOfField: ""
              });
          });

          this.fetchUserDetails();
        }
      }

      componentWillUnmount() {
        this._isMounted = false;
      }

      updateUserProfilePicture = () => {
        const { updatedProfilePicture } = this.state;

        const {
          match: {
            params: { uid }
          }
        } = this.props;

        const uploadImageTask = storage
          .ref(`Images/${uid}`)
          .put(updatedProfilePicture);

        uploadImageTask.on(
          "state_changed",
          snapshot => {},
          error => {
            ToastUtils.handleToast({
              operation: "error",
              message: error.message
            });
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

                this.setState({
                  profilePicture: url
                });
              });
          }
        );
      };

      updateUserData = () => {
        const {
          isEdited,
          fullName,
          emailId,
          address,
          age,
          mobileNumber
        } = this.state;
        if (isEdited) {
          const {
            match: {
              params: { uid }
            }
          } = this.props;

          fire
            .database()
            .ref(`Users/${uid}`)
            .update({
              fullName,
              emailId,
              address,
              age,
              mobileNumber
            })
            .then(() => {
              ToastUtils.handleToast({
                operation: "success",
                message: `Users data updated successfully.`
              });

              this.setState({
                isEdited: false
              });
            })
            .catch(error => {
              ToastUtils.handleToast({
                operation: "error",
                message: error.message
              });
            });
        }
      };

      fetchUserDetails = () => {
        const {
          match: {
            params: { uid }
          }
        } = this.props;

        if (uid) {
          fire
            .database()
            .ref(`Users/${uid}`)
            .once("value")
            .then(snapshot => {
              if (snapshot.val()) {
                const {
                  fullName,
                  emailId,
                  age,
                  mobileNumber,
                  address,
                  profilePicture
                } = snapshot.val();

                this.setState({
                  fullName,
                  emailId,
                  age,
                  mobileNumber,
                  address,
                  profilePicture
                });
              } else {
                ToastUtils.handleToast({
                  operation: "error",
                  message: `Something went wrong please try again`
                });

                history.push(`/`);
              }
            })
            .catch(error => {
              ToastUtils.handleToast({
                operation: "error",
                message: error.message
              });

              history.push(`/`);
            });
        } else {
          ToastUtils.handleToast({
            operation: "error",
            message: `Something went wrong please try again`
          });

          history.push(`/`);
        }
      };

      editField = (field = "") => {
        this.setState({
          typeOfField: field
        });
      };

      handleInputChange = async (e, type = "text") => {
        if (type === "text") {
          this.setState({
            [e.target.name]: e.target.value,
            isEdited: true
          });
        } else if (type === "file") {
          await this.setState({
            [e.target.name]: e.target.files[0]
          });
          this.updateUserProfilePicture();
        }
      };

      signOut = () => {
        fire
          .auth()
          .signOut()
          .then(() => {
            ToastUtils.handleToast({
              operation: "success",
              message: `User sign out successfully`
            });

            history.push("/");
          })
          .catch(error => {
            ToastUtils.handleToast({
              operation: "error",
              message: error.message
            });
          });
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
