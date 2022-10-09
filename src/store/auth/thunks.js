import { checkCredentials } from "./authSlice";

export const checkingAuth = (email, password) => {
  return async (dispatch) => {
    dispatch(checkCredentials());
  };
};
export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkCredentials());
  };
};
