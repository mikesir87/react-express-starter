import reduxThunk from "redux-thunk";
import {applyMiddleware} from "redux";

export const middleware = applyMiddleware(
    reduxThunk,
);