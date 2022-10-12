import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmail,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkCredentials, logout, login } from "./authSlice";

export const checkingAuth = () => {
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
export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkCredentials());
    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmail({
      email,
      password,
      displayName,
    });

    if (!ok) return dispatch(logout(errorMessage));

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkCredentials());
    const { ok, uid, photoURL, errorMessage, displayName } =
      await loginWithEmailPassword({
        email,
        password,
      });

    if (!ok) return dispatch(logout(errorMessage));

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout(null));
  };
};
