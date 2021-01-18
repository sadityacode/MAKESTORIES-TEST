// import actions
import { isDataLoading } from "./actions";

const dataLoadingStart = () => dispatch => {
  // start loading
  dispatch(
    isDataLoading({
      isLoading: true
    })
  );
};

const dataLoadingStop = () => dispatch => {
  // stop loading
  dispatch(
    isDataLoading({
      isLoading: false
    })
  );
};

export { dataLoadingStart, dataLoadingStop };
