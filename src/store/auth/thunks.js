import { signInWithGoogle } from "../../firebase/providers";
import { checkCredentials, logout, login } from "./authSlice";

export const checkingAuth = (email, password) => {
  return async (dispatch) => {
    dispatch(checkCredentials());
  };
};
export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};
