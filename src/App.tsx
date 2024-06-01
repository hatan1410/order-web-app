import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "typeface-open-sans";
import "overlayscrollbars/overlayscrollbars.css";
import "assets/styles/scrollbar.css";
import "assets/styles/rc-collapse.css";
import "assets/styles/index.css";
import SignInPage from "pages/SignInPage/SignInPage";
import ProtectedRoute from "components/ProtectedRoute";
import { AuthProvider } from "contexts/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<SignInPage />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="home" element={<HomePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
