import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Components/Pages/Home";
import Pet from "../Components/Pages/Pet";
import Account from "../Components/Pages/Account";
import Donate from "../Components/Pages/Donate";

function RoutesContent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/adotar" replace/>} /> {/*Isso aqui é temporario, apenas para redirecionar para rota adotar*/}
      <Route path="/adotar" element={<Home />}/>
      <Route path="/pet" element={<Pet />}/>
      <Route path="/conta" element={<Account />}/>
      <Route path="/doar" element={<Donate />}/>
    </Routes>
  );
}

export default RoutesContent;
