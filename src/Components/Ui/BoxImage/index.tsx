import { useState } from "react";
import Style from "./style.module.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import DividerContainer from "../../Layouts/DividerContainer";

function BoxImage() {
  const navigate = useNavigate();

  const [fileImage, setFileImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileImage(e.target.files[0]);
    }
  };

  const handleUploadImage = async () => {
    if (fileImage) {
      const formData = new FormData();
      formData.append("file", fileImage);
      console.log(formData);
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
        accept="imagem/*"
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
