import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
// TODO: store to be added
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage
};

const reducerList = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, reducerList);

let store = createStore(reducerList, applyMiddleware(thunk));

let persistor = persistStore(store);
export default function configureStore() {
  return store;
}
export { store, persistor };
