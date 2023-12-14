import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Components/Pages/Home";
import Pet from "../Components/Pages/Pet";
import Account from "../Components/Pages/Account";
import Donate from "../Components/Pages/Donate";
import Favorite from "../Components/Pages/Favorite";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import EditAccount from "../Components/Pages/EditAccount";
import DonatedPet from "../Components/Pages/DonatedPet";
import AdoptedPet from "../Components/Pages/AdoptedPet";

import { useAuth } from "../Context/AuthContext";
import EditDonate from '../Components/Pages/EditDonate';

function RoutesContent() {
  const { token } = useAuth();

  const isAuthenticated = !!token;

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/adotar" replace />} />{" "}
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to="/adotar" /> : <Register />}
      />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/adotar" /> : <Login />}
      />
      <Route
        path="/adotar"
        element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/pet"
        element={isAuthenticated ? <Pet /> : <Navigate to="/login" />}
      />
      <Route
        path="/conta/*"
        element={isAuthenticated ? <Account /> : <Navigate to="/login" />}
      />
      <Route
        path="/conta/editar"
        element={isAuthenticated ? <EditAccount /> : <Navigate to="/login" />}
      />
      <Route
        path="/doar"
        element={isAuthenticated ? <Donate /> : <Navigate to="/login" />}
      />
      <Route
        path="/favoritos"
        element={isAuthenticated ? <Favorite /> : <Navigate to="/login" />}
      />
      <Route
        path="/doados"
        element={isAuthenticated ? <DonatedPet /> : <Navigate to="/login" />}
      />
        <Route
          path="/doados/editar"
          element={isAuthenticated ? <EditDonate /> : <Navigate to="/login" />}
        />
      <Route
        path="/adotados"
        element={isAuthenticated ? <AdoptedPet /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default RoutesContent;
