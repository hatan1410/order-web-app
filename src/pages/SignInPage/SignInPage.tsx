import React, { useCallback, useState } from "react";
import CheckMailPopup from "./components/CheckMailPopup";
import useAuthentication from "./hooks/useAuthentication";

const SignInPage: React.FC = () => {
  //   const navigate = useNavigate();
  const {
    email,
    setEmail,
    sendMagicLink,
    isOpenPopup,
    setIsOpenPopup,
    resendMagicLink,
  } = useAuthentication();

  const handleButtonClick = useCallback(() => {
    // console.log("🇻🇳 ~ email:", email);
    sendMagicLink(email);
  }, [email]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <div className="flex h-screen w-full items-center bg-[#E2E2E2]">
      <div className=" h-[78%] w-full self-end rounded-t-2xl bg-white px-8">
        <h1 className="text-3xl mt-12 font-bold">Welcome to Boba</h1>
        <h1 className="text-xl mt-8 font-bold">Social Sign in</h1>

        <h1 className="text-l mb-3 mt-8 font-bold">Email</h1>
        <input
          className="mb-3.5 w-full rounded-md border px-2.5 py-2"
          type="text"
          value={email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
        <button
          className="w-full rounded-md bg-[#3942A9] py-2 text-white"
          onClick={handleButtonClick}
        >
          Sign up or login
        </button>
      </div>
      <CheckMailPopup
        isOpen={isOpenPopup}
        onClose={() => setIsOpenPopup(false)}
        resendMagicLink={resendMagicLink}
      />
    </div>
  );
};

export default SignInPage;
