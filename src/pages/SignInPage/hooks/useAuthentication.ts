import { useAuthContext } from "contexts/AuthContext";
import { useCallback, useState } from "react";
import {
  clearPasswordlessLoginAttemptInfo,
  consumePasswordlessCode,
  createPasswordlessCode,
  getPasswordlessLoginAttemptInfo,
  resendPasswordlessCode,
} from "supertokens-web-js/recipe/thirdpartypasswordless";

const useAuthentication = () => {
  const [email, setEmail] = useState<string>("");
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  const { setIsAuthenticated } = useAuthContext();

  const sendMagicLink = useCallback(
    async (emailInput: string) => {
      try {
        const response = await createPasswordlessCode({
          email: emailInput,
        });

        console.log("🇻🇳 ~ sendMagicLink response:", response);

        if (response.status === "SIGN_IN_UP_NOT_ALLOWED") {
          // the reason string is a user friendly message
          // about what went wrong. It can also contain a support code which users
          // can tell you so you know why their sign in / up was not allowed.
          window.alert(response.reason);
        } else {
          setIsOpenPopup(true);
          setIsAuthenticated(true);
        }
      } catch (err: any) {
        if (err.isSuperTokensGeneralError === true) {
          // this may be a custom error message sent from the API by you,
          // or if the input email / phone number is not valid.
          window.alert(err.message);
        } else {
          window.alert("Oops! Something went wrong.");
        }
      }
    },
    [setIsAuthenticated],
  );

  const resendMagicLink = async () => {
    try {
      let response = await resendPasswordlessCode();

      if (response.status === "RESTART_FLOW_ERROR") {
        // this can happen if the user has already successfully logged in into
        // another device whilst also trying to login to this one.

        // we clear the login attempt info that was added when the createCode function
        // was called - so that if the user does a page reload, they will now see the
        // enter email / phone UI again.
        await clearPasswordlessLoginAttemptInfo();
        window.alert("Login failed. Please try again");
        window.location.assign("/auth");
      } else {
        // Magic link resent successfully.
        window.alert("Please check your email for the magic link");
      }
    } catch (err: any) {
      if (err.isSuperTokensGeneralError === true) {
        // this may be a custom error message sent from the API by you.
        window.alert(err.message);
      } else {
        window.alert("Oops! Something went wrong.");
      }
    }
  };

  const hasInitialMagicLinkBeenSent = async () => {
    return (await getPasswordlessLoginAttemptInfo()) !== undefined;
  };

  const isThisSameBrowserAndDevice = async () => {
    return (await getPasswordlessLoginAttemptInfo()) !== undefined;
  };

  const handleMagicLinkClicked = async () => {
    try {
      let response = await consumePasswordlessCode();

      if (response.status === "OK") {
        // we clear the login attempt info that was added when the createCode function
        // was called since the login was successful.
        await clearPasswordlessLoginAttemptInfo();
        if (
          response.createdNewRecipeUser &&
          response.user.loginMethods.length === 1
        ) {
          // user sign up success
        } else {
          // user sign in success
        }
        window.location.assign("/home");
      } else {
        // this can happen if the magic link has expired or is invalid
        // or if it was denied due to security reasons in case of automatic account linking

        // we clear the login attempt info that was added when the createCode function
        // was called - so that if the user does a page reload, they will now see the
        // enter email / phone UI again.
        await clearPasswordlessLoginAttemptInfo();
        window.alert("Login failed. Please try again");
        window.location.assign("/auth");
      }
    } catch (err: any) {
      if (err.isSuperTokensGeneralError === true) {
        // this may be a custom error message sent from the API by you.
        window.alert(err.message);
      } else {
        window.alert("Oops! Something went wrong.");
      }
    }
  };

  return {
    email,
    setEmail,
    sendMagicLink,
    isOpenPopup,
    setIsOpenPopup,
    resendMagicLink,
    hasInitialMagicLinkBeenSent,
    isThisSameBrowserAndDevice,
    handleMagicLinkClicked,
  };
};

export default useAuthentication;
