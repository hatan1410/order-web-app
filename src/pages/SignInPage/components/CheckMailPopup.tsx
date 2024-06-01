import React from "react";

interface CheckMailPopupProps {
  isOpen: boolean;
  onClose: () => void;
  resendMagicLink: () => Promise<void>;
}

const CheckMailPopup = ({ isOpen, resendMagicLink }: CheckMailPopupProps) => {
  return (
    <>
      {isOpen && (
        <div className="absolute flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.6)]">
          <div className="w-72 rounded-md bg-white p-4">
            <h2 className="text-l mb-3 font-bold">Check your email</h2>
            <h4 className="text-sm mb-3">
              We've sent you a link to your email. Click on the link to log in!
            </h4>
            <button
              className="w-full rounded-md bg-[#3942A9] py-2 text-white"
              onClick={() => resendMagicLink()}
            >
              Resend
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckMailPopup;
