import { useState } from "react";
import Style from "./style.module.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import DividerContainer from "../../Layouts/DividerContainer";

import { useAuth } from "../../../Context/AuthContext";

function BoxImage() {
  const navigate = useNavigate();

  const {token} = useAuth()

  const [fileImage, setFileImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileImage(e.target.files[0]);
    }
  };

  const handleUploadImage = async () => {
    if (fileImage) {

      let loggedUser = await fetch("http://localhost:8000/api/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })

      let loggedUserJSON = await loggedUser.json()
      let userProfileId = loggedUserJSON.profile.id

      const formData = new FormData();
      formData.append("picture", fileImage);

      fetch(`http://localhost:8000/api/profiles/${userProfileId}/`, {
					method: "PATCH",
					body: formData,
					headers: {
						Authorization:
							`Bearer ${token}`,
					},
				})
					.then((response) => {
						if (response.ok) {
							return response.json();
						}
						throw new Error("Erro ao enviar imagem");
					})
					.then((data) => {
						console.log("Imagem enviada com sucesso:", data);
            navigate("/conta")
					})
					.catch((error) => {
						console.error("Erro:", error);
					});
    } else {
      console.warn("Deu ruim!");
    }
  };
  return (
    <div className={Style.container}>
      <label htmlFor="image">
        <div>
          <p>Escolha sua foto de perfil</p>
        </div>
      </label>
      <input
        id="image"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <DividerContainer>
        <Button
          name="Voltar"
          customClass="outline"
          handle={() => navigate("/conta")}
        />
        <Button
          name="Salvar"
          customClass="success"
          handle={handleUploadImage}
        />
      </DividerContainer>
    </div>
  );
}

export default BoxImage;
