import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import ThirdPartyPasswordless from "supertokens-web-js/recipe/thirdpartypasswordless";

SuperTokens.init({
  appInfo: {
    apiDomain: "http://localhost:3000",
    apiBasePath: "/apiauth",
    appName: "san-consumer-app",
  },
  recipeList: [Session.init(), ThirdPartyPasswordless.init()],
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
