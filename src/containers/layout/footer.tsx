const Footer = () => (
  <footer className="shadow-footer py-30px lg:px-35px flex w-full items-center justify-center bg-white px-4 lg:justify-between">
    <p className="text-gray-900">
      Copyright &copy; {new Date().getFullYear()}{" "}
      <a
        className="font-semibold transition-colors duration-200 ease-in-out hover:text-red-700"
        href="https://redq.io/"
      >
        RedQ, Inc.
      </a>{" "}
      All rights reserved
    </p>
  </footer>
);

export default Footer;
