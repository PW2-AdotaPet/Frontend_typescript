import { CiUser, CiLock } from "react-icons/ci";
import BoxLogin from "../Layouts/BoxLogin";
import Container from "../Layouts/Container";
import DividerContainer from "../Layouts/DividerContainer";
import Title from "../Layouts/Title";
import LinkLogin from "../Ui/LinkLogin";
import Button from "../Ui/Button";
import Style from "./Styles/Input.module.css";

import { useAuth } from "../../Context/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z
  .object({
    username: z
      .string({
        required_error: "Este campo é obrigatório!",
      })
      .min(3, { message: "O nome deve conter no minímo 3 carateres!" }),
    password: z
      .string({
        required_error: "Este campo é o obrigatório!",
      })
      .min(4, { message: "O senha deve conter no minímo 4 carateres!" }),
    password_confirmation: z
      .string({
        required_error: "Este campo é obrigatório!",
      })
      .min(4, { message: "O senha deve conter no minímo 4 carateres!" }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "As senha não são iguais!",
    path: ["password_confirmation"],
  });

type FormInput = z.infer<typeof schema>;

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
  });

  const { login } = useAuth();

  const handleRegister = async (data: FormInput) => {
    const { username, password, password_confirmation } = data;
    const response = await fetch("http://localhost:8000/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, password_confirmation }),
    });

    if (response.ok) {
      login(username, password);
    }
  };

  return (
    <Container customClass="center">
      <DividerContainer customClass="columnCenter">
        <BoxLogin>
          <Title contentTitle="Cadastro" />
          <form className={Style.Form} onSubmit={handleSubmit(handleRegister)}>
            <DividerContainer customClass="columnMin">
              <div className={Style.container}>
                <CiUser size={24} />
                <input
                  type="text"
                  placeholder="Insira seu nome de usuário"
                  {...register("username")}
                />
              </div>
              {errors.username?.message && (
                <p className={Style.inputError}>{errors.username?.message}</p>
              )}
              <div className={Style.container}>
                <CiLock size={24} />
                <input
                  type="password"
                  placeholder="Insira sua senha"
                  {...register("password")}
                />
              </div>
              {errors.password?.message && (
                <p className={Style.inputError}>{errors.password?.message}</p>
              )}
              <div className={Style.container}>
                <CiLock size={24} />
                <input
                  type="password"
                  placeholder="Confirme sua senha"
                  {...register("password_confirmation")}
                />
              </div>
              {errors.password_confirmation?.message && (
                <p className={Style.inputError}>
                  {errors.password_confirmation?.message}
                </p>
              )}
              <DividerContainer>
                <Button name="Entrar" customClass="success" type="submit" />
              </DividerContainer>
            </DividerContainer>
          </form>
        </BoxLogin>
        <p style={{ display: "flex" }}>
          Já possui uma conta?
          <LinkLogin name="Fazer login" link="/login" />
        </p>
      </DividerContainer>
    </Container>
  );
}

export default Register;
