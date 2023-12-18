import { FiSmartphone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import imageUser from "../../Assets/Images/user.png";

import Container from "../Layouts/Container";
import DividerContainer from "../Layouts/DividerContainer";
import Button from "../Ui/Button";
import Profile from "../Ui/Profile";
import Modal from "../Ui/Modal";
import Input from "../Forms/Input";
import NavBar from "../Layouts/NavBar";

import React, { useState, useEffect } from "react";

import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

interface UserData {
  username: string;
  email: string;
  profile: { phone: string; picture: string };
}

function Account() {
  const { logout, token } = useAuth();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setUser(result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const inputs = [
    {
      name: "Nome",
      icon: BiUser,
      value: user?.username,
    },
    {
      name: "Email",
      icon: MdOutlineEmail,
      value: user?.email,
    },
    {
      name: "Telefone",
      icon: FiSmartphone,
      value: user?.profile.phone,
    },
  ];

  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const handleDeleteAccount = async () => {
    const response = await fetch("http://localhost:8000/api/users/me/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    await fetch(`http://localhost:8000/api/users/${data.id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    logout();
  };

  return (
    <Container>
      <NavBar />
      <Container customClass="columnSpace">
        <DividerContainer customClass="center">
          <Profile
            image={
              user?.profile.picture !== "http://localhost:8000/api/users/me/"
                ? user?.profile.picture
                : imageUser
            }
          />
        </DividerContainer>
        <DividerContainer customClass="column">
          {inputs.map((element: any, index: number) => (
            <Input
              name={element.name}
              Icon={element.icon}
              status={true}
              value={element.value}
              key={index}
            />
          ))}
        </DividerContainer>
        <DividerContainer>
          <Button
            name="Editar Conta"
            customClass="outline"
            handle={() => navigate("editar", { state: { user } })}
          />
          <Button
            name="Apagar Conta"
            customClass="outline"
            handle={() => setOpenModal(!openModal)}
          />
          <Button name="Sair" customClass="danger" handle={logout} />
        </DividerContainer>
        {openModal && (
          <Modal isOpen={setOpenModal} handle={handleDeleteAccount}>
            <p>Deseja apagar sua conta?</p>
          </Modal>
        )}
      </Container>
    </Container>
  );
}

export default Account;
