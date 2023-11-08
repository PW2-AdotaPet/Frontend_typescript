import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Components/Pages/Home";

function RoutesContent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/adotar" replace/>} /> {/*Isso aqui é temporario, apenas para redirecionar para rota adotar*/}
      <Route path="/adotar" element={<Home />}/>
    </Routes>
  );
}

export default RoutesContent;
