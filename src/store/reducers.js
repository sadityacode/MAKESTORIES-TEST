/**
 * import all app reducers and export them to combine and integrate in the store
 * !Do not modify the store to combine reducers.
 */
import services from "../services/reducer";

let allReducersCombined = {
  ...services
};

export default allReducersCombined;
